<template>
     <div id="demoo">
            <h2>学生姓名：{{studentName}}</h2>
            <h2 >学生年龄：{{age}}</h2>
           <button v-on:click="updateAge">点我年龄加一</button>
           <button @click="death">点我销毁student组件</button>
         </div>
</template>

<script>
export default {
    name:'Student',
    data(){
          return{
          studentName:"储波",
          age:18
          }
      },
      methods: {
          updateAge(){
               this.age++;
          },
          death(){
         this.$destroy();
      }
      
      },
}
</script>

<style>
 #demoo{
     background-color: aqua;
 }
</style>