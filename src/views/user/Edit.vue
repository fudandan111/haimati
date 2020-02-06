<script>
// 引入
import Create from './Create';
// 组件
export default {
	// 混合
	mixins: [ Create, {
		data() {
			return {
				title: '编辑用户',
				submitUrl: '/admin/user/edit'
			}
		}
	}

	],
	// 方法
	methods: {
		// 获取数据
		getData() {
			// 解构路由数据
			// let { params } = this.$route;
			// 发送请求
			this.$http
				.get('/admin/user/userinfo')
				.then((res) => {
					console.log(res.data);
					// 存储数据
					return this.data = res.data;
				})
		}
	},
	// 组件创建完成
	created() {
		// 获取数据
		this.getData();
	},
	// 监听器
	watch: {
		// 路由改变
		$route() {
			// 获取数据
			this.getData();
		}
	}
}
</script>