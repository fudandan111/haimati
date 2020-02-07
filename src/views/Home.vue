<template>
	<div class="home">
		<div class="banner">
			<h1>首页</h1>
			<div v-for="item in data.dataList" :key="item._id" :data="item"></div>
		</div>
	</div>
</template>
<style lang="scss">
.home {
	background: #FAFAFA;
}
</style>
<script>
export default {
	// 数据
	data() {
		return {
			data: {
				dataList: ["../../public/img/banner1.jpg", "../../public/img/banner2.jpg"],
			}
		}
	},
	// 方法
	methods: {

	}
}
</script>
