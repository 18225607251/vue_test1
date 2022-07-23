/* 此文件是整个项目的接口文件
html不需要外部引入vue.js 也不需要引入main.js,脚手架配置了*/

// 这是一个残缺版的vue，不能解析template配置项,所以要用render函数（vm中有template必须用完整的vue.js）
import Vue from 'vue'
import App from './App.vue'
//引入插件
// import vueResource from 'vue-resource'
//引入store
import store from './store'
Vue.config.productionTip = false


new Vue({
  el:'#app',
  // 一个参数，一句返回值 render:createElement=>createElement('h1','你好')
  // render=(createElement函数)=>{return createElement(App)} 注册组件
  // render: createElement=>createElement(App)
 
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus=this//定义一个全局事件总线，vm里也有，之后vc里也有，$bus就是当前的vm,原型中能找到
  },
  
})
