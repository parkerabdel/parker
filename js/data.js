// js/data.js
// Importante: GeoJSON usa [LONGITUD, LATITUD]

export const LOTES = {
  type: "FeatureCollection",
  features: [
    
   // PROYECTO MACHAHUAYCCHO=======================
    // L01
    {
      type: "Feature",
      properties: { id:"M-L01",label: "L01" , estado: "disponible",labelPoint: [-74.257930, -13.137580]},
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.258028, -13.137633],
          [-74.257990, -13.137503],
          [-74.257802, -13.137511],
          [-74.257787, -13.137511],
          [-74.257927, -13.137680],
          [-74.258028, -13.137633]
        ]]
      }
    },

    // L02
    {
      type: "Feature",
      properties: { id: "M-L02",label:"L02", estado: "disponible" ,labelPoint: [-74.257883, -13.137463]},
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257990, -13.137503],
          [-74.257963, -13.137415],
          [-74.257775, -13.137423],
          [-74.257802, -13.137511],
          [-74.257990, -13.137503]
        ]]
      }
    },

    // L03
    {
      type: "Feature",
      properties: { id: "M-L03", label: "L03", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257963, -13.137415],
          [-74.257938, -13.137327],
          [-74.257749, -13.137335],
          [-74.257775, -13.137423],
          [-74.257963, -13.137415]
        ]]
      }
    },

    // L04
    {
      type: "Feature",
      properties: { id: "M-L04", label: "L04", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257938, -13.137327],
          [-74.257911, -13.137240],
          [-74.257723, -13.137247],
          [-74.257749, -13.137335],
          [-74.257938, -13.137327]
        ]]
      }
    },

    // L05
    {
      type: "Feature",
      properties: { id: "M-L05", label: "L05", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257911, -13.137240],
          [-74.257886, -13.137152],
          [-74.257697, -13.137159],
          [-74.257723, -13.137247],
          [-74.257911, -13.137240]
        ]]
      }
    },

    // L06
    {
      type: "Feature",
      properties: {  id: "M-L06", label: "L06", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257886, -13.137152],
          [-74.257859, -13.137064],
          [-74.257671, -13.137072],
          [-74.257697, -13.137159],
          [-74.257886, -13.137152]
        ]]
      }
    },

    // L07 (tenías el punto 3 repetido como 4; lo cierro correctamente)
    {
      type: "Feature",
      properties: {id:"M-L07",label:"L07", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257859, -13.137064],
          [-74.257834, -13.136976],
          [-74.257645, -13.136984],
          [-74.257671, -13.137072],
          [-74.257859, -13.137064]
        ]]
      }
    },

    // L08
    {
      type: "Feature",
      properties: {id:"M-L08",label:"L08", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257834, -13.136976],
          [-74.257807, -13.136888],
          [-74.257619, -13.136896],
          [-74.257645, -13.136984],
          [-74.257834, -13.136976]
        ]]
      }
    },

    // L09
    {
      type: "Feature",
      properties: {id:"M-L09",label:"L09", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257787, -13.137511],
          [-74.257802, -13.137511],
          [-74.257775, -13.137423],
          [-74.257749, -13.137335],
          [-74.257561, -13.137343],
          [-74.257716, -13.137425],
          [-74.257787, -13.137511]
        ]]
      }
    },

    // L10
    {
      type: "Feature",
      properties: {id:"M-L10",label:"L10", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257749, -13.137335],
          [-74.257723, -13.137247],
          [-74.257536, -13.137255],
          [-74.257561, -13.137343],
          [-74.257749, -13.137335]
        ]]
      }
    },

    // L11
    {
      type: "Feature",
      properties: {id:"M-L11",label:"L11", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257723, -13.137247],
          [-74.257697, -13.137159],
          [-74.257509, -13.137167],
          [-74.257536, -13.137255],
          [-74.257723, -13.137247]
        ]]
      }
    },

    // L12
    {
      type: "Feature",
      properties: {id:"M-L12",label:"L12", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257697, -13.137159],
          [-74.257671, -13.137072],
          [-74.257484, -13.137079],
          [-74.257509, -13.137167],
          [-74.257697, -13.137159]
        ]]
      }
    },

    // L13
    {
      type: "Feature",
      properties: { id:"M-L13",label:"L13", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257671, -13.137072],
          [-74.257645, -13.136984],
          [-74.257457, -13.136991],
          [-74.257484, -13.137079],
          [-74.257671, -13.137072]
        ]]
      }
    },

    // L14
    {
      type: "Feature",
      properties: {id:"M-L14",label:"L14", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257645, -13.136984],
          [-74.257619, -13.136896],
          [-74.257432, -13.136904],
          [-74.257457, -13.136991],
          [-74.257645, -13.136984]
        ]]
      }
    },

    // L15
    {
      type: "Feature",
      properties: { id:"M-L15",label:"L15", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257508, -13.137323],
          [-74.257463, -13.137173],
          [-74.257321, -13.137189],
          [-74.257346, -13.137214],
          [-74.257421, -13.137351],
          [-74.257508, -13.137323]
        ]]
      }
    },

    // L16
    {
      type: "Feature",
      properties: {id:"M-L16",label:"L16", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257463, -13.137173],
          [-74.257435, -13.137078],
          [-74.257229, -13.137100],
          [-74.257321, -13.137189],
          [-74.257463, -13.137173]
        ]]
      }
    },

    // L17
    {
      type: "Feature",
      properties: {id:"M-L17",label:"L17", estado: "disponible" , labelPoint: [-74.257310, -13.137050] },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257435, -13.137078],
          [-74.257412, -13.137001],
          [-74.257160, -13.137029],
          [-74.257229, -13.137100],
          [-74.257435, -13.137078]
        ]]
      }
    },

    // L18
    {
      type: "Feature",
      properties: {id:"M-L18",label:"L18", estado: "disponible" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.257412, -13.137001],
          [-74.257384, -13.136905],
          [-74.257284, -13.136908],
          [-74.257217, -13.136918],
          [-74.257120, -13.136987],
          [-74.257160, -13.137029],
          [-74.257412, -13.137001]
        ]]
      }
    },

   // PROYECTO PAMPACCHOCHA=======================


  // 👇 L1 DE PAMPACCHOCHA
    {
      type: "Feature",
      properties: { id: "P-L01", label: "L01", estado: "disponible", labelPoint: [-74.247208, -13.141027]},
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.247102, -13.141032],
          [-74.247151, -13.141109],
          [-74.247307, -13.141012],
          [-74.247258, -13.140936],
          [-74.247102, -13.141032],

        ]]
      }
    },


