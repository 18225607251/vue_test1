<template>
  <div>
     <img src="./assets/logo.png" alt="logo">
     <School></School>
     <Student></Student>
     <button @click="add">点我增加一条信息</button>
     <button @click="read">点我显式一条信息</button>
     
  </div>
</template>

<script>
   //引入组件
    import School from './components/School.vue'
    import Student from './components/Student.vue'

export default {
   name:'App',
   components:{
      School,
      Student
   },
   methods:{
      add(){
         localStorage.setItem("a","666");
      },
      read(){
         console.log(localStorage.getItem("a"));
      }
     
   }
}
</script>

