(function(){
    var script = {
 "start": "this.init()",
 "vrPolyfillScale": 0.5,
 "children": [
  "this.MainViewer"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_30B1CBA2_3CD5_DF7D_41C0_0B51ECA32FC7",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": -0.26,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Rumah Cherlie_Scene 5",
 "hfov": 360,
 "overlays": [
  "this.overlay_36528DA5_3B2D_7B44_41B5_1D3EEBF631E2",
  "this.overlay_3652EDA5_3B2D_7B44_41C4_05D0940DECDB",
  "this.overlay_3652FDA5_3B2D_7B44_41AC_B9ED75033B87",
  "this.overlay_36522DA5_3B2D_7B44_41A3_C91AA65CEC07",
  "this.overlay_36523DA5_3B2D_7B44_41CB_F25EFF115312"
 ],
 "id": "panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.67,
   "class": "AdjacentPanorama",
   "yaw": 0.78,
   "panorama": "this.panorama_262C538A_288B_4AD6_41B0_9377D78E54BF",
   "distance": 1
  },
  {
   "backwardYaw": -89.32,
   "class": "AdjacentPanorama",
   "yaw": 94.86,
   "panorama": "this.panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3C041A7B_310B_A17A_41B2_62824561E0E0"
  },
  {
   "backwardYaw": 80.98,
   "class": "AdjacentPanorama",
   "yaw": -90.18,
   "panorama": "this.panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 95,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_3038CB21_3CD5_DF7F_41C0_7C9FDB4B9D78",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": 90.68,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_30966B88_3CD5_DF4C_41C4_A192C61F8B31",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 95,
  "yaw": -92.23,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_30435B2E_3CD5_DF45_4196_EE6E214E324A",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": -99.02,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_camera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_camera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": -1.37,
  "pitch": -1.1
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.58,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_305FDB48_3CD5_DFCD_41BF_BAECF9FDBA37",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.94,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_306CBB58_3CD5_DFCD_41CC_2A2AB768E533",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_302FFB14_3CD5_DF44_41C2_3DB415C1683D",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": -0.33,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_camera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 95,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_camera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_30502B3B_3CD5_DF43_41C1_95D5E325315F",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": 170.62,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "Rumah Cherlie_Scene 1",
 "hfov": 360,
 "overlays": [
  "this.overlay_3C043A7C_310B_A17E_41C1_01AA38904DAF",
  "this.overlay_3C044A7C_310B_A17E_41A9_37DE9E4882A6",
  "this.overlay_3C045A7C_310B_A17E_41B9_F2FEC893F458",
  "this.overlay_3C058A7C_310B_A17E_41C8_7D89B938411F",
  "this.overlay_3C05BA7C_310B_A17E_41A4_FC681F51F0D0"
 ],
 "id": "panorama_3C041A7B_310B_A17A_41B2_62824561E0E0",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4"
  },
  {
   "backwardYaw": -85.97,
   "class": "AdjacentPanorama",
   "yaw": 86.54,
   "panorama": "this.panorama_3C016109_310B_6099_41B9_409B55096674",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3"
  },
  {
   "backwardYaw": 87.77,
   "class": "AdjacentPanorama",
   "yaw": -85.97,
   "panorama": "this.panorama_3CD9526E_310B_E09B_4172_99D35207A26E",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 120,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_3C016109_310B_6099_41B9_409B55096674_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Rumah Cherlie_Scene 3",
 "hfov": 360,
 "overlays": [
  "this.overlay_3C015109_310B_6099_41BA_62E9F7119795",
  "this.overlay_3C014109_310B_6099_41C6_86842A4C5A6B",
  "this.overlay_3C012109_310B_6099_41A4_7C10D540CCAD"
 ],
 "id": "panorama_3C016109_310B_6099_41B9_409B55096674",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.96,
   "class": "AdjacentPanorama",
   "yaw": -44.63,
   "panorama": "this.panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F",
   "distance": 1
  },
  {
   "backwardYaw": 86.54,
   "class": "AdjacentPanorama",
   "yaw": -85.97,
   "panorama": "this.panorama_3C041A7B_310B_A17A_41B2_62824561E0E0",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 95,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_3C016109_310B_6099_41B9_409B55096674_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Rumah Cherlie_Scene 10.effectsResult",
 "id": "panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C",
 "hfov": 360,
 "overlays": [
  "this.overlay_38A1B6CD_2899_4A53_41A5_1EBFB60768F9",
  "this.overlay_391F3903_2899_47D6_41B2_E07ED2200583"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -27.51,
   "class": "AdjacentPanorama",
   "yaw": 143.42,
   "panorama": "this.panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4",
   "distance": 1
  },
  {
   "backwardYaw": 84.41,
   "class": "AdjacentPanorama",
   "yaw": -98.06,
   "panorama": "this.panorama_241A54CD_2889_4E52_41C3_122E572A0464",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_camera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_30A3BB96_3CD5_DF44_417C_DA1B2A47E41B",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 95,
  "yaw": 94.03,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.04,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_30E8ABD6_3CD5_DEC4_41A9_C06B50928D5E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_307A1B6B_3CD5_DFC3_41A2_AF285BF3F1F7",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_33049BEF_3CD5_DEC4_41A3_7016260FC869",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": 135.37,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Rumah Cherlie_Scene 9.effectsResult",
 "id": "panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4",
 "hfov": 360,
 "overlays": [
  "this.overlay_38CA7965_2898_C652_41A4_07496860E1E8",
  "this.overlay_38FDC240_289B_CA52_41C0_01BD510EAF25"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -9.38,
   "class": "AdjacentPanorama",
   "yaw": 172.96,
   "panorama": "this.panorama_262C538A_288B_4AD6_41B0_9377D78E54BF",
   "distance": 1
  },
  {
   "backwardYaw": 143.42,
   "class": "AdjacentPanorama",
   "yaw": -27.51,
   "panorama": "this.panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_241A54CD_2889_4E52_41C3_122E572A0464_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_30882B7C_3CD5_DFC4_41C5_67BFCB380400",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": 94.03,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_334B9C31_3CD5_D95C_41CE_332CC3E3D10F",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 95,
  "yaw": -128.82,
  "pitch": 0
 }
},
{
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_30F6EBE2_3CD5_DEFC_41C2_E8DDAF8C28DD",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": -85.14,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_33128BFC_3CD5_DEC4_41C5_F981A8F7059A",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": 0.08,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Rumah Cherlie_Scene 7",
 "hfov": 360,
 "overlays": [
  "this.overlay_37B00FBD_3B2E_D747_41CD_88F1DAD8ECD2"
 ],
 "id": "panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.23,
   "class": "AdjacentPanorama",
   "yaw": -179.92,
   "panorama": "this.panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 95,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_30CDFBBB_3CD5_DF4C_41C7_8DC38AD91AF3",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 95,
  "yaw": -93.46,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Rumah Cherlie_Scene 11.effectsResult",
 "id": "panorama_241A54CD_2889_4E52_41C3_122E572A0464",
 "hfov": 360,
 "overlays": [
  "this.overlay_39407D34_2899_FE32_41C3_3CDC0BCA5A08"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -98.06,
   "class": "AdjacentPanorama",
   "yaw": 84.41,
   "panorama": "this.panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_3C016109_310B_6099_41B9_409B55096674_camera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_33598C3E_3CD5_D944_41C1_518EC5FCC194",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": -179.77,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -95.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_332FCC18_3CD5_D94C_41C5_C98CEDC0FD84",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 152.49,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_33218C0A_3CD5_D94C_41B9_015A3ABFDB36",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_30BFDBAF_3CD5_DF44_41C6_D9546BB3C795",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": -0.04,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_3CD9526E_310B_E09B_4172_99D35207A26E_camera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 95,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Rumah Cherlie_Scene 6",
 "hfov": 360,
 "overlays": [
  "this.overlay_374BD7CB_3B2E_D6CC_41C4_A32E0A06C4AD",
  "this.overlay_374BC7CB_3B2E_D6CC_41C1_8EC6DAA57246",
  "this.overlay_374BE7CB_3B2E_D6CC_41B3_372F6B8B2FC0",
  "this.overlay_374B97CB_3B2E_D6CC_41CA_DED5EEA76635"
 ],
 "id": "panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 94.86,
   "class": "AdjacentPanorama",
   "yaw": -89.32,
   "panorama": "this.panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4",
   "distance": 1
  },
  {
   "backwardYaw": -44.63,
   "class": "AdjacentPanorama",
   "yaw": 179.96,
   "panorama": "this.panorama_3C016109_310B_6099_41B9_409B55096674",
   "distance": 1
  },
  {
   "backwardYaw": -179.92,
   "class": "AdjacentPanorama",
   "yaw": 0.23,
   "panorama": "this.panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 95,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_30DB3BC7_3CD5_DEC4_41C5_C5C892897190",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": -179.22,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_camera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_333DEC25_3CD5_D944_4199_935D71AF3EEF",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 65,
  "yaw": 89.82,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Rumah Cherlie_Scene 2",
 "hfov": 360,
 "overlays": [
  "this.overlay_3CDAB26E_310B_E09B_4192_46F84BE6DAD6",
  "this.overlay_3CDA826E_310B_E09B_418D_54FE5D2FAE8C",
  "this.overlay_3CDAF26E_310B_E09B_41C4_35C395D90450"
 ],
 "id": "panorama_3CD9526E_310B_E09B_4172_99D35207A26E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -85.97,
   "class": "AdjacentPanorama",
   "yaw": 87.77,
   "panorama": "this.panorama_3C041A7B_310B_A17A_41B2_62824561E0E0",
   "distance": 1
  },
  {
   "backwardYaw": 179.74,
   "class": "AdjacentPanorama",
   "yaw": 51.18,
   "panorama": "this.panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 120,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "Rumah Cherlie_Scene 8",
 "hfov": 360,
 "overlays": [
  "this.overlay_262CA38A_288B_4AD6_41AA_271E20AEC398",
  "this.overlay_389113C1_2899_CA53_41C3_A0F3E2AE7B9B"
 ],
 "id": "panorama_262C538A_288B_4AD6_41B0_9377D78E54BF",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.78,
   "class": "AdjacentPanorama",
   "yaw": 179.67,
   "panorama": "this.panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4",
   "distance": 1
  },
  {
   "backwardYaw": 172.96,
   "class": "AdjacentPanorama",
   "yaw": -9.38,
   "panorama": "this.panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 95,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_camera",
   "media": "this.panorama_3C041A7B_310B_A17A_41B2_62824561E0E0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_3CD9526E_310B_E09B_4172_99D35207A26E_camera",
   "media": "this.panorama_3CD9526E_310B_E09B_4172_99D35207A26E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_3C016109_310B_6099_41B9_409B55096674_camera",
   "media": "this.panorama_3C016109_310B_6099_41B9_409B55096674",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_camera",
   "media": "this.panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_camera",
   "media": "this.panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_camera",
   "media": "this.panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_camera",
   "media": "this.panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_camera",
   "media": "this.panorama_262C538A_288B_4AD6_41B0_9377D78E54BF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_camera",
   "media": "this.panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_camera",
   "media": "this.panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_241A54CD_2889_4E52_41C3_122E572A0464_camera",
   "media": "this.panorama_241A54CD_2889_4E52_41C3_122E572A0464",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "Rumah Cherlie_Scene 4",
 "hfov": 360,
 "overlays": [
  "this.overlay_36D2A4A0_3B2D_297C_41AD_23924DB732D0",
  "this.overlay_36D2B4A0_3B2D_297C_41B7_0E32F0F82363"
 ],
 "id": "panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -90.18,
   "class": "AdjacentPanorama",
   "yaw": 80.98,
   "panorama": "this.panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4",
   "distance": 1
  },
  {
   "backwardYaw": 51.18,
   "class": "AdjacentPanorama",
   "yaw": 179.74,
   "panorama": "this.panorama_3CD9526E_310B_E09B_4172_99D35207A26E",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 95,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_t.jpg"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35845D26_3B2F_3B45_41B4_795B5117CEB5",
   "yaw": 141.23,
   "pitch": -9.74,
   "distance": 100,
   "hfov": 9.93
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.23,
   "hfov": 9.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.74
  }
 ],
 "id": "overlay_36528DA5_3B2D_7B44_41B5_1D3EEBF631E2",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_262C538A_288B_4AD6_41B0_9377D78E54BF, this.camera_302FFB14_3CD5_DF44_41C2_3DB415C1683D); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35842D26_3B2F_3B45_41CC_4E64120EA771",
   "yaw": 0.78,
   "pitch": -7.72,
   "distance": 100,
   "hfov": 13.33
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.78,
   "hfov": 13.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.72
  }
 ],
 "id": "overlay_3652EDA5_3B2D_7B44_41C4_05D0940DECDB",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -97.09,
 "pitch": 57.33,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_3652FDA5_3B2D_7B44_41AC_B9ED75033B87"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3, this.camera_30435B2E_3CD5_DF45_4196_EE6E214E324A); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3584FD2C_3B2F_3B45_41C4_92D0FE2FA203",
   "yaw": -90.18,
   "pitch": -15.85,
   "distance": 100,
   "hfov": 4.74
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.18,
   "hfov": 4.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_1_HS_6_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.85
  }
 ],
 "id": "overlay_36522DA5_3B2D_7B44_41A3_C91AA65CEC07",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F, this.camera_3038CB21_3CD5_DF7F_41C0_7C9FDB4B9D78); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35874D2C_3B2F_3B45_416A_E8F20E0D3523",
   "yaw": 94.86,
   "pitch": -7.08,
   "distance": 100,
   "hfov": 5.84
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.86,
   "hfov": 5.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_1_HS_7_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.08
  }
 ],
 "id": "overlay_36523DA5_3B2D_7B44_41CB_F25EFF115312",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3E412C6E_310E_A09B_41A8_3F228B55BC3E",
   "yaw": -51.27,
   "pitch": -1.15,
   "distance": 100,
   "hfov": 6.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.27,
   "hfov": 6.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.15
  }
 ],
 "id": "overlay_3C043A7C_310B_A17E_41C1_01AA38904DAF",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -90.22,
 "pitch": 55.41,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_3C044A7C_310B_A17E_41A9_37DE9E4882A6"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4, this.camera_307A1B6B_3CD5_DFC3_41A2_AF285BF3F1F7); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3E473C71_310E_A089_41A6_AD692EC33D34",
   "yaw": 7.58,
   "pitch": 0.83,
   "distance": 100,
   "hfov": 13.11
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.58,
   "hfov": 13.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.83
  }
 ],
 "id": "overlay_3C045A7C_310B_A17E_41B9_F2FEC893F458",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CD9526E_310B_E09B_4172_99D35207A26E, this.camera_30966B88_3CD5_DF4C_41C4_A192C61F8B31); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3E478C71_310E_A089_41B4_E2E2760FCAEC",
   "yaw": -85.97,
   "pitch": -6.79,
   "distance": 100,
   "hfov": 4.89
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.97,
   "hfov": 4.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_1_HS_4_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.79
  }
 ],
 "id": "overlay_3C058A7C_310B_A17E_41C8_7D89B938411F",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3C016109_310B_6099_41B9_409B55096674, this.camera_30882B7C_3CD5_DFC4_41C5_67BFCB380400); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3E47CC71_310E_A089_4196_37D57D156E97",
   "yaw": 86.54,
   "pitch": -7.44,
   "distance": 100,
   "hfov": 4.88
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.54,
   "hfov": 4.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_1_HS_5_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.44
  }
 ],
 "id": "overlay_3C05BA7C_310B_A17E_41A4_FC681F51F0D0",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F, this.camera_30BFDBAF_3CD5_DF44_41C6_D9546BB3C795); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3E44FC72_310E_A08B_41C5_9E7BC07A5AE7",
   "yaw": -44.63,
   "pitch": -0.16,
   "distance": 100,
   "hfov": 4.08
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.63,
   "hfov": 4.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.16
  }
 ],
 "id": "overlay_3C015109_310B_6099_41BA_62E9F7119795",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -92.14,
 "pitch": 55.41,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_3C014109_310B_6099_41C6_86842A4C5A6B"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3C041A7B_310B_A17A_41B2_62824561E0E0, this.camera_30CDFBBB_3CD5_DF4C_41C7_8DC38AD91AF3); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3E454C72_310E_A08B_41B6_0CDEBE37FAA0",
   "yaw": -85.97,
   "pitch": -6.79,
   "distance": 100,
   "hfov": 4.89
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.97,
   "hfov": 4.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_1_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.79
  }
 ],
 "id": "overlay_3C012109_310B_6099_41A4_7C10D540CCAD",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_241A54CD_2889_4E52_41C3_122E572A0464, this.camera_332FCC18_3CD5_D94C_41C5_C98CEDC0FD84); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3BB43C06_289F_BDDE_419C_8CFD8D39006B",
   "yaw": -98.06,
   "pitch": -16.09,
   "distance": 100,
   "hfov": 4.73
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.06,
   "hfov": 4.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.09
  }
 ],
 "id": "overlay_38A1B6CD_2899_4A53_41A5_1EBFB60768F9",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4, this.camera_33218C0A_3CD5_D94C_41B9_015A3ABFDB36); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3B1CFE88_289B_5AD2_41C2_6FCA05B8CFDD",
   "yaw": 143.42,
   "pitch": -18.68,
   "distance": 100,
   "hfov": 9.4
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 143.42,
   "hfov": 9.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_0_HS_1_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.68
  }
 ],
 "id": "overlay_391F3903_2899_47D6_41B2_E07ED2200583",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C, this.camera_305FDB48_3CD5_DFCD_41BF_BAECF9FDBA37); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3B8B6C06_289F_BDDE_41B3_A45E295177A3",
   "yaw": -27.51,
   "pitch": -17.34,
   "distance": 100,
   "hfov": 6.78
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.51,
   "hfov": 6.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.34
  }
 ],
 "id": "overlay_38CA7965_2898_C652_41A4_07496860E1E8",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_262C538A_288B_4AD6_41B0_9377D78E54BF, this.camera_30502B3B_3CD5_DF43_41C1_95D5E325315F); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3B8BAC06_289F_BDDE_419D_525A141C6994",
   "yaw": 172.96,
   "pitch": -20.94,
   "distance": 100,
   "hfov": 8.07
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.96,
   "hfov": 8.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_1_HS_1_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.94
  }
 ],
 "id": "overlay_38FDC240_289B_CA52_41C0_01BD510EAF25",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F, this.camera_33598C3E_3CD5_D944_41C1_518EC5FCC194); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35862D2C_3B2F_3B45_41C6_09898F66B615",
   "yaw": -179.92,
   "pitch": -10.61,
   "distance": 100,
   "hfov": 5.27
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.92,
   "hfov": 5.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_1_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.61
  }
 ],
 "id": "overlay_37B00FBD_3B2E_D747_41CD_88F1DAD8ECD2",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C, this.camera_306CBB58_3CD5_DFCD_41CC_2A2AB768E533); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3B8AFC06_289F_BDDE_41BE_731C77E2C9BE",
   "yaw": 84.41,
   "pitch": -17.66,
   "distance": 100,
   "hfov": 6.27
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.41,
   "hfov": 6.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.66
  }
 ],
 "id": "overlay_39407D34_2899_FE32_41C3_3CDC0BCA5A08",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -92.14,
 "pitch": 54.58,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_374BD7CB_3B2E_D6CC_41C4_A32E0A06C4AD"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF, this.camera_33128BFC_3CD5_DEC4_41C5_F981A8F7059A); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35872D2C_3B2F_3B45_41AA_AB47D4F0D74D",
   "yaw": 0.23,
   "pitch": -11.49,
   "distance": 100,
   "hfov": 4.91
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.23,
   "hfov": 4.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_1_HS_5_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.49
  }
 ],
 "id": "overlay_374BC7CB_3B2E_D6CC_41C1_8EC6DAA57246",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3C016109_310B_6099_41B9_409B55096674, this.camera_33049BEF_3CD5_DEC4_41A3_7016260FC869); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35878D2C_3B2F_3B45_41C9_BB437969BFF5",
   "yaw": 179.96,
   "pitch": -6.11,
   "distance": 100,
   "hfov": 17.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.96,
   "hfov": 17.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.11
  }
 ],
 "id": "overlay_374BE7CB_3B2E_D6CC_41B3_372F6B8B2FC0",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4, this.camera_30F6EBE2_3CD5_DEFC_41C2_E8DDAF8C28DD); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35864D2C_3B2F_3B45_41A0_D7E86DD74EC4",
   "yaw": -89.32,
   "pitch": -7.85,
   "distance": 100,
   "hfov": 4.88
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.32,
   "hfov": 4.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_1_HS_7_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.85
  }
 ],
 "id": "overlay_374B97CB_3B2E_D6CC_41CA_DED5EEA76635",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3, this.camera_30B1CBA2_3CD5_DF7D_41C0_0B51ECA32FC7); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3E443C71_310E_A089_41B9_4F21B4940D4E",
   "yaw": 51.18,
   "pitch": -1.54,
   "distance": 100,
   "hfov": 6.28
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.18,
   "hfov": 6.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.54
  }
 ],
 "id": "overlay_3CDAB26E_310B_E09B_4192_46F84BE6DAD6",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -89.12,
 "pitch": 54.86,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_3CDA826E_310B_E09B_418D_54FE5D2FAE8C"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3C041A7B_310B_A17A_41B2_62824561E0E0, this.camera_30A3BB96_3CD5_DF44_417C_DA1B2A47E41B); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3E448C72_310E_A08B_41A7_53D1F825425A",
   "yaw": 87.77,
   "pitch": -7.2,
   "distance": 100,
   "hfov": 4.89
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.77,
   "hfov": 4.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_1_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.2
  }
 ],
 "id": "overlay_3CDAF26E_310B_E09B_41C4_35C395D90450",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4, this.camera_30DB3BC7_3CD5_DEC4_41C5_C5C892897190); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3B8A9C06_289F_BDDE_41C2_FA863E07A4C3",
   "yaw": 179.67,
   "pitch": -6.75,
   "distance": 100,
   "hfov": 17.41
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.67,
   "hfov": 17.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.75
  }
 ],
 "id": "overlay_262CA38A_288B_4AD6_41AA_271E20AEC398",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4, this.camera_30E8ABD6_3CD5_DEC4_41A9_C06B50928D5E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3B8ACC06_289F_BDDE_41B9_717A015CBDA6",
   "yaw": -9.38,
   "pitch": -17.72,
   "distance": 100,
   "hfov": 8.19
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.38,
   "hfov": 8.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_1_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.72
  }
 ],
 "id": "overlay_389113C1_2899_CA53_41C3_A0F3E2AE7B9B",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CD9526E_310B_E09B_4172_99D35207A26E, this.camera_334B9C31_3CD5_D95C_41CE_332CC3E3D10F); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35853D26_3B2F_3B45_41C2_7BCC3FDC3814",
   "yaw": 179.74,
   "pitch": -10.1,
   "distance": 100,
   "hfov": 15.91
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.74,
   "hfov": 15.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.1
  }
 ],
 "id": "overlay_36D2A4A0_3B2D_297C_41AD_23924DB732D0",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4, this.camera_333DEC25_3CD5_D944_4199_935D71AF3EEF); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35858D26_3B2F_3B45_416E_1E384CCDC640",
   "yaw": 80.98,
   "pitch": -13.15,
   "distance": 100,
   "hfov": 5.66
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.98,
   "hfov": 5.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_1_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.15
  }
 ],
 "id": "overlay_36D2B4A0_3B2D_297C_41B7_0E32F0F82363",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_35845D26_3B2F_3B45_41B4_795B5117CEB5",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_35842D26_3B2F_3B45_41CC_4E64120EA771",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3584FD2C_3B2F_3B45_41C4_92D0FE2FA203",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_1_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_35874D2C_3B2F_3B45_416A_E8F20E0D3523",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_36515DA5_3B2D_7B44_41CA_277F84A1FEA4_1_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3E412C6E_310E_A09B_41A8_3F228B55BC3E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3E473C71_310E_A089_41A6_AD692EC33D34",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3E478C71_310E_A089_41B4_E2E2760FCAEC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3E47CC71_310E_A089_4196_37D57D156E97",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3C041A7B_310B_A17A_41B2_62824561E0E0_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3E44FC72_310E_A08B_41C5_9E7BC07A5AE7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3E454C72_310E_A08B_41B6_0CDEBE37FAA0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3C016109_310B_6099_41B9_409B55096674_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3BB43C06_289F_BDDE_419C_8CFD8D39006B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3B1CFE88_289B_5AD2_41C2_6FCA05B8CFDD",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2589A92A_2888_C7D6_41A7_BB762CA7B40C_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3B8B6C06_289F_BDDE_41B3_A45E295177A3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3B8BAC06_289F_BDDE_419D_525A141C6994",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_24EE9110_288B_C7F2_4169_8DFAAE22A8E4_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_35862D2C_3B2F_3B45_41C6_09898F66B615",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_37B01FBD_3B2E_D747_41AC_8B58A0A8E1EF_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3B8AFC06_289F_BDDE_41BE_731C77E2C9BE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_241A54CD_2889_4E52_41C3_122E572A0464_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_35872D2C_3B2F_3B45_41AA_AB47D4F0D74D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_35878D2C_3B2F_3B45_41C9_BB437969BFF5",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_1_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_35864D2C_3B2F_3B45_41A0_D7E86DD74EC4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_374A27CB_3B2E_D6CC_41C2_6661DC52E54F_1_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3E443C71_310E_A089_41B9_4F21B4940D4E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3E448C72_310E_A08B_41A7_53D1F825425A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3CD9526E_310B_E09B_4172_99D35207A26E_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3B8A9C06_289F_BDDE_41C2_FA863E07A4C3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3B8ACC06_289F_BDDE_41B9_717A015CBDA6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_262C538A_288B_4AD6_41B0_9377D78E54BF_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_35853D26_3B2F_3B45_41C2_7BCC3FDC3814",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_35858D26_3B2F_3B45_416E_1E384CCDC640",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_36D1449F_3B2D_2944_41CB_52A1AB9FD5C3_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
}],
 "class": "Player",
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "scripts": {
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "registerKey": function(key, value){  window[key] = value; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "data": {
  "name": "Player498"
 },
 "shadow": false,
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
