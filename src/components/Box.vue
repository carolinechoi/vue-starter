<template>
    <div id="main">
        <dialog-drags id="dialog-1">
            <div @click="test('hello flood response team')"> 
                <p>Map would go here.</p><br>
                <p>Use the lock emoji to lock this window in place.</p>
            </div>
        </dialog-drags>
    </div>
</template>

<script>
import DialogDrag from '../../node_modules/vue-dialog-drag';

  export default {
    name: 'Box',
    components: {
        DialogDrag
    },
    methods: {
      test: function(message) {
        alert(message)
        console.log(message)
      }
    }
  }
</script>

<style src="vue-dialog-drag/dist/vue-dialog-drag.css"></style>
