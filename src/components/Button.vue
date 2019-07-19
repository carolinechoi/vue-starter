<template>
    <div id="main">
        <button @click="onClick">hello</button>
    </div>
</template>

<script>
export default {
    name: "Button",
    methods: {
        onClick: function(event) {
            console.log("started onClick() function");
            this.$emit('caroline', '34900');
            console.log("emitted caroline");
            this.$emit('openBox');
            console.log("emitted openBox");
        }
    }
}

</script>