//  👇 L2 DE PAMPACCHOCHA
    {
      type: "Feature",
      properties: { id: "P-L02", label: "L02", estado: "disponible", labelPoint: [-74.247257, -13.141101]},
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.247151, -13.141109],
          [-74.247200, -13.141185],
          [-74.247356, -13.141089],
          [-74.247307, -13.141012],
          [-74.247151, -13.141109],

        ]]
      }
    },


// PROYECTO HUANUPATA======================= 
// ============================================
// PROYECTO HUANUPATA
// ============================================

// L1: P2,P3,P4,P5,P25
      {
        type: "Feature",
        properties: { id: "H-L01", label: "L01", estado: "disponible" },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-74.250468, -13.126054],  // P2
            [-74.250441, -13.125944],  // P3
            [-74.250412, -13.125868],  // P4
            [-74.250255, -13.125857],  // P5
            [-74.250311, -13.126044],  // P25
            [-74.250468, -13.126054]   // P2 (cierre)
          ]]
        }
      },

      // L2: P5,P6,P24,P25
      {
        type: "Feature",
        properties: { id: "H-L02", label: "L02", estado: "disponible" },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-74.250255, -13.125857],  // P5
            [-74.250097, -13.125845],  // P6
            [-74.250153, -13.126034],  // P24
            [-74.250311, -13.126044],  // P25
            [-74.250255, -13.125857]   // P5 (cierre)
          ]]
        }
      },

      // L3: P6,P7,P23,P24
      {
        type: "Feature",
        properties: { id: "H-L03", label: "L03", estado: "disponible" },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-74.250097, -13.125845],  // P6
            [-74.250006, -13.125839],  // P7
            [-74.250062, -13.126028],  // P23
            [-74.250153, -13.126034],  // P24
            [-74.250097, -13.125845]   // P6 (cierre)
          ]]
        }
      },

      // L4: P7,P8,P22,P23
      {
        type: "Feature",
        properties: { id: "H-L04", label: "L04", estado: "disponible" },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-74.250006, -13.125839],  // P7
            [-74.249916, -13.125833],  // P8
            [-74.249972, -13.126022],  // P22
            [-74.250062, -13.126028],  // P23
            [-74.250006, -13.125839]   // P7 (cierre)
          ]]
        }
      },

      // L5: P8,P9,P21,P22
      {
        type: "Feature",
        properties: { id: "H-L05", label: "L05", estado: "disponible" },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-74.249916, -13.125833],  // P8
            [-74.249826, -13.125826],  // P9
            [-74.249883, -13.126017],  // P21
            [-74.249972, -13.126022],  // P22
            [-74.249916, -13.125833]   // P8 (cierre)
          ]]
        }
      },

      // L6: P9,P10,P20,P21
      {
        type: "Feature",
        properties: { id: "H-L06", label: "L06", estado: "disponible" },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-74.249826, -13.125826],  // P9
            [-74.249746, -13.125821],  // P10
            [-74.249802, -13.126012],  // P20
            [-74.249883, -13.126017],  // P21
            [-74.249826, -13.125826]   // P9 (cierre)
          ]]
        }
      },

      // L7: P10,P11,P19,P20
      {
        type: "Feature",
        properties: { id: "H-L07", label: "L07", estado: "disponible" },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-74.249746, -13.125821],  // P10
            [-74.249657, -13.125814],  // P11
            [-74.249714, -13.126006],  // P19
            [-74.249802, -13.126012],  // P20
            [-74.249746, -13.125821]   // P10 (cierre)
          ]]
        }
      },

      // L8: P11,P12,P18,P19
      {
        type: "Feature",
        properties: {id: "H-L08", label: "L08", estado: "disponible" },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-74.249657, -13.125814],  // P11
            [-74.249568, -13.125808],  // P12
            [-74.249625, -13.126000],  // P18
            [-74.249714, -13.126006],  // P19
            [-74.249657, -13.125814]   // P11 (cierre)
          ]]
        }
      },

      // L9: P12,P13,P26,P27
      {
        type: "Feature",
        properties: {id: "H-L09", label: "L09", estado: "disponible" },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-74.249568, -13.125808],  // P12
            [-74.249369, -13.125794],  // P13
            [-74.249429, -13.125893],  // P26
            [-74.249591, -13.125887],  // P27
            [-74.249568, -13.125808]   // P12 (cierre)
          ]]
        }
      },

      // L10: P27,P26,P17,P18
      {
        type: "Feature",
        properties: { id: "H-L10", label: "L10", estado: "disponible" },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-74.249591, -13.125887],  // P27
            [-74.249429, -13.125893],  // P26
            [-74.249488, -13.125992],  // P17
            [-74.249625, -13.126000],  // P18
            [-74.249591, -13.125887]   // P27 (cierre)
          ]]
        }
      }, 


      // ============================================
      // PROYECTO CAÑONES
      // ============================================

      // L1: P1,P2,P3,P4,P18
      {
        type: "Feature",
        properties: { id: "C-L01", label: "L01", estado: "disponible" },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-74.247352, -13.134857],  // P1
            [-74.247278, -13.134876],  // P2
            [-74.247147, -13.134916],  // P3
            [-74.247118, -13.134928],  // P4
            [-74.247300, -13.135018],  // P18
            [-74.247352, -13.134857]   // P1 (cierre)
          ]]
        }
      },

      // L2: P4,P5,P17,P18
      {
        type: "Feature",
        properties: { id: "C-L02", label: "L02", estado: "disponible" },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-74.247118, -13.134928],  // P4
            [-74.247062, -13.135001],  // P5
            [-74.247279, -13.135088],  // P17
            [-74.247300, -13.135018],  // P18
            [-74.247118, -13.134928]   // P4 (cierre)
          ]]
        }
      },





