<template>
    <div id="main">
        <div id="info" class="esri-widget">
            <!-- <camera-info v-bind:camera="camera"></camera-info> -->
        </div>
        <div id="viewDiv"></div>
    </div>
</template>

<script src="https://js.arcgis.com/4.12/"></script>

<script>
    export default {
        name: 'Map',
        components: {
        }
    }  
</script>

<style scoped>
    html,
    body,
    #viewDiv {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    }
    #info {
    padding: 1em;
    }
</style>