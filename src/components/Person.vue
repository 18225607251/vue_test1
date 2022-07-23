<template>
  <div>
		<h1>人员列表</h1>
		<input type="text" placeholder="请输入名字" v-model="name">
		<button @click="add">添加</button>
		<ul>
			<li v-for="p in personList" :key="p.id">{{p.name}}</li>
		</ul>
        <h3>count组件的总数：{{sum}}</h3>
	</div>
</template>

<script>
	import {nanoid} from 'nanoid'
export default {
        name:'Person',
        data(){
            return {
             name:''
            }
        },
        computed:{ 
            sum(){
               return this.$store.state.sum
            },
            personList(){
                return this.$store.state.personList
            }
        },
        methods:{
            add(){
                const pObj={id:nanoid(),name:this.name};
                // this.$store.state.personList.unshift(pObj);
                this.$store.commit('ADD',pObj);
                this.name=''
            }
        }
}
</script>

<style>

</style>