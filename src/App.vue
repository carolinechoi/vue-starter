<template>
  <div id="app">
    <h1>Caroline Choi</h1>
    <Button @clicked="onClickChild"></Button>
    <Box2 :x0="x0" :y0="y0" :z0="z0" id="dialogBox"></Box2>
  </div>
</template>

<script>
import Box from "./components/Box";
import Box2 from "./components/Box2";
import Test from "./components/Test";
import Button from "./components/Button";

let x0;
let y0;
let z0;

export default {
  name: 'App',
  components: {
      Box,
      Box2,
      Test,
      Button
  },
  mounted() {
    this.$eventHub.$on('openBox', this.makeAppear);
  },
  methods: {
    makeAppear() {
      console.log("started makeAppear()");
      this.$eventHub.$emit('init', this.x0, this.y0, this.z0);
      let x = document.getElementById("dialogBox");
      if (x.style.display === "none") {
        console.log("x.style.display = none");
        x.style.display = "block";
      } else {
        x.style.display = "none";
        console.log("set display to none");
      }
    },
    onClickChild (x, y, z) {
      console.log("started onClickChild");
      this.x0 = Number(x);
      this.y0 = Number(y);
      this.z0 = Number(z);
      console.log(x);
      console.log(y);
      console.log(z);
    }
  },
  data() {
    return {
      x0: this.x0,
      y0: this.y0,
      z0: this.z0,
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