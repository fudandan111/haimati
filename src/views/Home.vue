<template>
    <el-container class="page-home">
        <el-header>
            <router-link to="/" tag="h1">爱创课堂后台管理系统</router-link>
            <div class="status">
                <span>您好 {{$store.state.username}} 欢迎回来 ！</span>
                <a href="/admin/logout">退出</a>
            </div>
        </el-header>
        <el-container>
            <el-aside width="250px">
                <!-- 根据menu-item组件的index属性值切换路由 -->
                <el-menu :router="true">
                    <el-submenu v-for="(item, index) in menu" :key="index" :index="String(index)">
                        <!-- 通过template控制多个兄弟元素 -->
                        <template #title>
                            <i class="el-icon-menu"></i>
                            <!--<span slot="title">{{item.text}}</span>-->
                            <span>{{item.text}}</span>
                        </template>
                        <!-- 循环菜单项 循环指令嵌套使用 -->
                        <el-menu-item v-for="item in item.children" :key="item.link" :index="item.link">{{item.text}}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <!-- 子路由渲染位置 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<style type="text/css" lang="scss">
.page-home {
	height: 100%;
	.el-header,
	.el-aside,
	.el-main {
		background-color: #fff;
	}
	.el-header {
		margin-bottom: 10px;
		display: flex;
		h1 {
			flex: 1;
		}
		.status {
			padding-top: 30px;
		}
	}
	.el-aside {
		margin-right: 10px;
	}
    // 方便复用样式
	.page-title {
		padding: 0 15px 15px;
		margin-bottom: 30px;
		margin-top: 10px;
		border-bottom: 1px solid #ccc;
		font-size: 24px;
		font-weight: normal;
	}
	.el-input,
	.el-textarea,
	.el-select {
		width: 50%;
		.el-input {
			width: 100%;
		}
	}
	.upload-tip-text {
		color: #999;
		margin-left: 10px;
	}
	.upload-image {
		margin-top: 20px;
		max-height: 200px;
	}
}
</style>
<script>
export default {
    // 数据
    data() {
        return {
            // 菜单
            menu: [
                {
                    text: '商品模块',
                    children: [
                        { text: '创建商品', link: '/product/create' },
                        { text: '商品列表', link: '/product/list/1' },

                    ]
                },
                {
                    text: '首页模块',
                    children: [
                        { text: '首页广告', link: '/home/ads' },
                        { text: '首页分类', link: '/home/types' }
                    ]
                },
                {
                    text: '用户模块',
                    children: [
                        { text: '创建用户', link: '/user/create' },
                        { text: '用户列表', link: '/user/list/1' }
                    ]
                }
            ]
        }
    }
}
</script>