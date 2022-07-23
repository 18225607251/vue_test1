<template>
  <div>
   <button @click="getStudentName">获取学生信息</button>
   <button @click="getCars">获取车辆信息</button>

  </div>
</template>
 
<script>
  import axios from 'axios'

export default {
   name:'App',
   methods: {
     getStudentName(){
      //  虽然服务器是5000端口，vue-cli开启的本地服务器面向的是8080代理服务器端口进而面向5000
      axios.get('http://localhost:8080/stu/students').then(
         response=>{
           console.log("请求成功",response.data)
         },
         error=>{
           console.log("请求失败",error.message)
         })
      //  axios.get('http://localhost:8080/students').then(
      //    (response)=>{
      //      console.log("请求成功",response.data)
      //    }).catch(error=>{
      //      console.log("请求失败",error.message)
      //    })
        
     },
     getCars(){
        axios.get('http://localhost:8080/car/cars').then(
         response=>{
           console.log("请求成功",response.data)
         },
         error=>{
           console.log("请求失败",error.message)
         })  

     }
   }
   
}
</script>

