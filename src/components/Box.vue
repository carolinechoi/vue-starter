<template>
    <div id="main">
        <dialog-drag id="dialog-1">
            <div @click="test">
                <p>Map would go here.</p><br>
                <p>Use the lock emoji to lock this window in place.</p>
            </div>
            <div id="mapid" ref="mapElement"></div>
        </dialog-drag>
    </div>
</template>

<script>
import DialogDrag from '../../node_modules/vue-dialog-drag';
import L from 'leaflet';

  export default {
    name: 'App',
    components: {
        DialogDrag
    },
    props: {
        message: String
    },
    mounted() {
      this.initMap();
    },
    methods: {
      test (id) {
        alert('test id:' + id);
      },
      // test: function(message) {
      //   alert(message)
      //   console.log(message)
      // },
      initMap() {
        var mymap = L.map('mapid').setView([32.3117, -99.77774], 6);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap);
        // mymap.on('click', onMapClick);
      }
    }
  }
</script>

<style src="vue-dialog-drag/dist/vue-dialog-drag.css"></style>

<style>
#mapid {
  width: 600px;
  height: 600px;
}
</style>