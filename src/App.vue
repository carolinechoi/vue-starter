<template>
  <div id="app">
    <h1 @click="drop">Caroline Choi</h1>
    <Button @clicked="onClickChild"></Button>
    <Box2 style="display: none" id="dialogBox"/>
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
  created() {
    this.$eventHub.$on('openBox', this.makeAppear);
  },
  methods: {
    drop: function() {
      console.log("test")
    },
    onClickChild (value) {
      console.log(value);
    }
    // makeAppear() {
    //   let x = document.getElementById("dialogBox");
    //   if (x.style.display === "none") {
    //     x.style.display = "block";
    //   } else {
    //     x.style.display = "none";
    //   }
    // }
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