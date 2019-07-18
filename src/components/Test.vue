<template>
    <div id="test">
        <p>{{ title }}</p>
        <!-- <button type="button" name="button" @click="$emit('increment')"></button> -->
    </div>
</template>

<script>
export default {
    name: 'Test',
    props: {
        title: String
    }
}
</script>