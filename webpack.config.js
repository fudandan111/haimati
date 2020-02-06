// 引入path模块
let path = require('path');
// 模板
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入webpack
let { CommonsChunkPlugin, UglifyJsPlugin } = require('webpack').optimize;
// 拆分css
let ExtractTextPlugin = require('extract-text-webpack-plugin');
// 压缩css
let OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');
// 配置
module.exports = {
	// 解决问题
	resolve: {
		// 拓展名
		extensions: ['.js', '.vue'],
		// 别名
		alias: {
			vue$: 'vue/dist/vue.js',
		}
	},
	// 入口文件
	entry: {
		// 模块入口
		main: './src/main.js',
		// 库文件
		lib: ['vue', 'element-ui']
	},
	// 发布文件
	output: {
		// 发布资源相对位置
		path: path.join(process.cwd(), '../server'),
		// 发布文件
		filename: './static/admin/[name].js',
		// 静态资源引入位置  不希望发布之后有两个../../ 
		publicPath: '/'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// es6
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.join(process.cwd(), './src'),
				exclude: /node_modules/,
				options: {
					// 编译器
					presets: ['es2015']
				}
			},
			// vue
			{
				test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // 拆分css
                    extractCss: true,
                    // 加载机 因为js压缩无法压缩es6语法
                    loaders: {
                        js: 'babel-loader?presets[]=es2015'
                    }
                }
			},
			// css
			{
				test: /\.css$/,
                // loader: 'style-loader!css-loader'
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    // use引入剩余的
                    use: 'css-loader'
                })
			},
			// scss
			{
				test: /\.scss$/,
                // loader: 'style-loader!css-loader!sass-loader'
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
			},
			// 字体图标
			{
				test: /\.(woff|ttf)$/,
				loader: 'url-loader'
			}
		]
	},
	// 插件
	plugins: [
		// 模板
		new HtmlWebpackPlugin({
			// 文件
			template: './public/index.html',
			// 发布
			
			// 指纹
			hash: true
        }),
        // 拆分库文件
        new CommonsChunkPlugin('lib'),
        // css发布位置
        new ExtractTextPlugin('./static/admin/style.css'),
        // 压缩js 开发完再压缩 先注释
        // new UglifyJsPlugin(),
        // 压缩css
        // new OptimizeCssAssets()
	]
}