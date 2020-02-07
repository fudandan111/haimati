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
		<div class="bottom">
			<img src="../public/img/ico.png">
			<div class="connect">
				<ul>
					<li>企业连接</li>
					<li>缦图集团官网</li>
					<li>海马体企业</li>
					<li>西湖.缦图</li>
					<li>缦图莱思学院</li>
				</ul>
			</div>
			<div class="hotcity">
				<ul>
					<li>成都&nbsp;&nbsp;&nbsp;&nbsp;上海</li>
					<li>北京&nbsp;&nbsp;&nbsp;&nbsp;武汉</li>
					<li>重庆&nbsp;&nbsp;&nbsp;&nbsp;南京</li>
					<li>杭州&nbsp;&nbsp;&nbsp;&nbsp;深圳</li>
				</ul>
			</div>
			<div class="aboutHIMO">
				<ul>
					<li>常见问题</li>
					<li>门店信息</li>
					<li>企业合作</li>
					<li>人才招聘</li>
				</ul>
			</div>
		</div>
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
	.bottom {
		border-top: solid 1px #E3E3E6;
		background: #fff;
	}
}
</style>
<script>

</script>
