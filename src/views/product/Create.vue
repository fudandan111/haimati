<template>
<div class="page-create">
	<h1 class="page-title">{{title}}</h1>
	<el-form label-width="200px" :model="data" :rules="rules" ref="product">
		<el-form-item label="商品标题" prop="title">
			<el-input placeholder="请输入商品名称" v-model="data.title"></el-input>
		</el-form-item>
		<el-form-item label="商品描述" prop="description">
			<el-input type="textarea"  placeholder="请输入商品描述" v-model="data.description"></el-input>
		</el-form-item>
		<el-form-item label="商品价格" prop="price">
			<el-input  placeholder="请输入商品价格" v-model="data.price" type="number"></el-input>
		</el-form-item>
		<el-form-item label="商品原价" prop="originPrice">
			<el-input  placeholder="请输入商品原价" v-model="data.originPrice" type="number"></el-input>
		</el-form-item>
		<el-form-item label="商品评分" prop="evaluate">
			<el-rate show-score allow-half v-model="data.evaluate"></el-rate>
		</el-form-item>
		<el-form-item label="商品分类" prop="type">
			<el-select placeholder="请选择商品分类" v-model="data.type">
				<el-option v-for="item in types" :key="item.id" :label="item.text" :value="item.id"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="商品销量" prop="sales">
			<el-input  placeholder="请输入商品销量" v-model="data.sales" type="number"></el-input>
		</el-form-item>
		<el-form-item label="商品店名" prop="storeName">
			<el-input placeholder="请输入商品店名" v-model="data.storeName"></el-input>
		</el-form-item>
		<el-form-item label="商品地址" prop="storeAddress">
			<el-input placeholder="请输入商品地址" v-model="data.storeAddress"></el-input>
		</el-form-item>
		<el-form-item label="商品分店" prop="storeNum">
			<el-input placeholder="请输入商品分店" v-model="data.storeNum"></el-input>
		</el-form-item>
		<el-form-item label="商品图片" prop="img">
			<!-- action上传位置 show-file-list是否出现文件名 -->
			<el-upload
				action="/admin/product/upload"
				:on-success="uploadSuccess"
				:on-error="uploadError"
				:show-file-list="false"
			>
				<el-button type="primary">上传</el-button>
				<!-- 点击文字也会上传所以使用slot -->
				<span slot="tip" class="upload-tip-text">请选择商品图片</span>
			</el-upload>
			<img :src="data.img" class="upload-image" v-if="data.img">
		</el-form-item>
		<el-form-item label="商品内容" prop="content">
			<quill-editor v-model="data.content"></quill-editor>
		</el-form-item>
		<el-form-item>
			<el-button type="success" @click="submitData">提交</el-button>
		</el-form-item>
	</el-form>
</div>
</template>
<script>
// 引入组件
import { types } from '@t/conf';
// 组件
export default {
	// 数据
	data() {
		// 声明校验规则变量
		let rules = {};
		// 定义校验规则
		["img", "title", "description", "sales", "price", "originPrice", "type", "evaluate", "storeName", "storeAddress", "storeNum", "content"].forEach( key => {
			// 为每一个字段设置校验
			rules[key] = [ { trigger: 'blur',required: true, message: '请输入数据' } ]
		})
		return {
			// 分类数据
			types,
			// 提交的数据
			data: {},
			// 校验规则
			// rules: {
				// required 会有一个小型号 必填项
				// title: [ { trigger: 'blur', required: true, message: '请输入数据' } ]
			// }
			rules,
			// 把不同的地方提取出来
			title: '创建商品',
			submitUrl: '/admin/product/create'
		}
	},
	computed: {
		// 处理data 因为有些字段需要是数值类型的
		dealData() {
			['sales', 'price', 'originPrice', 'storeNum', 'evaluate', 'type']
				.forEach(key => this.data[key] = +this.data[key])
			// 返回数据
			return this.data;
		}
	},
	// 方法
	methods: {
		// 成功   因为upload不能绑定v-model 所以解构返回的数据
		uploadSuccess({ errno, data, msg}) {
			// 如果成功
			if(errno === 0) {
				// 向data中存储数据,data中有了img数据,就可以给img标签设置src属性
				// this.data.img = data;
				// 避免数据丢失
				this.$set(this.data, 'img', data)
			} else {
				// 提示错误
				this.$message.error('msg')
			}
		},
		// 失败
		uploadError(res) {
			// console.log('no', res)
			// 提示用户
			this.$message.error('上传失败');
		},
		// 提交数据
		submitData() {
			this.$refs.product
				.validate(valid => {
					// 如果合法，提交数据
					if(valid) {
						// console.log(this.data);
						// 提交数据
						this.$http
							// .post('/admin/product/create', this.data)
							.post(this.submitUrl, this.dealData)
							// 监听数据返回
							.then(( {data} ) => {
								// 如果成功
								if (data.errno === 0) {
									// 进入列表页
									return this.$router.replace('/product/list/1')
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