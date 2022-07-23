<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<h1>当前求和为：{{bigsum}}</h1>
        <h3>我在{{school}}，学习{{subject}}</h3>
		<select v-model.number:value="n">
			<!-- 以下value为初始显示 --> 
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
		<h3>person组件第一个人：{{$store.state.personList[0].name}}</h3>
		<h3>person组件总数：{{$store.state.personList.length}}</h3>

	</div>
</template>

<script>
import {mapState,mapGetters, mapMutations,mapActions} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		computed:{
			//取得仓库数据
            // sum(){
			// 	return $store.state.sum
			// },
			// school(){
			// 	return this.$store.state.school
			// },
			// subject(){
			// 	return this.$store.state.subject
			// },
			...mapState(['sum','school','subject']),
         //取得加工数据
			// bigsum(){
			// 	return $store.getters.bigsum
			// },
				...mapGetters(['bigsum'])
		},
		methods: {
			//一。亲自写方法：发给actions
			// increment(){
			// 	this.$store.dispatch('jia',this.n)
			// },
            //二。借助mapActions生成对应的方法，
            ...mapActions({increment:'jia'}),


			//一。亲自写方法：跳过actions，直接发送给mutation
			// JIAN(){
			// 	this.$store.commit('JIAN',this.n)
			// },
			//二。借助mapMutations生成对应的方法，(对象写法）写increment记得带上参数
		   ...mapMutations({decrement:'JIAN'}),
		   //数组写法
		//    ...mapMutation(['decrement'])等同于
		// ...mapMutation([decrement:'decrement'])前参是本组件方法名，后参是store里的方法名（后参未设置decrement，此句不能用）


			incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			},
			//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
			// ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
		},
		mounted() {
			console.log()
		},
		
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
