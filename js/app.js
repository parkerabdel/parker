import { createMap, setOverlayOpacity, buildCentroidFC } from "./map.js";
import { showLotePopup, hidePopup } from "./popup.js";
import { LOTES } from "./data.js";

// ✅ MODO: editor / viewer
const MODE = window.LOTEVISTA_MODE || "editor";
const IS_VIEWER = MODE === "viewer";

const STORAGE_KEY = "lotevista_estados_v1";
const STORAGE_DATA_KEY = "lotevista_data_v1";

// ---------- Persistencia ESTADOS ----------
function loadEstadosFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveEstadosToStorage(estadosMap) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estadosMap));
  } catch {}
}

// ---------- Persistencia DATOS ----------
function loadDataFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_DATA_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveDataToStorage(dataMap) {
  try {
    localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(dataMap));
  } catch {}
}

// ---------- Cargar JSON externo ----------
// ✅ SIEMPRE lee el JSON primero — es la fuente de verdad
// El localStorage se actualiza desde el JSON cada vez que abre la app
async function loadJSONToStorage() {
  try {
    const res = await fetch("./data/ptoyecto/proyecto.json");
    if (!res.ok) return;
    const data = await res.json();

    // Siempre sobreescribe localStorage con el JSON
    if (data.estados) {
      saveEstadosToStorage(data.estados);
      console.log("✅ Estados cargados desde proyecto.json");
    }
    if (data.datos) {
      saveDataToStorage(data.datos);
      console.log("✅ Datos cargados desde proyecto.json");
    }
  } catch (e) {
    console.warn("⚠️ No se pudo cargar proyecto.json, usando localStorage:", e);
  }
}

// ---------- Aplicar ESTADOS ----------
function applyEstadosToLOTES() {
  const estadosMap = loadEstadosFromStorage();

  for (const f of LOTES.features) {
    const id = f.properties?.id;
    if (!id) continue;

    const saved = estadosMap[id];
    if (saved) f.properties.estado = String(saved).toLowerCase();
  }
}

// ---------- Aplicar DATOS ----------
function applyDataToLOTES() {
  const dataMap = loadDataFromStorage();

  for (const f of LOTES.features) {
    const id = f.properties?.id;
    if (!id) continue;

    const saved = dataMap[id];
    if (saved) Object.assign(f.properties, saved);
  }
}

// ---------- UI: Opacity Slider ----------
function initOpacityUI(map) {
  const slider = document.getElementById("opacitySlider");
  const val = document.getElementById("opacityVal");
  if (!slider) return;

  slider.addEventListener("input", (e) => {
    const v = Number(e.target.value || 0);
    const opacity = Math.max(0, Math.min(1, v / 100));
    if (val) val.textContent = `${v}%`;

    try {
      setOverlayOpacity(map, opacity);
    } catch {}
  });
}

// ---------- Cambiar ESTADO ----------
function updateLoteEstado(map, id, nextEstado) {
  if (IS_VIEWER) return null;

  const f = LOTES.features.find((x) => x.properties?.id === id);
  if (!f) return null;

  const estadoNorm = String(nextEstado || "").toLowerCase();
  f.properties.estado = estadoNorm;

  const estadosMap = loadEstadosFromStorage();
  estadosMap[id] = estadoNorm;
  saveEstadosToStorage(estadosMap);

  map.getSource("lotes")?.setData(LOTES);
  map.getSource("lotes-centroides")?.setData(buildCentroidFC(LOTES));

  return f;
}

// ---------- GUARDAR DATOS EDITADOS ----------
function updateLoteData(map, id, partial) {
  if (IS_VIEWER) return null;

  const f = LOTES.features.find((x) => x.properties?.id === id);
  if (!f) return null;

  Object.assign(f.properties, partial);

  const dataMap = loadDataFromStorage();
  dataMap[id] = { ...(dataMap[id] || {}), ...partial };
  saveDataToStorage(dataMap);

  map.getSource("lotes")?.setData(LOTES);
  map.getSource("lotes-centroides")?.setData(buildCentroidFC(LOTES));

  return f;
}

// ---------- Popup ----------
function openPopupForFeature(map, feature) {
  if (!feature) return;

  const id = feature.properties?.id;
  if (!id) return;

  const render = (feat) => {
    showLotePopup(feat, {
      canEdit: !IS_VIEWER,

      onChangeEstado: (nextEstado) => {
        if (IS_VIEWER) return;
        const updated = updateLoteEstado(map, id, nextEstado);
        if (updated) render(updated);
      },

      onSaveData: (partial) => {
        if (IS_VIEWER) return;
        const updated = updateLoteData(map, id, partial);
        if (updated) render(updated);
      },
    });
  };

  const real = LOTES.features.find((x) => x.properties?.id === id) || feature;
  render(real);
}

// ---------- Map Events ----------
function initMapEvents(map) {
  map.on("load", () => {
    map.on("click", "lotes-fill", (e) => {
      e.originalEvent?.stopPropagation?.();
      openPopupForFeature(map, e.features?.[0]);
    });

    if (map.getLayer("lotes-badge")) {
      map.on("click", "lotes-badge", (e) => {
        e.originalEvent?.stopPropagation?.();
        openPopupForFeature(map, e.features?.[0]);
      });
    }

    map.on("mouseenter", "lotes-fill", () => (map.getCanvas().style.cursor = "pointer"));
    map.on("mouseleave", "lotes-fill", () => (map.getCanvas().style.cursor = ""));
    if (map.getLayer("lotes-badge")) {
      map.on("mouseenter", "lotes-badge", () => (map.getCanvas().style.cursor = "pointer"));
      map.on("mouseleave", "lotes-badge", () => (map.getCanvas().style.cursor = ""));
    }

    map.on("click", (e) => {
      const hits = map.queryRenderedFeatures(e.point, { layers: ["lotes-fill", "lotes-badge"] });
      if (!hits.length) hidePopup();
    });
  });
}

// ---------- EXPORT JSON (solo editor) ----------
function buildProjectJSON() {
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    estados: loadEstadosFromStorage(),
    datos: loadDataFromStorage(),
  };
}

function downloadJSON(filename, obj) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);
}

function initExportUI() {
  if (IS_VIEWER) return;
  const btn = document.getElementById("exportBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const project = buildProjectJSON();
    downloadJSON("proyecto.json", project);
  });
}

// ---------- Init ----------
async function init() {
  // 1) Siempre lee el JSON primero — sobreescribe localStorage
  await loadJSONToStorage();

  // 2) Aplica datos al LOTES antes de crear el mapa
  applyEstadosToLOTES();
  applyDataToLOTES();

  // 3) Crea el mapa
  const map = createMap();

  // 4) Inicia UI
  initOpacityUI(map);
  initMapEvents(map);
  initExportUI();
}

init();

