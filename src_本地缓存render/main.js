/* 此文件是整个项目的接口文件
html不需要外部引入vue.js 也不需要引入main.js,脚手架配置了*/

// 这是一个残缺版的vue，不能解析template配置项,所以要用render函数（vm中有template必须用完整的vue.js）
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


new Vue({
  el:'#app',
   // render是一个函数
  // render(createElement){
  //   return createElement('标签','内容')
  // }
// 箭头函数
  // render:(createElement)=>{
  //   return createElement(''h1,'你好')
  // }

  // 一个参数，一句返回值 render:createElement=>createElement('h1','你好')
 
  // render:h=>h('h1','你好')直接传入组件 render:h=>h(App)


  // render=(createElement函数)=>{return createElement(App)} 注册组件
  // render: createElement=>createElement(App)
  render: h => h(App),
})
