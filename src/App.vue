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
			<div class="xiaoma">
				<img src="../public/img/ico.png">
			</div>
			<div class="connect">
				<ul>
					<li class="first">企业连接</li>
					<li>缦图集团官网</li>
					<li>海马体企业</li>
					<li>西湖.缦图</li>
					<li>缦图莱思学院</li>
				</ul>
			</div>
			<div class="hotcity">
				<ul>
					<li class="first">热门城市</li>
					<li>成都&nbsp;&nbsp;&nbsp;&nbsp;上海</li>
					<li>北京&nbsp;&nbsp;&nbsp;&nbsp;武汉</li>
					<li>重庆&nbsp;&nbsp;&nbsp;&nbsp;南京</li>
					<li>杭州&nbsp;&nbsp;&nbsp;&nbsp;深圳</li>
				</ul>
			</div>
			<div class="aboutHIMO">
				<ul>
					<li class="first">关于HIMO</li>
					<li>常见问题</li>
					<li>门店信息</li>
					<li>企业合作</li>
					<li>人才招聘</li>
				</ul>
			</div>
			<div class="haimati">
				<p class="first">联系海马体</p>
				<p class="phone">400-880-1861</p>
				<div class="imgs">
					<img src="../public/img/img1.png" alt="">
					<img src="../public/img/img2.png" alt="">
					<img src="../public/img/img.png" alt="">
				</div>
			</div>
			<div class="erweima"><img src="../public/img/erweima.png" alt=""></div>
		</div>
	</div>
</template>
<style lang="scss">
* {
	margin: 0;
	padding: 0;
	list-style: none;
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
				font-weight: bold;
				&:hover {
					color: #1769FF;
				}
			}
			.red {
				color: red;
			}
		}
	}
	.bottom {
		border-top: solid 1px #E3E3E6;
		display: flex;
		justify-content: space-between;
		padding: 50px 150px 70px;
		font-size: 12px;
		color: #919199;
		.first {
			font-size: 14px;
			font-weight: bold;
			margin-bottom: 20px;
			color: black;
		}
		li {
			margin-bottom: 8px;
		}
		.xiaoma img {
			width: 20px;
			height: 50px;
		}
		.haimati {
			.phone {
				font-size: 20px;
				color:#1769FF;
				font-weight: bold;
			}
			.imgs {
				img {
					width: 30px;
					height: 30px;
					margin: 30px 3px 0;
				}
			}
		}
		.erweima img {
			width: 120px;
			height: 120px;
		}

	}
}
</style>
<script>
export default {
	data() {
		return {

		}
	},
	watch: {
		'$route': 'routerChage'
	},
	methods: {
		routerChage(to) {
			console.log(to.path)
		}
	}
}
</script>
