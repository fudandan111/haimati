<template>
	<div class="introduce">
		<!-- banner部分 -->
		<div class="banner">
			<img src="../../public/img/title.png" alt="">
			<div class="circles">
				<p class="first"></p>
				<p class="second"></p>
			</div>
			<p>海马体照相馆是缦图摄影旗下的时尚轻快简摄影品牌，目前直营连锁门店已覆盖北、上、广、深、杭等核心城市和一二线新兴潜力城市，</p>
			<p>是国内兼具规模、知名度与品牌影响力的摄影类品牌，致力于为人们提供优质的摄影美学服务。</p>
		</div>
		<!-- 标题部分 -->
		<div class="title">
			<div class="brand_concept">
				<img src="../../public/img/one.png" alt="">
				<span>品牌理念</span>
			</div>
			<div class="brand_characteristics">
				<img src="../../public/img/two.png" alt="">
				<span>品牌特色</span>
			</div>
			<div class="company_culture">
				<img src="../../public/img/three.png" alt="">
				<span>企业文化</span>
			</div>
			<div class="development_history">
				<img src="../../public/img/four.png" alt="">
				<span>发展历程</span>
			</div>
		</div>
		<!-- 介绍部分 -->
		<div class="inner">
			<Destript></Destript>
			<img src="../../public/img/haimati.png" alt="">
		</div>
		<!-- 发展历程 -->
		<div class="develope">
			<h1>海马体发展历程</h1>
			<p>高速发展，把美带向生活每一处细节</p>
			<Develope></Develope>
		</div>
	</div>
</template>
<style scoped lang="scss">
.introduce {
	// banner
	.banner {
		width: 100%;
		height: 400px;
		background-color: #2E83FF;
		text-align: center;
		img {
			margin-top: 100px; 
		}
		.circles {
			display: flex;
			width: 34px;
			margin: 20px auto;
			p {
				width: 15px;
				height: 15px;
				border-radius: 50%;
			}
			.first {
				background-color: #FF8F00;
				margin-right: 4px;
			}
			.second {
				background-color: #1769FF;
			}
		} 
		p {
			color: white;
			margin-bottom: 10px;
			font-weight: 200; 
		}
	}
	// 标题
	.title {
		width: 100%;
		height: 80px;
		display: flex;
		border-bottom: solid 1px rgb(196, 194, 194);
		// position: fixed;
		// top: 700px;
		div {
			padding: 20px 130px;
			height: 80px;
			width: 150px;
			img {
				width: 30px;
				height: 30px;
				margin-right: 6px;
			}
			span {
				font-weight: bold;
			}
		}
	}
	// 介绍部分
	.inner {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		img {
			width: 480px;
			margin: 70px 0 60px 90px;
		}
	}
	// 发展历程
	.develope {
		width: 1000px;
		height: 1100px;
		margin: 50px auto;
		h1 {
			font-size: 40px;
			text-align: center;
		}
		p {
			color: gray;
			margin: 10px 0 100px 0;
			text-align: center;
		}
	}
}
</style>
<script>
// 引入header
import Destript from '../components/Destript.vue';
import Develope from '../components/Develope.vue';
export default {
  // 注册组件
  components: { Destript, Develope }
}
</script>
