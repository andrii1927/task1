import Vue from 'vue';

const Button = Vue.component('PageButton', {
  render(createElement) {
    return createElement('button', this.$slots.default);
  },
});

export default Button;