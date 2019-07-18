<template>
        <dialog-drag id="dialog-1">
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

  export default {
    name: 'Box2',
    components: {
        DialogDrag
    },
    props: {
        message: String
    },
    mounted() {
      this.initMap();
      // this.showmap();
    },
    methods: {
      test (id) {
        alert('test id:' + id);
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
                x: -13314225,
                y: 4543000,
                z: 1446,
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
  width: 600px;
  height: 600px;
}
</style>