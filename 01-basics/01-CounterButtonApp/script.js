import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const app = {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    doIncrement() {
      this.counter++;
    },
  },
};

createApp(app).mount('#app');
