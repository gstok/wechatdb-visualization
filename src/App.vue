
<!--局部样式-->
<style scoped>
    .app {
        width: 100%;
        height: 100%;
    }

    .box {
        box-sizing: content-box;
        width: 1000px;
        height: 500px;
        border: solid 1px black;
    }
</style>

<!--全局局部覆盖样式-->
<style>
    html, body {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
    }

    div {
        box-sizing: border-box;
    }
</style>

<template>
    <div class="app">
        <div class="box">
            <d3ChainGraph></d3ChainGraph>
        </div>
        <!-- <dayChatLine></dayChatLine> -->
    </div>
</template>

<script>
    export default {
        name: "app",
        props: {

        },
        data () {
            return {
                //#region 页面对象
                //#endregion

                //#region 页面内容绑定数据
                //#endregion

                //#region 页面样式绑定数据
                //#endregion
            };
        },
        watch: {

        },
        computed: {
            //#region 常量计算属性

            //#endregion

            //#region 数据转换计算属性
            //#endregion

            //#region 样式计算属性
            //#endregion
        },
        methods: {
            //#region 页面事件方法
            //#endregion

            //#region 业务逻辑方法
            //#endregion

            //#region 接口访问方法
            //#endregion

            //#region 数据转换方法
            //#endregion

            //#region 自动样式方法
            //#endregion

            //#region 其他方法
            //#endregion
        },
        created () {

        },
        mounted () {

        },
        components: {

        },
    };
</script>

