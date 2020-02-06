<template>
<div class="page-product-list">
	<!-- 商品列表 -->
	<div class="card-list">
		<el-card v-for="item in data" :key="item._id">
			<img :src="item.img">
			<h2>{{item.title}}</h2>
			<p class="price-part">
			<span class="price">￥{{item.price}}</span>
			<!-- 第一种方法：通过方法处理数据 -->
			<!-- <span class="type">{{dealType(item.type)}}</span> -->
			<!-- 第二种方法：过滤器 -->
			<span class="type">{{item.type | type}}</span>
			</p>
			<p class="sales">已销售{{item.sales}}份</p>
			<div class="btns">
				<!-- <el-button type="success" size="mini">修改</el-button> -->
				<router-link :to="'/product/edit/' + item._id" tag="el-button" class="el-button--success el-button--mini">修改</router-link>
				<el-button type="danger" size="mini" @click="removeItem(item._id)">删除</el-button>
			</div>
		</el-card>
	</div>
	<!-- 翻页 -->
	<div class="btns-container">
		<!-- <el-button round>&larr;&emsp;上一页</el-button> -->
		<router-link class="is-round" tag="el-button" :to="'/product/list/' + (page < 2 ? 1 : page - 1)">&larr;&emsp;上一页</router-link>
		<router-link class="is-round" tag="el-button" :to="'/product/list/' + (page + 1)">下一页&emsp;&rarr;</router-link>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.page-product-list {
	.btns-container {
		padding: 40px 0 60px;
		text-align: center;
	}
	.card-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		.el-card {
			width: 280px;
			margin-bottom: 30px;
			img {
				width: 240px;
				height: 135px;
			}
			h2 {
				font-size: 20px;
				font-weight: normal;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				text-align: center;
			}
			p {
				margin: 15px 0;
			}
			.price-part {
				display: flex;
				.price {
					color: #f30;
					flex: 1;
				}
			}
		}
	}
}
</style>
<script>
import { types } from '@t/conf';
// 组件
export default {
	// 引入数据
	// 在store.js中传递数据，并在这里接收
	props: ['page'],
	// 数据
	data() {
		return {
			data: []
		}
	},
	// 局部过滤器
	filters: {
		// 根据id获取标题
		type(id) {
			// 查找数据
			let type = types.find(item => item.id == id);
			// 返回结果
			return type ? type.text : '其他';
		}
	},
	// 方法
	methods: {
		// 获取数据
		getData() {
			// 解构数据
			let { params } = this.$route;
			// 发送请求
			this.$http
				// 发送请求 
				.get('/admin/product/list', {params})
				// 监听数据返回
				.then(({ data }) => {
					console.log(data);
					// 如果成功
					if (data.errno === 0) {
						// 更新数据
						return this.data = data.data
					}
					// 如果错误
					this.$message.error(data.msg)

				})
		},
		// 处理数据
		dealType(id) {
			// 根据id获取分类对象
			let type = types.find(item => item.id == id);
			// 返回结果
			return type ? type.text : '其他';
		},
		// 删除成员
		removeItem(id) {
			// 发送请求
			this.$http
				// 发送请求
				.post('/admin/product/remove', { id })
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功
					if (data.errno === 0) {
						// 刷新页面
						window.location.reload();
					} else {
						// 提示用户
						this.$message.error(data.msg);
					}
				})
		}
	},
	// 组件创建完成
	created() {
		// console.log(typeof this.$route.params.page, this.page);
		// 获取数据
		this.getData();
	},
	// 监听器
	watch: {
		// 路由变化
		$route() {
			// 获取数据
			this.getData();
		}
	}
}
</script>