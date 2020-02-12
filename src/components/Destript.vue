<template>
    <div class="destript">
        
    </div>
</template>
<style lang="scss">

</style>
<script type="text/javascript">
// 组件
export default {
	// 接收属性
    props: ['title'],
    // 数据
    data() {
        return {
            data: {}
        }
    },
    // 方法
    methods: {
        // 获取数据
        getData() {
        // 获取数据
        let {params} = this.$route;
        // 获取数据
        this.$http
            .get('/public/data/introduce/script.json', { params })
            .then( ({ data }) => {
                console.log(111);
                // 存储数据
                this.data = data;
            });
        },
        // 组件创建完成
        created() {
            // 获取数据
            this.getData();
        }
    }
}
</script>