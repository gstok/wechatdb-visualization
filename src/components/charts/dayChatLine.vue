
<!--局部样式-->
<style scoped>
    .Chart {
        display: inline-block;
        position: relative;
        width: 100%;
    }

    .chartWarp {
        color: rgba(255, 192, 203, 0.788);
        color: rgba(43, 170, 255, 0.5);
        color: rgba(255, 166, 0, 0.616);
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
    import http from "../../http.js";

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
                    //统计数据列表
                    statisticsList: [],
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
                            type: "time",
                            name: "日期",
                            nameTextStyle: {
                                color: "#333333",
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                show: true,
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
                            type: "value",
                            name: "聊天数",
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
                                type: "line",
                                name: "发送",
                                data: this.autoStatisticsData.send,
                                showSymbol: false,
                                lineStyle: {
                                    color: "rgb(255, 166, 0)",
                                },
                                areaStyle: {
                                    color: "rgba(255, 166, 0, 0.1)",
                                    opacity: 1,
                                },
                                smooth: true,
                            },
                            {
                                type: "line",
                                name: "接收",
                                data: this.autoStatisticsData.send,
                                showSymbol: false,
                                lineStyle: {
                                    color: "rgb(255, 192, 203)",
                                },
                                areaStyle: {
                                    color: "rgba(255, 192, 203, 0.1)",
                                    opacity: 1,
                                },
                                smooth: true,
                            },
                            {
                                type: "line",
                                name: "全部",
                                data: this.autoStatisticsData.send,
                                showSymbol: false,
                                lineStyle: {
                                    color: "rgb(43, 170, 255)",
                                },
                                areaStyle: {
                                    color: "rgba(43, 170, 255, 0.1)",
                                    opacity: 1,
                                },
                                smooth: true,
                            },
                        ],
                    };
                },

                //图表配置选项
                autoChartOption () {
                    return {
                        series: [
                            {
                                data: this.autoStatisticsData.send,
                            },
                            {
                                data: this.autoStatisticsData.receive,
                            },
                            {
                                data: this.autoStatisticsData.total,
                            },
                        ],
                    };
                },
            //#endregion

            //#region 页面常量
                autoData () {
                    let str = `
                        2018-07-01	0
                        2018-07-02	0
                        2018-07-03	0
                        2018-07-04	0
                        2018-07-05	0
                        2018-07-06	0
                        2018-07-07	17
                        2018-07-08	521
                        2018-07-09	548
                        2018-07-10	412
                        2018-07-11	356
                        2018-07-12	285
                        2018-07-13	206
                        2018-07-14	773
                        2018-07-15	676
                        2018-07-16	429
                        2018-07-17	259
                        2018-07-18	90
                        2018-07-19	535
                        2018-07-20	283
                        2018-07-21	514
                        2018-07-22	809
                        2018-07-23	673
                        2018-07-24	1598
                        2018-07-25	1036
                        2018-07-26	709
                        2018-07-27	800
                        2018-07-28	13
                        2018-07-29	258
                        2018-07-30	572
                        2018-07-31	389
                        2018-08-01	667
                        2018-08-02	707
                        2018-08-03	492
                        2018-08-04	92
                        2018-08-05	353
                        2018-08-06	196
                        2018-08-07	144
                        2018-08-08	166
                        2018-08-09	330
                        2018-08-10	571
                        2018-08-11	353
                        2018-08-12	414
                        2018-08-13	130
                        2018-08-14	245
                        2018-08-15	590
                        2018-08-16	219
                        2018-08-17	12
                        2018-08-18	48
                        2018-08-19	41
                        2018-08-20	54
                        2018-08-21	198
                        2018-08-22	423
                        2018-08-23	1053
                        2018-08-24	947
                        2018-08-25	414
                        2018-08-26	215
                        2018-08-27	390
                        2018-08-28	277
                        2018-08-29	404
                        2018-08-30	126
                        2018-08-31	274
                        2018-09-01	11
                        2018-09-02	2
                        2018-09-03	568
                        2018-09-04	1124
                        2018-09-05	218
                        2018-09-06	465
                        2018-09-07	306
                        2018-09-08	743
                        2018-09-09	688
                        2018-09-10	588
                        2018-09-11	733
                        2018-09-12	393
                        2018-09-13	283
                        2018-09-14	370
                        2018-09-15	152
                        2018-09-16	369
                        2018-09-17	298
                        2018-09-18	406
                        2018-09-19	349
                        2018-09-20	393
                        2018-09-21	561
                        2018-09-22	292
                        2018-09-23	195
                        2018-09-24	122
                        2018-09-25	276
                        2018-09-26	398
                        2018-09-27	300
                        2018-09-28	479
                        2018-09-29	260
                        2018-09-30	282
                        2018-10-01	624
                        2018-10-02	613
                        2018-10-03	341
                        2018-10-04	513
                        2018-10-05	34
                        2018-10-06	342
                        2018-10-07	148
                        2018-10-08	424
                        2018-10-09	186
                        2018-10-10	130
                        2018-10-11	835
                        2018-10-12	575
                        2018-10-13	196
                        2018-10-14	388
                        2018-10-15	383
                        2018-10-16	313
                        2018-10-17	532
                        2018-10-18	290
                        2018-10-19	283
                        2018-10-20	507
                        2018-10-21	504
                        2018-10-22	909
                        2018-10-23	479
                        2018-10-24	496
                        2018-10-25	533
                        2018-10-26	455
                        2018-10-27	179
                        2018-10-28	190
                        2018-10-29	134
                        2018-10-30	553
                        2018-10-31	528
                        2018-11-01	308
                        2018-11-02	257
                        2018-11-03	151
                        2018-11-04	208
                        2018-11-05	200
                        2018-11-06	467
                        2018-11-07	487
                        2018-11-08	268
                        2018-11-09	370
                        2018-11-10	127
                        2018-11-11	334
                        2018-11-12	175
                        2018-11-13	248
                        2018-11-14	299
                        2018-11-15	175
                        2018-11-16	184
                        2018-11-17	133
                        2018-11-18	484
                        2018-11-19	67
                        2018-11-20	0
                    `;
                    let strSegs = str.split("\n")
                                    .map(str => str.trim())
                                    .filter(str => str.length > 0)
                                    .map(str => {
                                        let segs = str.split("	");
                                        return [
                                            segs[0],
                                            Number(segs[1]),
                                        ];
                                    });
                    return strSegs;
                },

                autoStatisticsData () {
                    return {
                        send: this.statisticsList.map(item => [item.date, item.send]),
                        receive: this.statisticsList.map(item => [item.date, item.receive]),
                        total: this.statisticsList.map(item => [item.date, item.total]),
                    };
                },

                autoTotalList () {
                    return this.autoData;
                },
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

                async b_updateDayStatistics () {
                    let params = {
                        myid: 777,
                        talker: "wxid_gzbhvp2n0lo722",
                        type: null,
                        keyword: "",
                        start: "2018-07-01",
                        end: "2018-12-06"
                    };
                    let result = await this.i_getDayStatistics(params);
                    if (result) {
                        this.statisticsList = result;
                    }
                },
            //#endregion

            //#region 接口访问方法
                async i_getDayStatistics (params) {
                    let reqUrl = "/api/dayStatistics";
                    let response = await http.$post(reqUrl, params);
                    if (response.code == 200) {
                        return response.data;
                    }
                    else {
                        return null;
                    }
                },
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
        async mounted () {
            this.b_initChart();
            this.b_updateDayStatistics();
        },
        components: {

        },
    };
</script>

