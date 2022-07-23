<template>
    <div id="demo">
            <h2>学校姓名：{{schoolName}}</h2>
            <h2>学校地址：{{address}}</h2>
            <button @click="showName">点我显示</button>
            <div class="box"></div>
         </div>
</template>

<script>
export default {
    name:'School',
    data(){
          return{
          schoolName:"尚硅谷",
          address:"北京"
          }
      },
      methods: {
          showName(){
              alert(this.schoolName);
          }
      }
}
</script>

<style lang="less">
// npm i less-loader@7 安装less插件才能使用
 #demo{
     background-color: aqua;
     .box{
         height:100px;
         width:100px;
         background-color: red;
     }
 }
</style>
