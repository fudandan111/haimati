<template>
    <div class="developescr">
        <!-- 中线 -->
        <div class="line"></div>
        <!-- 圆点 -->
        <div class="circles">
            <span v-for="(item,index) in data.length" :key="index"></span>
        </div>
        <!-- 发展历程 -->
        <ul v-for="(item,index) in data" :key="index">
            <li>
                <div v-html="item.title"></div>
                <div v-html="item.mark"></div>
                <div v-html="item.time"></div>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
.developescr {
    position: relative;
    .line {
        float: left;
        border-right: solid 1px #e7e7e7;
        height: 800px;
        position: absolute;
        left: 465px;
        top: 40px;
    }
    .circles {
        width: 15px;
        height: 840px;
        span {
            display: inline-block;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            position: absolute;
            left: 458px;
            top: 40px;
        }
        span:nth-child(odd){
            background-color: #1769FF;
        }
        span:nth-child(even){
            background-color: #FF8F00;
        }
        span:nth-of-type(1){
            left: 458px;
            top: 40px;
        }
        span:nth-of-type(2){
            top: 130px;
        }
        span:nth-of-type(3){
            top: 250px;
        }
        span:nth-of-type(4){
            top: 360px;
        }
        span:nth-of-type(5){
            top: 480px;
        }
        span:nth-of-type(6){
            top: 590px;
        }
        span:nth-of-type(7){
            top: 720px;
        }
        span:nth-of-type(8){
            top: 830px;
        }
    }
    ul:nth-of-type(1) {
        position: absolute;
        top: 0;
        left: 520px;
    }
    ul:nth-of-type(2) {
        position: absolute;
        top: 115px;
        left: -100px;
        text-align: right;
    }
    ul:nth-of-type(3) {
        position: absolute;
        top: 230px;
        left: 520px;
    }
    ul:nth-of-type(4) {
        position: absolute;
        top: 345px;
        left: -100px;
        text-align: right;
    }
    ul:nth-of-type(5) {
        position: absolute;
        top: 460px;
        left: 520px;
    }
    ul:nth-of-type(6) {
        position: absolute;
        top: 575px;
        left: -100px;
        text-align: right;
    }
    ul:nth-of-type(7) {
        position: absolute;
        top: 690px;
        left: 520px;
    }
    ul:nth-of-type(8) {
        position: absolute;
        top: 805px;
        left: -100px;
        text-align: right;
    }
    ul li {
        width: 500px;
    }
}
</style>
<script type="text/javascript">
// 组件
export default {
    // 数据
    data() {
        return {
            data: []
        }
    },
    // 方法
    methods: {
        // 获取数据
        getData() {
            // 获取数据
            let { params } = this.$route;
            // console.log(params);
            // 获取数据
            this.$http
                .get('/data/introduce/develope.json', { params })
                .then( ({data}) => {
                    console.log(data);
                    // 存储数据
                    this.data = data;
                });
        }
    },
    // 组件创建完成
    created() {
        // 获取数据
        this.getData();
    },
    // 监听器
    watch: {
        // 路由
        $route() {
            // 获取数据
            this.getData();
        }
    }
}
</script>