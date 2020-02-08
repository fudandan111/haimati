<template>
	<div class="home">
		<!-- 轮播图 -->
		<div class="slide">
			<div class="slideshow">
				<ul>
					<li v-for="(item, index) in imgArray" :key="index">
						<img id="banner_img" :src="item" />
					</li>
				</ul>
			</div>
			<div class="sildebtn">
				<p class="left">&lt;</p> | 
				<p class="right">&gt;</p>
			</div>
		</div>
		<div class="middle_content">
			<!-- 最新产品 -->
			<div class="new_product">
				<div class="title">
					<h1>最新产品</h1>
					<div class="line">
						<hr/>
						<span>关注动态  改变自己</span>
						<hr/>
					</div>
					<div>
						<p class="yellow"></p>
						<p class="blue"></p>
					</div>
				</div>
			</div>
			<!-- 预约流程 -->
			<!-- HIMO标准服务 -->
			<!-- 精选产品 -->
		</div>
	</div>
</template>
<style scoped lang="scss">
.slide {
	position: relative;
	.slideshow {
		width: 100%;
		height: 600px;
		overflow: hidden;
		ul {
			li {
				img {
					width: 1447px;
					height: 600px;
					object-fit: cover;
					position: absolute;
					}
			}
		} 
	}
	.sildebtn {
		width: 105px;
		height: 50px;
		background: white;
		display: flex;
		font-size: 26px;
		position: absolute;
		right: 300px;
		bottom: 0;
		line-height:50px;
		color: gray; 
		font-weight: 300;
		p {
			width: 50px;
			height: 50px;
			background-color: white;
			text-align: center;
			line-height: 50px;
		}
	}
}
.middle_content {
	padding: 0 150px;
	// background: pink;
	.new_product {
		.title {
			.line {
				display: flex;
				justify-content: space-between;
				hr {
					width: 350px;
					border-style: none;
					border-top: solid 1px rgb(161, 160, 160);
					margin-top: 10px; 
				}
			}
		}
	}
}
</style>
<script>
export default {
	data() {
		return {
			// 对比图片索引的变量
			mark: 0,
			imgArray: [
				'/img/banner1.jpg',
				'/img/banner2.jpg',
				// '/img/banner3.jpg'
			]
		}
	}
}
</script>