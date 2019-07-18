<template>
    <div id="main">
        <button @click="emit">Click Me</button>
    </div>
</template>

<script>
export default {
    name: "Button",
    methods: {
        emit: function() {
            console.log("emitting from Button.vue");
            this.$eventHub.$emit('openBox');
        }
    }
}

</script>