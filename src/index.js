import Vue from 'vue'
import root from '@/root.vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#root',
    render: createElement => createElement(root)
  })
})
