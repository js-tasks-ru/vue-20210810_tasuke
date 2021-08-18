import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const app = {
  data() {
    return {
      left: 0,
      right: 0,
      math_action: '',
    };
  },
  computed: {
    computedResult() {
      if (this.math_action == 'sum') return Number(this.left) + Number(this.right);
      if (this.math_action == 'subtract') return Number(this.left) - Number(this.right);
      if (this.math_action == 'multiply') return Number(this.left) * Number(this.right);
      if (this.math_action == 'divide') return Number(this.left) / Number(this.right);
    },
  },
};

createApp(app).mount('#app');
