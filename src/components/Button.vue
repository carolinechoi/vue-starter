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
            console.log("dlkfjsdlkf");
            this.$eventHub.$emit('openBox');
            console.log("emitted openBox");
            this.$emit('caroline', '34900')
        }
    }
}

</script>