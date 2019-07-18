import Vue from 'vue';
import App from '../src/App.vue';

let vm = new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    },
    data: {
        message: 'Hello Vue!'
    }
})

Vue.prototype.$eventHub = new Vue();
