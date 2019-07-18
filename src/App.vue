<template>
  <div id="app">
    <h1 @click="drop">Caroline Choi</h1>
    <Button />
  </div>
</template>

<script>
import Box from "./components/Box";
import Box2 from "./components/Box2";
import Test from "./components/Test";
import Button from "./components/Button";

export default {
  name: 'App',
  components: {
      Box,
      Box2,
      Test,
      Button
  },
  methods: {
    drop: function() {
      console.log("test")
    }
  }
}
</script>

<style src="vue-dialog-drag/dist/vue-dialog-drag.css"></style>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
  }
</style>