// ============================================
// PROYECTO BUGANBILIAS
// ============================================

// L1: F,G,H,I
{
  type: "Feature",
  properties: { id: "B-L01", label: "L01", estado: "disponible" },
  geometry: {
    type: "Polygon",
    coordinates: [[
      [-74.254292, -13.127588],  // F
      [-74.254379, -13.127655],  // G
      [-74.254450, -13.127567],  // H
      [-74.254388, -13.127468],  // I
      [-74.254292, -13.127588]   // F (cierre)
    ]]
  }
},

// L2: I,J,E,F
{
  type: "Feature",
  properties: {id: "B-L02", label: "L02", estado: "disponible" },
  geometry: {
    type: "Polygon",
    coordinates: [[
      [-74.254388, -13.127468],  // I
      [-74.254340, -13.127391],  // J
      [-74.254224, -13.127536],  // E
      [-74.254292, -13.127588],  // F
      [-74.254388, -13.127468]   // I (cierre)
    ]]
  }
},

// L3: J,K,C,E
{
  type: "Feature",
  properties: { id: "B-L03", label: "L03", estado: "disponible" },
  geometry: {
    type: "Polygon",
    coordinates: [[
      [-74.254340, -13.127391],  // J
      [-74.254299, -13.127324],  // K
      [-74.254165, -13.127491],  // C
      [-74.254224, -13.127536],  // E
      [-74.254340, -13.127391]   // J (cierre)
    ]]
  }
},

