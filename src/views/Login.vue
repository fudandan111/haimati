<template>
    <div class="page-login">
        <div class="inner">
            <h2>请您登陆</h2>
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
            <el-form label-width="100px" :model="data" :rules="rules" ref="login">
                <el-form-item label="用户名" prop="username">
                    <el-input placeholder="请输入用户名" v-model="data.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input placeholder="请输入密码" type="password" v-model="data.password"></el-input>
                </el-form-item>
                <el-button type="success" @click="submitData">登录</el-button>
            </el-form>
        </div>
    </div>
</template>
<style lang="scss">
.page-login {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #efefef;
    .inner {
        position: absolute;
        top: 50%;
		left: 50%;
		width: 400px;
		padding: 20px;
		margin: -160px -220px;
		background-color: #fff;
		border-radius: 10px;
		h2 {
			font-size: 20px;
			font-weight: normal;
			padding: 0 0 10px;
			border-bottom: 1px solid #ccc;
			text-align: center;
		}
		.el-button {
			width: 100%;
			display: block;
		}
    }
}
</style>
<script>
// 引入方法
import { checkUsername, checkPassword } from '@t/validator';
// 组件
export default {
    // 数据
    data() {
        return {
            // 表单提交的数据,v-model属性最后一层是通过$set设置
            data: {},
            // 定义校验规则rules, key是校验的属性值, value是一个数组, 数组中每一个对象代表一条校验规则
            rules: {
                username: [
                    {trigger: 'blur', validator: checkUsername }
                ],
                password: [
                    {trigger: 'blur', validator: checkPassword }
                ]
            }
        }
    },
    // 方法
    methods: {
        // 表单提交数据
        submitData() {
            // console.log(this.$refs.login);
            this.$refs.login
                .validate(valid => {
                    // 提交数据
                    this.$http
                        .post('/admin/login', this.data)
                        .then( ({data}) => {
                            // 成功
                            if(data.errno === 0) {
                                // 存储用户名
                                this.$store.commit('updateUsername', data.data)
                            }else {
                                // 拓展的两种提示框
                                this.$message.error(data.msg)
                                // this.$alert(data.msg)
                            }
                        })
                })
        }
    }
}
</script>