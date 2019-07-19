import Vue from 'vue';
import App from '../src/App.vue';
import EventHub from 'vue-event-hub';
Vue.use(EventHub);

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