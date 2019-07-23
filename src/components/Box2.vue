<template>
        <dialog-drag style="display: none;" id="dialog-1">
          <p>x-coordinate: {{ x0 }}</p>
          <p>y-coordinate: {{ y0 }}</p>
          <p>z-coordinate: {{ z0 }}</p>
          <div id="viewDiv"></div>
        </dialog-drag>
</template>

<script>
import DialogDrag from '../../node_modules/vue-dialog-drag';
import L from 'leaflet';

// downloaded the following from https://github.com/Esri/esri-loader
import { loadModules } from 'esri-loader';
let x0;
let y0;
let z0;

  export default {
    name: 'Box2',
    components: {
        DialogDrag
    },
    props: {
      x0: Number,
      y0: Number,
      z0: Number
    },
    mounted() {
      this.$eventHub.$on("init", this.initMap);
    },
    methods: {
      initMap(x0, y0, z0) {
        console.log("started initMap()");
        loadModules(['esri/Map', 'esri/views/SceneView', 'esri/layers/IntegratedMeshLayer'])
        .then(([Map, SceneView, IntegratedMeshLayer]) => {
          var layer = new IntegratedMeshLayer({
            url: "https://tiles.arcgis.com/tiles/FQD0rKU8X5sAQfh8/arcgis/rest/services/VRICON_Yosemite_Sample_Integrated_Mesh_scene_layer/SceneServer"
          });
          var map = new Map({
            basemap: "satellite",
            layers: [layer],
            ground: "world-elevation"
          });
          console.log("started Sceneview");
          var view = new SceneView({
            container: "viewDiv",
            map: map,
            camera: {
              position: {
                x: this.x0,
                y: this.y0,
                z: this.z0,
                spatialReference: {
                  wkid: 3857
                }
              },
              tilt: 84,
              heading: 85
            }
          });
          console.log("built Sceneview"); 
        }).catch(e => {
          console.log(e);
        });
      }
    }
  }
</script>

<style src="vue-dialog-drag/dist/vue-dialog-drag.css"></style>

<style>
#viewDiv {
  width: 400px;
  height: 400px;
}
</style>