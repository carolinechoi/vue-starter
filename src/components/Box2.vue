<template>
        <dialog-drag id="dialog-1">
          <!-- <p>x-coordinate: {{ x0 }}</p>
          <p>y-coordinate: {{ y0 }}</p>
          <p>z-coordinate: {{ z0 }}</p> -->
          <!-- <div id="info" class="esri-widget"> -->
            <div id="viewDiv"></div>
          <!-- </div> -->
        </dialog-drag>
</template>

<script>
import DialogDrag from '../../node_modules/vue-dialog-drag';
import L from 'leaflet';

// downloaded the following from https://github.com/Esri/esri-loader
import { loadModules } from 'esri-loader';
// let x0;
// let y0;
// let z0;

  export default {
    name: 'Box2',
    components: {
        DialogDrag
    },
    props: {
        message: String
    },
    created() {
      this.$eventHub.$on('openBox', this.makeAppear);
    },
    mounted() {
      this.initMap();
      // this.showmap();
    },
    props: {
      x0: Number,
      y0: Number,
      z0: Number
    },
    methods: {
      makeAppear: function() {
        let x = document.getElementById("dialog-1");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      },
      initMap() {
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
          var view = new SceneView({
            container: "viewDiv",
            map: map,
            camera: {
              position: {
                x: 3948354,
                y: 3545,
                z: 4565,
                // x: this.x0,
                // y: this.y0,
                // z: this.z0,
                spatialReference: {
                  wkid: 3857
                }
              },
              tilt: 84,
              heading: 85
            }
          }) 
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