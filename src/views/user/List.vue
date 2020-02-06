<template>
<div>
	<h1 class="page-title">{{title}}</h1>
	<el-table :data="data" class="table">
		<el-table-column prop="id" label="用户ID" width="100"></el-table-column>
		<el-table-column prop="username" label="用户名" width="150"></el-table-column>
		<el-table-column prop="sex" label="性别" width="100"></el-table-column>
		<el-table-column prop="password" label="密码" width="200"></el-table-column>
		<el-table-column prop="tel" label="电话" width="200"></el-table-column>
		<el-table-column prop="intro" label="简介" width="200"></el-table-column>
		<el-table-column label="操作" width="80">
			<router-link :to="'/user/edit/' + 1" tag="el-button" class="el-button--success el-button--mini">编辑</router-link>
		</el-table-column>
	</el-table>
	<div class="btns">
		<router-link :to="'/user/list/' + (page < 2 ? 1 : page - 1)" tag="el-button" class="is-round">&larr;&emsp;上一页</router-link>
		<router-link :to="'/user/list/' + (page + 1)" tag="el-button" class="is-round">下一页&emsp;&rarr;</router-link>
	</div>
</div>
</template>
<style lang="less">
.btns {
	margin-top:50px;
	text-align: center;
}
</style>
<script>
export default {
	// 接收数据
	props: ['page'],
	// 数据
	data() {
		return {
			title: '用户列表',
			data: []
		}
	},
	// 方法
	methods: {
		// 获取数据
		getData() {
			// 结构数据
			let { params } = this.$route;
			// 发送请求
			this.$http
				.get('/admin/user/list', { params })
				.then(({data}) => {
					// console.log(data);
					return this.data = data;
				})
		}
	},
	created() {
		// console.log(typeof this.$route.params.page, typeof this.page)
		// 获取数据
		this.getData();

	},
	watch: {
		// 获取数据
		$route() {
			this.getData();
		}
	}
}
</script>