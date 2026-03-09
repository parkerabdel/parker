export const MAPBOX_TOKEN = "pk.eyJ1IjoiYWJkZWxqaG9uYXRhbiIsImEiOiJjbW1jNXY0bncwMnc2MnBxNm00ZzBveGZvIn0.rP_64V5XYIAPk6OnOBoAKw";

export const MAP_CONFIG = {
  style: "mapbox://styles/mapbox/satellite-v9",
  center: [-74.257609, -13.137296],
  zoom: 16.5,
  pitch: 0,
  bearing: 0,
  antialias: true,
  maxZoom: 19.5,
};

// Coordenadas del overlay
export const CORNERS = [
  [-74.258683, -13.136444], // top-left
  [-74.257176, -13.136440], // top-right
  [-74.257171, -13.137917], // bottom-right
  [-74.258678, -13.137921]  // bottom-left
];

// imagen del plano
export const OVERLAY_IMAGE_URL = "./assets/overlays/plano.png";

// opacidad inicial
export const DEFAULT_OVERLAY_OPACITY = 0.8;


// ✅ AGREGA ESTO AL FINAL — una línea por imagen nueva
export const OVERLAYS_EXTRA = [
  {
    id: "plano-canones",
    url: "./assets/overlays/p2.png",  // ← tu imagen
    opacity: 0.8,
    corners: [
      [-74.257779, -13.135828], // top-left
      [-74.256722, -13.135825], // top-right
      [-74.256719, -13.136504], // bottom-right
      [-74.257777, -13.136508], // bottom-left
    ],
  },
  // imagen 2:
  // {
  //   id: "plano-huanupata",
  //   url: "./assets/overlays/plano-huanupata.png",
  //   opacity: 0.8,
  //   corners: [
  //     [lng, lat], // top-left
  //     [lng, lat], // top-right
  //     [lng, lat], // bottom-right
  //     [lng, lat], // bottom-left
  //   ],
  // },
];