// L4: B,C,K,L,M
{
  type: "Feature",
  properties: { id: "B-L04", label: "L04", estado: "disponible" },
  geometry: {
    type: "Polygon",
    coordinates: [[
      [-74.254110, -13.127448],  // B
      [-74.254165, -13.127491],  // C
      [-74.254299, -13.127324],  // K
      [-74.254284, -13.127300],  // L
      [-74.254230, -13.127299],  // M
      [-74.254110, -13.127448]   // B (cierre)
    ]]
  }
},

// L5: A,B,M,N
{
  type: "Feature",
  properties: { id: "B-L05", label: "L05", estado: "disponible" },
  geometry: {
    type: "Polygon",
    coordinates: [[
      [-74.253999, -13.127363],  // A
      [-74.254110, -13.127448],  // B
      [-74.254230, -13.127299],  // M
      [-74.254137, -13.127296],  // N
      [-74.253999, -13.127363]   // A (cierre)
    ]]
  }
},

// L6: A,O,P,D
{
  type: "Feature",
  properties: { id: "B-L06", label: "L06", estado: "disponible" },
  geometry: {
    type: "Polygon",
    coordinates: [[
      [-74.253999, -13.127363],  // A
      [-74.253930, -13.127396],  // O
      [-74.254140, -13.127557],  // P
      [-74.254182, -13.127504],  // D
      [-74.253999, -13.127363]   // A (cierre)
    ]]
  }
},

// L7: P,D,G,Q
{
  type: "Feature",
  properties: { id: "B-L07", label: "L07", estado: "disponible" },
  geometry: {
    type: "Polygon",
    coordinates: [[
      [-74.254140, -13.127557],  // P
      [-74.254182, -13.127504],  // D
      [-74.254379, -13.127655],  // G
      [-74.254336, -13.127708],  // Q
      [-74.254140, -13.127557]   // P (cierre)
    ]]
  }
},

























  ],
};





























