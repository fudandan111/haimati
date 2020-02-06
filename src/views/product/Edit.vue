<script>
// 两个页面非常相似使用混合
// 引入创建组件
import Create from './Create';
// 组件
export default {
	// 混合
	mixins: [ Create, {
		// 第一种是：在混合中重写，第二个参数表述重写数据
		// data() {
		// 	return {
		// 		title: '编辑商品'
		// 		submitUrl: '/admin/product/create'
		// 	}
		// }
	} ],
	// 组件内重写商品
	data() {
		return {
			title: '编辑商品',
			submitUrl: '/admin/product/edit'
		}
	},
	// 方法
	methods: {
		// 获取数据
		getData() {
			// 解构路由数据
			let { params } = this.$route;
			// 发送请求
			this.$http
				.get('/admin/product/detail', { params })
				.then(({data}) => {
					// 如果成功过
					if(data.errno === 0) {
						// 存储数据
						return this.data = data.data;
					}
					// 提示错误
					this.$message.error(data.msg);
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