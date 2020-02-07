<template>
	<div id="app">
		<div class="header">
			<img src="../public/img/logo.png" alt="">
			<div id="nav">
				<router-link to="/">首页</router-link> |
				<router-link to="/introduce">品牌介绍</router-link> |
				<router-link to="/info">门店信息</router-link> |
				<router-link to="/Cooperation">企业合作</router-link> |
			</div>
		</div>
		<router-view/>
	</div>
</template>
<style lang="scss">
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html,
body {
	background-color: #efefef;
}
#app {
	.header {
		display: flex;
		justify-content: space-between;
		padding: 25px 150px;
		img {
			width: 200px;
			height: 30px;
		}
		#nav {
			width: 380px;
			height: 40px;
			display: flex;
			justify-content: space-between;
			line-height: 40px;
			font-size: 20px;
			color: gray;
			a {
				font-size: 16px;
				color: black;
				text-decoration: none;
			}
		}
	}
}
</style>
<script>

</script>
