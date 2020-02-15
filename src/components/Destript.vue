<template>
    <div class="destript">
        <div v-html="data.title"></div>
        <p>{{data.remark}}</p>
        <div class="circles">
            <span class="first"></span>
            <span class="second"></span>
        </div>
        <hr/>
        <div class="des" v-html="data.description"></div>
    </div>
</template>
<style lang="scss">
.destript {
    padding: 100px 50px;
    width: 480px;
    .circles {
        width: 34px;
        display: flex;
        margin: 12px 0 50px;
        span {
            width: 15px;
            height: 15px;
            border-radius: 50%;
        }
        .first {
            background-color: #FF8F00;
            margin-right: 4px;
        }
        .second {
            background-color: #1769FF;
        }
    }
    hr {
        border:1px dashed gray;
        margin-bottom: 15px; 
    }
    .des {
        p {
            margin: 15px 0;
        }
    }
}
</style>
<script type="text/javascript">
// 组件
export default {
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
            let { params } = this.$route;
            // console.log(params);
            // 获取数据
            this.$http
                .get('/data/introduce/script.json', { params })
                .then( ({data}) => {
                    // 存储数据
                    this.data = data.concept;
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