import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:count'],
  // Компонент должен иметь входной параметр

  methods: {
    increment() {
      // При клике на кнопку порождаем событие и отправляем новое значение
      this.$emit('update:count', this.count + 1);
    },
  },

  // Шаблон потребуется отредактировать
  template: `<button type="button"
                     :value="Number(count) + Number(1)"
                     @click="$emit('update:count', $event.target.value++)">
              {{count}}
            </button>`,
});