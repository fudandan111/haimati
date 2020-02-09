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
						<li href="#">精致证件照</li> |
						<li href="#">文艺照</li> |
						<li href="#">花颜照</li> |
						<li href="#">轻婚纱</li>
					</div>
					<div class="imgs">
						<p>&lt;</p>
						<div class="img">
							<ul>
								<li v-for="(item, index) in newProductImgArray" :key="index">
									<img id="banner_img" :src="item" />
								</li>
							</ul>
						</div>
						<p>&gt;</p>
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
	}
}
</style>
<script>
export default {
	data() {
		return {
			// 对比图片索引的变量
			currentIndex: 0,
			timer: null,
			imgArray: [
				'/img/banner1.jpg',
				'/img/banner2.jpg',
			],
			newProductImgArray: [
				'/img/newproduct1.png',
				'/img/wenyizhao.png',
				'/img/huayan.png',
				'/img/wedding.png'
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
		}
	},
	// 组件构建完成
	created() {
		this.run();
	}
}
</script>