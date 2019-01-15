import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    todoList: [
      "1. Do after cat",
      "2. Do after dog",
      "3. Do after fish"
    ]
  }
}).$mount('#app')
