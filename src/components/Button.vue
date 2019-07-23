<template>
    <div id="main">
        <button @click="onClick">hello, click me</button>
    </div>
</template>

<script>
export default {
    name: "Button",
    methods: {
        onClick: function() {
            console.log("started onClick() function");
            // the three latter numbers are the x,y,z coordinates, respectively
            this.$emit('clicked', '34568765', '-1222', '4565');
            console.log("emitted clicked");
            this.$eventHub.$emit('openBox');
            console.log("emitted openBox");
        }
    }
}

</script>