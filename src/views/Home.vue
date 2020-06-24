<template>
  <div class="home">

		<h2>首页		{{title}} --{{age}}</h2>
		<h1>{{num}}</h1>
		<button @click="play()"></button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {reactive,toRefs,computed} from "@vue/composition-api"
export default {
  name: 'Home', 
  // components: {
  //   HelloWorld
  // },
	
	//2.0的计算属性
	// computed:{
	// 	num(){
	// 		return 100
	// 	}
	// },
	
	
	//3.0写法
	setup(){
		const state = reactive({
			title:'hello home',
			age:20,
			sex:'男',
			msg:'hello',
			//3.0 的计算属性
			num:computed(()=>100)
		})
	//	return state //返回所有
	
	// return {   //按需返回
	// 	title:state.title,
	// 	age:state.age
	// }
	let play =()=>{  //方法  和2.0 的methods一样
	//3.0	没有对应的this   点击加1
		state.age++;
	}
	return {   //返回整个对象
				...toRefs(state),
				play //返回方法
			}
	
	}
}
</script>
<style scoped="scoped">
	h2{
		color: #FF0000;
	}
</style>
