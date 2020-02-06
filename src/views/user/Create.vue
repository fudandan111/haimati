<template>
<div>
	<!-- 设置内容 -->
	<!-- 1 设置label -->
	<!-- 2 设置label-width -->
	<!-- 3 placeholder -->

	<!-- 表单校验 -->
	<!-- 1 数据绑定 添加命名空间为了访问数据方便 -->
	<!-- 2 设置model属性 :model 告诉form校验哪些数据 -->
	<!-- 3 设置prop属性 告诉form-item校验data里的哪个数据 -->
	<!-- 4 设置rules校验规则 -->

	<!-- 表单提交 -->
	<!-- 1 绑定事件 -->
	<!-- 2 设置ref 可以在js中获取 -->
	<!-- 3 校验表单 -->
	<h1 class="page-title">{{title}}</h1>
	<el-form label-width="200px" :model="data" :rules="rules" ref="create">
		<el-form-item label="用户名" prop="username">
			<el-input placeholder="请输入用户名" v-model="data.username"></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="password">
			<el-input placeholder="请输入密码" type="password" v-model="data.password"></el-input>
		</el-form-item>
		<el-form-item label="电话" prop="tel">
			<el-input placeholder="请输入电话" type="number" v-model="data.tel"></el-input>
		</el-form-item>
		<el-form-item label="性别" prop="radio">
			<el-radio label="1" v-model="radio">男</el-radio>
  			<el-radio label="2" v-model="radio">女</el-radio>
		</el-form-item>
		<el-form-item label="简介" prop="introduce">
			<el-input type="textarea" placeholder="请输入简介" v-model="data.introduce"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="success" @click="submitCreateInfo">提交</el-button>
		</el-form-item>
	</el-form>
</div>
</template>
<script>
// 组件
export default {
	
	// 数据
	data() {
		let rules = {};
		// 定义校验规则
		["username", "password", "tel", "introduce"].forEach( key => {
			// 为每一个字段设置校验
			rules[key] = [ { trigger: 'blur',required: true, message: '请输入数据' } ]
		})
		return {
			title: '创建用户',
			radio: '1',
			data: {},
			rules,
			submitUrl: '/admin/username/create'
		}
	},
	// 方法
	methods: {
		// 提交创建用户的信息
		submitCreateInfo() {
			this.$refs.create
				.validate(valid => {
					// 如果合法，提交数据
					if(valid) {
						console.log(123);
						this.$http
							// 发送请求
							.post(this.submitUrl, this.data)
							// 监听数据返回
							.then(({data}) => {
								// 如果成功
								if(data.errno === 0) {
									// 进入列表页
									return this.$router.replace('/user/list/1')
								}
								// 提示错误
								this.$message.error(data.msg);
							})
					}
				})
		}
	}
}
</script>