import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',

  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increment() {
      this.counter++;
    }
  }
});

const app = createApp(App);
const vm = app.mount('#app');

window.vm = vm;
