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
        // // first, we use Dojo's loader to require the map class
        // loadModules(['esri/views/MapView', 'esri/WebMap'])
        //   .then(([MapView, WebMap]) => {
        //     // then we load a web map from an id
        //     var webmap = new WebMap({
        //       portalItem: { // autocasts as new PortalItem()
        //         id: 'f2e9b762544945f390ca4ac3671cfa72'
        //       }
        //     });
        //     // and we show that map in a container w/ id #viewDiv
        //     var view = new MapView({
        //       map: webmap,
        //       container: 'viewDiv'
        //     });
        //   })
        //   .catch(err => {
        //     // handle any errors
        //     alert(err);
        //   });
      // }
          loadModules(['esri/Map', 'esri/views/SceneView', 'esri/core/watchUtils', 'vue'])
            .then(([SceneView, Map, watchUtils, vue]) => {
                const map = new Map({
                    basemap: "hybrid",
                    ground: "world-elevation"
                });
                console.log("made map");
                const initialCamera = {
                    position: [7.654, 45.919, 5184],
                    tilt: 80,
                    heading: 0
                }
                console.log("made camera");
                const view = new SceneView({
                    container: "viewDiv",
                    map: map,
                });
                console.log("made view");
                Vue.component("camera-info", {
                    props: ["camera"],
                    template: [
                        "<div>",
                        "<h2>Camera Details</h2>",
                        "<p><strong>Heading</strong>: {{ camera.heading.toFixed(3) }}</p>",
                        "<p><strong>Tilt</strong>: {{ camera.tilt.toFixed(3) }}</p>",
                        "<p><strong>Latitude</strong>: {{ camera.position.latitude.toFixed(3) }}</p>",
                        "<p><strong>Longitude</strong>: {{ camera.position.longitude.toFixed(3) }}</p>",
                        "<button v-on:click='reset'>Reset Camera</button>",
                        "</div>"
                    ].join(""),
                    methods: {
                        reset() {
                        const camera = this.camera.clone();
                        camera.set(initialCamera);
                        view.goTo(camera);
                        }
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });
      },
      showmap() {
          window.onload = function() {
            document.getElementById("viewDiv").style.visibility = "hidden";
          }
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