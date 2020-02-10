<template>
	<div class="home">
		<!-- 轮播图 -->
		<div class="slide">
			<div class="slideshow">
				<transition-group tag="ul" name="list">
					<li v-for="(item, index) in imgArray" :key="index">
						<img id="banner_img" :src="imgArray[currentIndex]" @mouseenter="enter" @mouseleave="leave"/>
					</li>
					<!-- <li>
						<img :src="imgArray[currentIndex]" alt="" @mouseenter="enter" @mouseleave="leave">
					</!--> -->
				</transition-group>
			</div>
			<div class="sildebtn">
				<p class="left" @click="prevIndex">&lt;</p> | 
				<p class="right" @click="nextIndex">&gt;</p>
			</div>
		</div>
		<div class="middle_content">
			<!-- 最新产品 -->
			<div class="new_product">
				<div class="title">
					<h2>最新产品</h2>
					<div class="line">
						<hr/>
						<span>关注动态  改变自己</span>
						<hr/>
					</div>
					<div class="circle">
						<p class="yellow"></p>
						<p class="blue"></p>
					</div>
				</div>
				<div class="slideimgs">
					<div class="classify">
						<li href="#" :class="newProductCurrentIndex == 0 ? 'blue' : ''" @click="changenewProductCurrentIndex(0)">精致证件照</li> |
						<li href="#" :class="newProductCurrentIndex == 1 ? 'blue' : ''" @click="changenewProductCurrentIndex(1)">文艺照</li> |
						<li href="#" :class="newProductCurrentIndex == 2 ? 'blue' : ''" @click="changenewProductCurrentIndex(2)">花颜照</li> |
						<li href="#" :class="newProductCurrentIndex == 3 ? 'blue' : ''" @click="changenewProductCurrentIndex(3)">轻婚纱</li>
					</div>
					<div class="imgs">
						<p @click="left">&lt;</p>
						<div class="img">
							<transition-group tag="ul">
								<li v-for="(item, index) in newProductImgArray" :key="index">
									<img id="banner_img" :src="newProductImgArray[newProductCurrentIndex]" />
								</li>
							</transition-group>
						</div>
						<p @click="right">&gt;</p>
					</div>
				</div>
				<h2>精致证件照</h2>
				<p class="text">一张精致的证件照，能让你的生活焕然一新，能为你的生活带来意想不到的改变</p>
				<div class="detail">查看详情</div>
			</div>
			<!-- 预约流程 -->
			<div class="appointment">
				<div class="title">
					<h2>预约流程</h2>
					<div class="line">
						<hr/>
						<span>生活需要仪式感</span>
						<hr/>
					</div>
					<div class="circle">
						<p class="yellow"></p>
						<p class="blue"></p>
					</div>
				</div>
				<div class="appointmentimgs">
					<div v-for="(item, index) in appointmentimgs" :key="index">
						<img :src="item" alt="">
					</div>
				</div>
				<div class="steps">
					<div class="step1">
						<h3>step1</h3>
						<h2>关注海马体</h2>
						<p>关注海马体公众号了解最近上新产品</p>
					</div>
					<hr/>
					<div class="step2">
						<h3>step2</h3>
						<h2>选择门店</h2>
						<p>选择离您最近的门店进行拍摄</p>
					</div>
					<hr/>
					<div class="step3">
						<h3>step3</h3>
						<h2>预约时间</h2>
						<p>提前预约避免错过重要时刻</p>
					</div>
					<hr/>
					<div class="step4">
						<h3>step4</h3>
						<h2>确定下单</h2>
						<p>下单后期待最美的自己</p>
					</div>
				</div>
			</div>
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
			.list-enter {
				transform: translateX(100%);
			}
			.list-leave {
				transform: translateX(0);
			}
			.list-enter-active,.list-leave-avtive {
				transition: all 5s ease;
				transform: translateX(0);
			}
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
			text-align: center;
			padding-top: 80px; 
			.line {
				display: flex;
				justify-content: space-between;
				hr {
					width: 350px;
					border-style: none;
					border-top: solid 1px rgb(161, 160, 160);
					margin-top: 10px; 
				}
				span {
					color: #919199;
				}
			}
			.circle {
				width: 34px;
				display: flex;
				margin: 10px auto;
				p {
					width: 15px;
					height: 15px;
					border-radius: 50%;
				}
				.yellow {
					background-color: #FF8F00;
					margin-right: 4px;
				}
				.blue {
					background-color: #1769FF;
				}
			}
		}
		.slideimgs {
			.classify {
				width: 400px;
				display: flex;
				justify-content: space-between;
				margin: 20px auto;
				color: #45454D;
				font-weight: bold;
				.blue {
					color: #1769FF;
				}
			}
			.imgs {
				display: flex;
				justify-content: space-between;
				font-size: 100px;
				color: #4C4C54;
				font-weight: 100;
				position: relative;
				margin-bottom: 40px;
				p {
					margin-top: 125px;
				}
				.img {
					width: 900px;
					height: 450px;
					overflow: hidden;
					ul {
						width: 900px;
						height: 450px;
						li {
							width: 900px;
							height: 450px;
							position: absolute;
							img {
								width: 100%;
								height: 100%;
							}
						}
					}
				}
			}
		}
		h2, p.text, div.detail {
			text-align: center;
		}
		p.text {
			margin: 20px;
			font-size: 14px;
			color: #919199;
		}
		div.detail {
			width: 350px;
			height: 50px;
			border: solid 1px #1769FF;
			border-radius: 30px;
			margin: 40px auto;
			line-height: 50px;
			color: #1769FF;
			&:hover {
				color: white;
				background-color: #1769FF;
			}
		}
	}
	.appointment {
		.title {
			text-align: center;
			padding-top: 80px; 
			.line {
				display: flex;
				justify-content: space-between;
				hr {
					width: 350px;
					border-style: none;
					border-top: solid 1px rgb(161, 160, 160);
					margin-top: 10px; 
				}
				span {
					color: #919199;
				}
			}
			.circle {
				width: 34px;
				display: flex;
				margin: 10px auto;
				p {
					width: 15px;
					height: 15px;
					border-radius: 50%;
				}
				.yellow {
					background-color: #FF8F00;
					margin-right: 4px;
				}
				.blue {
					background-color: #1769FF;
				}
			}
		}
		.appointmentimgs {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			div {
				width: 320px;
				height: 410px;
				margin: 40px 0 5px;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.steps {
			display: flex;
			justify-content: space-around;
			padding: 0 43px;
			margin-bottom: 80px;
			div	{
				width: 200px;
				text-align: center;
				color: #45454D;
				h2 {
					font-size: 20px;
					font-weight: 500;
				}
				p {
					font-size: 12px;
					margin-top: 10px;
					color: #919199;
				}
			}
			hr {
				width: 90px;
				border-style: none;
				border-top: solid 1px rgb(161, 160, 160);
				margin-top: 20px; 
			}
		}
	}

}
</style>
<script>
export default {
	data() {
		return {
			// 轮播图图片索引
			currentIndex: 0,
			// 最新产品图片索引
			newProductCurrentIndex: 0,
			// 定时器
			timer: null,
			// 轮播图图片
			imgArray: [
				'/img/banner1.jpg',
				'/img/banner2.jpg',
			],
			// 最新产品图片
			newProductImgArray: [
				'/img/newproduct1.png',
				'/img/wenyizhao.png',
				'/img/huayan.png',
				'/img/wedding.png'
			],
			// 预约流程图片
			appointmentimgs: [
				'/img/step1.png',
				'/img/step2.png',
				'/img/step3.png',
				'/img/step4.png'
			]
		}
	},
	methods: {
		// 上一张
		prevIndex() {
			if (this.currentIndex == 0) {
				this.currentIndex = this.imgArray.length - 1;
			} else {
				this.currentIndex--;
			}
		},
		// 下一张
		nextIndex() {
			if (this.currentIndex == this.imgArray.length - 1) {
				this.currentIndex = 0;
			} else {
				this.currentIndex++;
			}
		},
		// 定时器
		run() {
			this.timer = setInterval(() => {
				this.nextIndex()
			}, 3000)
		},
		// 鼠标移入
		enter() {
			clearInterval(this.timer);
		},
		// 鼠标离开
		leave() {
			this.run();
		},
		// 查看最新产品上一个
		left() {
			if (this.newProductCurrentIndex == 0) {
				this.newProductCurrentIndex = this.newProductImgArray.length - 1;
			} else {
				this.newProductCurrentIndex--;
			}
		},
		// 查看最新产品下一个
		right() {
			if (this.newProductCurrentIndex == this.newProductImgArray.length - 1) {
				this.newProductCurrentIndex = 0;
			} else {
				this.newProductCurrentIndex++;
			}
		},
		// 点击事件改变最新产品的索引值
		changenewProductCurrentIndex(index) {
			this.newProductCurrentIndex = index;
		}
	},
	// 组件构建完成
	created() {
		this.run();
	}
}
</script>