<template>
    <div class="page-main">
        <h1 class="page-title">修改密码</h1>
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
        <el-form label-width="200px" :model="data" :rules="rules" ref="main">
            <el-form-item label="用户名" prop="username">
                <el-input placeholder="请输入用户名" v-model="data.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入密码" v-model="data.password"></el-input>
            </el-form-item>
            <el-form-item label="重复密码" prop="repeat">
                <el-input placeholder="请确认密码" v-model="data.repeat"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="submitData">提交</el-button>
                <el-button type="warning" @click="resetData">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
// 引入
import { checkUsername, checkPassword, checkRepeat} from '@t/validator';
// 组件
export default {
    // 数据
    data() {
        return {
            data: {},
            // 定义规则
            rules: {
                // 用户名
                username: [
                    { trigger: 'blur', validator: checkUsername }
                ],
                // 密码
                password: [
                    { trigger: 'blur', validator: checkPassword}
                ],
                // 确认密码
                repeat: [
                    { trigger: 'blur', validator:(...args) => {
                        // 执行方法校验 组件已经创建完成所以可以访问到data数据
                        checkRepeat(this.data.password, '密码', ...args);
                    }}
                ]
            }
        }
    },
    // 方法
    methods: {
        // 提交
        submitData() {
            this.$refs.main
                .validate(valid => {
                    // 如果合法
                    if(valid) {
                        // 解构数据
                        let {username, password} = this.data;
                        // 提交数据
                        this.$http
                            .post('/admin/manager/update', {username, password})
                            // 监听数据
                            .then(({data}) => {
                                if(data.errno === 0) {
                                    // 刷新页面, 重新登录
                                    window.location.reload()
                                } else {
                                    // 提示错误
                                    this.$message.error(data.msg)
                                }
                            })
                    }
                })
        },
        // 修改
        resetData() {
            // console.log(this.$refs.main); 有一个重置方法
            this.$refs.main.resetFields();
        }
    }

}
</script>