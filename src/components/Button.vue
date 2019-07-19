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
            this.$emit('clicked', '34900')
        }
    }
}

</script>