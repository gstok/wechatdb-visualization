
<!--局部样式-->
<style scoped>
    .Chart {
        display: inline-block;
        position: relative;
        width: 100%;
    }

    .chartWarp {

    }
</style>

<!--全局局部覆盖样式-->
<style>

</style>

<template>
    <div class="Chart">
        <div class="chartWarp" :style="autoChartWarpStyle"></div>
    </div>
</template>

<script>
    import ECharts from "echarts";

    export default {
        name: "Chart",
        props: {
            height: {
                type: Number,
                default: 320,
            },
        },
        data () {
            return {
                //#region 页面绑定内容数据
                //#endregion

                //#region 页面对象
                    chartDom: null,
                    chart: null,
                //#endregion

                //#region 页面绑定样式数据
                //#region
            };
        },
        watch: {
            autoChartOption (nv) {
                this.b_updateChart();
            },
        },
        computed: {
            //#region 图表配置
                //图表初始化配置选项
                autoChartOptionTemplate () {
                    return {
                        title: {
                            text: "",
                        },
                        tooltip : {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    backgroundColor: '#6a7985'
                                }
                            }
                        },
                        grid: {
                            top: 80,
                            left: 20,
                            bottom: 40,
                            right: 42,
                        },
                        xAxis: {
                            type: 'value',
                            name: '时间',
                            nameTextStyle: {
                                color: "#333333",
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#d9d9d9",
                                },
                            },
                            splitLine: {
                                show: false,
                            },
                        },
                        yAxis: {
                            type: 'value',
                            name: '利用率',
                            nameTextStyle: {
                                color: "#333333",
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#d9d9d9",
                                },
                            },
                            splitLine: {
                                show: false,
                            },
                        },
                        legend: {
                            show: true,
                            left: 20,
                            bottom: 0,
                        },
                        series: [
                            {
                                type: 'line',
                                name: "总数",
                                data: this.autoTotalList,
                                showSymbol: false,
                                lineStyle: {
                                    color: '#FF9E6F',
                                },
                                areaStyle: {
                                    color: 'rgb(255, 249, 246)',
                                    opacity: 1,
                                },
                            },
                        ],
                    };
                },

                //图表配置选项
                autoChartOption () {
                    return {
                        series: [
                            {
                                data: this.autoTotalList,
                            },
                        ],
                    };
                },
            //#endregion

            //#region 页面常量
            //#endregion

            //#region 页面数据转换
            //#endregion

            //#region 页面自动样式
                autoChartWarpStyle () {
                    return {
                        height: `${ this.height }px`,
                    };
                },
            //#endregion
        },
        methods: {
            //#region 页面事件方法
            //#endregion

            //#region 业务逻辑方法
                b_initChart () {
                    this.chartDom = this.$el.querySelector(".chartWarp");
                    this.chart = ECharts.init(this.chartDom);
                    this.chart.setOption(this.autoChartOptionTemplate);
                },

                b_updateChart () {
                    this.chart.setOption(this.autoChartOption);
                },
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
            this.b_initChart();
        },
        components: {

        },
    };
</script>

