import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: Number,
  },
  emits: ['update:count'],
  // Компонент должен иметь входной параметр

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button type="button"
                     :value="Number(count) + Number(1)"
                     @click="$emit('update:count', $event.target.value++)">
              {{count}}
            </button>`,
});
