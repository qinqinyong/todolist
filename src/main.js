import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //配置总线 就是把vm挂到Vue的原型上，让所有的组件对象都能找到他，进而调用$on和$emit
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  render: h => h(App),
}).$mount('#app')
