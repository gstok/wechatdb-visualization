
<!--局部样式-->
<style scoped>
    .d3ChainGraph {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border: solid 1px #ececec;
        border-radius: 5px;
    }

    .tipsWarp {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.6);
        transition: background-color 1s;
        color: #2BAAFF;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }
    .tipCard {
        width: 320px;
        height: 220px;
        border: solid 1px #ddd;
        border-radius: 4px;
        font-size: 16px;
        text-align: center;
        line-height: 220px;
        background-color: white;
    }

    .detailWindow {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 250px;
        height: 400px;
        background: #FFFFFF;
        border: 1px solid #ECEDF0;
        border-radius: 4px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 10;
    }

    .detailWindow .seg1 {
        height: 36px;
        display: flex;
    }
    .detailWindow .seg1 > label {
        font-size: 16px;
        color: #333;
    }

    .detailWindow .seg2 {
        display: flex;
        align-items: center;
    }

    .detailWindow .seg2 > div {
        width: 3px;
        height: 14px;
        background: #2593DD;
        border-radius: 2px;
        margin-right: 6px;
    }
    .detailWindow .seg2 > span {
        font-size: 14px;
        color: #333;
    }

    .detailWindow .seg3 {
        height: 260px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .detailWindow .seg3 > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 30px;
        padding-right: 30px;
    }
    .detailWindow .seg3 .circleDev {
        width: 44px;
        height: 44px;
        border-radius: 22px;
        background: #D2EDFF;
        color: #2593DD;
        text-align: center;
        line-height: 44px;
        font-size: 14px;
        font-weight: bold;
    }
    .detailWindow .seg3 > div > ul {
        font-size: 12px;
        margin-left: 43px;
        font-weight: bold;
    }

    .detailWindow .seg4 {
        display: flex;
        justify-content: flex-end;
    }
</style>

<!--全局局部覆盖样式-->
<style>
    .d3ChainGraph .g {
        position: relative;
    }

    .d3ChainGraph .node {
        position: absolute;
        z-index: 2;
        width: 140px;
        height: 82px;
        padding: 4px;
        cursor: pointer;
        background: linear-gradient(27deg, rgba(80, 176, 255, 1) 0%, rgba(107, 226, 255, 1) 100%);
        box-shadow: 0px 0px 6px 0px rgba(80, 176, 255, 0.6);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .d3ChainGraph .node.error {
        background: linear-gradient(-60deg, rgb(233, 58, 58) 0%, rgb(241, 151, 151) 100%);
        box-shadow: 0px 0px 6px 0px rgba(233, 58, 58, 0.6);
    }
    /* .d3ChainGraph .node.userNode {
        background: linear-gradient(-60deg, rgb(233, 58, 58) 0%, rgb(241, 151, 151) 100%);
        box-shadow: 0px 0px 6px 0px rgba(233, 58, 58, 0.6);
    } */
    .d3ChainGraph .node.warning {
        background: linear-gradient(-60deg, rgb(226, 180, 30) 0%, rgb(230, 215, 169) 100%);
        box-shadow: 0px 0px 6px 0px rgba(226, 180, 30, 0.6);
    }
    .d3ChainGraph .node.userNode {
        box-shadow: 0px 0px 6px 0px rgba(25, 147, 247, 0.6);
        background: white;
        border: solid 3px rgb(25, 147, 247);
        border-radius: 40px;
        padding-top: 10px;
        padding-bottom: 6px;
        color: rgb(25, 147, 247);
    }
    .d3ChainGraph .node > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 36px;
        min-height: 36px;
    }
    .d3ChainGraph .node > div:first-child > img {
        width: 36px;
        min-width: 36px;
        height: 36px;
    }
    .d3ChainGraph .node > div:first-child > div {
        width: 96px;
        height: 36px;
        font-size: 12px;
        padding-left: 6px;
        color: white;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all; 
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .d3ChainGraph .node > div:last-child {
        margin-top: 2px;
        height: 100%;
        width: 100%;
        min-width: 100%;
        background: rgba(255, 255, 255, 0.8);
        font-size: 12px;
        padding: 0px 2px 0px 2px;
        overflow-y: auto;
        color: #666;
    }

    .d3ChainGraph .linkInfo {
        width: 24px;
        height: 24px;
        z-index: 3;
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
    }
    .d3ChainGraph .linkInfo > div {
        background-color: white;
        font-size: 18px;
        font-weight: bold;
        min-width: 16px;
        text-align: center;
    }
    .d3ChainGraph .linkInfo > i {
        font-size: 26px;
        color: #4586AF;
        transform: rotate(-90deg);
    }
    .userImg {
        height: 36px;
    }
</style>

<template>
    <div @mousemove="handleMouseMove" class="d3ChainGraph">
        <div class="gWarp">
            <div class="g"></div>
        </div>
        <div @click.stop=";" v-if="winShow" class="detailWindow" :style="autoWinStyle">
            <div>
                <div class="seg1">
                    <label>{{ name }}</label>
                </div>
                <div class="seg2">
                    <div></div>
                    <label>指标</label>
                </div>
            </div>
            <div class="seg3">
                <div>
                    <div class="circleDev">CPU</div>
                    <ul>
                        <li>
                            <span>最小：{{ mixMF.percentStr(detail.cpu[2], 2) }}</span>
                        </li>
                        <li>
                            <span>平均：{{ mixMF.percentStr(detail.cpu[0], 2) }}</span>
                        </li>
                        <li>
                            <span>最大：{{ mixMF.percentStr(detail.cpu[1], 2) }}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="circleDev">内存</div>
                    <ul>
                        <li>
                            <span>最小：{{ mixMF.percentStr(detail.mem[2], 2) }}</span>
                        </li>
                        <li>
                            <span>平均：{{ mixMF.percentStr(detail.mem[0], 2) }}</span>
                        </li>
                        <li>
                            <span>最大：{{ mixMF.percentStr(detail.mem[1], 2) }}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="circleDev">网络</div>
                    <ul>
                        <li>
                            <span>发送：{{ detail.net[16] }}</span>
                        </li>
                        <li>
                            <span>接收：{{ detail.net[12] }}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="circleDev">磁盘</div>
                    <ul>
                        <li>
                            <span>读：{{ detail.disk[3] }}</span>
                        </li>
                        <li>
                            <span>写：{{ detail.disk[6] }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="seg4">
                <a @click="handleJmpClick" href="javascript:;">查看详细指标</a>
            </div>
        </div>
        <div @click="myShow = false" v-show="myShow" class="tipsWarp">
            <div class="tipCard">
                点击响应时间图表中的点可查看调用详情
            </div>
        </div>
    </div>
</template>

<script>
    import http from "../../http.js";
    import * as d3 from "d3";
    let $this;

    export default {
        name: "d3ChainGraph",
        props: {
            //层间距
            layerSpace: {
                type: Number,
                default: 200,
            },
            //节点间距
            nodeSpace: {
                type: Number,
                default: 200,
            },
            //簇间距
            clusterSpace: {
                type: Number,
                default: 300,
            },
            defaultImg: {
                type: String,
                default: "data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDuEEAg7hBAIO4QSWDuEEgg7hBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg7hBAIO4QQiDuEGlg7hBmIO4QQSDuEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg7hBAIO4QQCDuEFQg7hB9IO4Qe6DuEFDg7hBAIO4QQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIO4QQCDuEEUg7hBwYO4Qf+DuEH/g7hBtIO4QQ2DuEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIO4QQCDuEEAg7hBb4O4QfyDuUH/g7lB/4O4QfmDuEFgg7hBAIO4QQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDuEEAg7hBJoO4QdmDuUH/f6tA/3+tQP+DuUH/g7hBzoO4QR2DuEEAAAAAAAAAAAAAAAAAAAAAAAAAAACDuEEAg7hBA4O4QY+DuEH/grZB/2xzOv9ueTr/g7dB/4O4Qf+DuEGAg7hBAIO4QQAAAAAAAAAAAAAAAACDuEEAg7hBAIO4QT6DuEHrhLpB/3mYPv9gTjb/YVE2/3qePv+DuUH/g7hB44O4QTKDuEEAg7hBAAAAAAAAAAAAg7hBAIO4QQuDuEGvg7lB/4GxQP9oZjj/XUc1/11HNf9qbDn/grRB/4O4Qf+DuEGhg7hBB4O4QQAAAAAAg7hBAIO4QQCDuEFbg7hB94O5Qf90izz/Xko1/15JNf5eSTX+X0w1/3aRPf+DuUH/g7hB8oO4QU2DuEEAg7hBAIO4QQCDuEEZg7hByoO5Qf9+qkD/ZFs3/15INf9eSjW/Xko1xl5INf9mYDj/gK5A/4O5Qf+DuEG+g7hBEoO4QQCDuEEAg7hBe4O4Qf6Dt0H/b3w7/15INf9eSTXtX0s1P19LNUxeSTXzXkk1/3GDO/+DuEH/g7hB/IO4QWyDuEEAg7hBKIO4QciDuUHpfKM/52JUNudeSDXqXko1jmFRNgNgTjYHXko1m15INepjWDfnfqg/54O5QeqDuEG+g7hBHoO4QQ6DuEEmhLpBJnWNPCZdRzUmXkk1Jl9KNQ9eSTUAXUc1AF9KNRFeSTUnXkk1JneUPSaEukEmg7hBJoO4QQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP5/AAD8PwAA/D8AAPgfAAD4HwAA8A8AAOAPAADgBwAAwAMAAMADAACAAQAAgAEAAAAAAAABgAAA//8AAA==",
            },
            showTip: {
                type: Boolean,
                default: false,
            },
        },
        data () {
            return {
                graphData: "",

                $d_graph: null,
                $d_gWarp: null,
                $d_g: null,

                myShow: this.showTip,
                winShow: false,
                winTop: 0,
                winLeft: 0,
                detail: { },
                name: "",
                offsetX: 0,
                offsetY: 0,
            };
        },
        watch: {
            tree (nv) {
                this.updateGraph();
            },
            showTip (nv) {
                this.myShow = nv;
            },
        },
        computed: {
            autoNodeSize () {
                return {
                    width: 140,
                    height: 82,
                };
            },

            autoTree () {
                return {
                    name: "用户",
                    img: null,
                    type: "USER",
                    children: [
                        this.tree,
                    ],
                };
            },

            autoWinStyle () {
                let $detailWindow = $(this.$el.querySelector(".detailWindow"));
                let width = 250;
                let height = 400;
                let $me = $(this.$el);
                let meWidth = $me.width();
                let meHeight = $me.height();
                // console.log(width, height, meWidth, meHeight);
                let top = this.winTop;
                if (top < 0) {
                    top = 0;
                }
                if (top + height > meHeight) {
                    top = meHeight - height;
                }
                let left = this.winLeft;
                if (left < 0) {
                    left = 0;
                }
                if (left + width > meWidth) {
                    left = meWidth - width;
                }
                return {
                    top: `${ top }px`,
                    left: `${ left }px`,
                };
            },
        },
        methods: {
            //#region 布局算法
                //通过分析父节点确定节点的深度
                getDeep (node, graph) {
                    let callers = graph.links
                                    .filter(link => link.to == node.key)
                                    .map(link => {
                                        return graph.nodes.find(node => node.key == link.from);
                                    });
                    if (callers.length < 1) {
                        return 0;
                    }
                    else {
                        let callerDeepList = callers.map(caller => {
                            if (caller.deep) {
                                return caller.deep;
                            }
                            else {
                                return caller.deep = this.getDeep(caller, graph);
                            }
                        });
                        return Math.max(...callerDeepList) + 1;
                    }
                },

                //构建层次
                buildLayers (nodes) {
                    let length = Math.max(...nodes.map(node => node.deep)) + 1;
                    let layers = [];
                    for (let i = 0; i < length; ++i) {
                        layers[i] = {
                            nodes: nodes.filter(node => node.deep == i)
                        };
                    }
                    return layers;
                },

                //获取链接类型，普通链接，本地链接，反向链接，跨域链接
                setLinkType (link, nodes) {
                    let fromNode = nodes.find(node => node.key == link.from);
                    link.fromDeep = fromNode.deep;
                    let toNode = nodes.find(node => node.key == link.to);
                    link.toDeep = toNode.deep;
                    let type = "";
                    if (link.toDeep == link.fromDeep) {
                        type += "local ";
                    }
                    if (link.toDeep < link.fromDeep) {
                        type += "reverse ";
                    }
                    if (Math.abs(link.toDeep - link.fromDeep) > 1) {
                        type += "cross ";
                    }
                    type = type.trim();
                    link.type = type;
                },

                //构建簇信息
                buildCluster (layers, links) {
                    layers.forEach((layer, index) => {
                        if (index < 1) {
                            layer.clusters = [ {
                                nodes: layer.nodes,
                            } ];
                        }
                        else {
                            let nodes = layer.nodes;
                            let layerLinks= links.filter(link => {
                                let index = nodes.findIndex(node => link.to == node.key);
                                return index > -1;
                            });
                            let clusterKeys = layerLinks.map(link => link.from);
                            //计算出簇名
                            clusterKeys = Array.from(new Set(clusterKeys));
                            let clusters = clusterKeys.map(key => {
                                let cnodes = layerLinks
                                                .filter(link => link.from == key)
                                                .map(link => {
                                                    let node = nodes.find(node => node.key == link.to);
                                                    return node;
                                                });
                                return {
                                    key: key,
                                    nodes: cnodes,
                                };
                            });
                            layer.clusters = clusters;
                        }
                    });
                },

                //设置层高
                setLayerHeight (layers) {
                    layers.forEach(layer => {
                        let clusterSpaceHeight = (layer.clusters.length - 1) * this.clusterSpace;
                        let nodeSpaceHeight = (layer.nodes.length - 1 - (layer.clusters.length - 1)) * this.nodeSpace;
                        layer.height = clusterSpaceHeight + nodeSpaceHeight;
                    });
                },

                graphLayers (graphData) {
                    let graph = {
                        links: graphData.linkDataArray.map(link => {
                            return {
                                from: link.from,
                                to: link.to,
                                pptData: link,
                            };
                        }),
                        nodes: graphData.nodeDataArray.map(node => {
                            return {
                                key: node.key,
                                pptData: node,     
                            }
                        }),
                    };
                    //计算节点纵深
                    graph.nodes.forEach(node => {
                        if (node.deep === undefined) {
                            node.deep = this.getDeep(node, graph);
                        }
                    });
                    //构建节点层次
                    graph.layers = this.buildLayers(graph.nodes);
                    //分析链接类型
                    graph.links.forEach(link => {
                        this.setLinkType(link, graph.nodes);
                    });
                    this.buildCluster(graph.layers, graph.links);
                    this.setLayerHeight(graph.layers);

                    graph.width = (graph.layers.length - 1) * this.layerSpace;
                    graph.height = Math.max(...graph.layers.map(layer => layer.height));
                    
                    this.nodeMap(graph);
                    this.linkMap(graph);

                    return graph;
                },

                nodeMap (graph) {
                    graph.layers.forEach((layer, layerIndex) => {
                        let x = layerIndex * this.layerSpace;
                        let y = (graph.height - layer.height) / 2;
                        layer.clusters.forEach(cluster => {
                            cluster.nodes.forEach((node, nodeIndex) => {
                                if (!node.pos) {
                                    node.pos = {
                                        x: x,
                                        y: y,
                                    };
                                    if (nodeIndex < cluster.nodes.length - 1) {
                                        y += this.nodeSpace;
                                    }
                                }
                            });
                            y += this.clusterSpace;
                        });
                    });
                },

                linkMap (graph) {
                    graph.links.forEach(link => {
                        let fromNode = graph.nodes.find(node => node.key == link.from);
                        let toNode = graph.nodes.find(node => node.key == link.to);
                        link.fromPos = fromNode.pos;
                        link.toPos = toNode.pos;
                    });
                },
            //#endregion

            handleMouseMove (e) {
                let top = $(this.$el).offset().top;
                let left = $(this.$el).offset().left;
                this.offsetX = e.clientX - left;
                this.offsetY = e.clientY - top;
                // console.log(this.offsetX, this.offsetY);
            },

            nodeHtml (img, info1, info2) {
                return `
                    <div>
                        <img src="${ img || this.defaultImg }" />
                        <div>${ info1 }</div>
                    </div>
                    <div>${ info2 }</div>
                `;
            },

            nodeHtml2 (img, info1) {
                return `
                    <img class='userImg' src="${ img || this.defaultImg }" />
                    <span>${ info1 }</span>
                `;
            },

            lineStyleStr (x1, y1, x2, y2, lineWidth = 4, color = 'black') {
                let rectX = x1 < x2 ? x1 : x2;
                let rectY = y1 < y2 ? y1 : y2;
                let rectWidth = Math.abs(x1 - x2);
                let rectHeight = Math.abs(y1 - y2);
                //弦长
                let stringWidth = Math.ceil(Math.sqrt((rectWidth * rectWidth) + (rectHeight * rectHeight)));
                let xPad = (rectWidth - stringWidth) / 2;
                let yPad = (rectHeight - lineWidth) / 2;
                let radNum = Math.atan2((y1 - y2), (x1 - x2));
                return `
                    position: absolute;
                    z-index: 1;
                    width: ${ stringWidth }px;
                    height: ${ lineWidth }px;
                    background-color: ${ color };
                    transform: translate(${ rectX + xPad }px, ${ rectY + yPad }px) rotate(${ radNum }rad);
                `;
            },

            graphZoomed () {
                this.$d_gWarp.attr("style", `
                    transform: scale(${ d3.event.transform.k }) translate(${ d3.event.transform.x }px, ${ d3.event.transform.y }px);
                    transform-origin: 50% 50%;
                `);
            },

            initGraph () {
                let zoom = d3.zoom().on("zoom", this.graphZoomed);
                this.$d_graph = d3.select(this.$el).call(zoom);
                this.$d_gWarp = this.$d_graph.select(".gWarp");
                this.$d_g = this.$d_graph.select(".g");
                this.updateGraph();
            },

            updateGraph () {
                this.$d_graph
                    .select(".g")
                    .attr("style", `width: ${ this.graphData.width }px;height: ${ this.graphData.height }px`);
                this.$d_g.selectAll("*").remove();
                this.updateNode();
                this.updateLink();
                this.updateLinkInfo();
            },

            updateNode () {
                // function dragged (d) {
                //     d3
                //         .select(this)
                //         .attr("style", d => {
                //             d.y = d3.event.y;
                //             d.x = d3.event.x;
                //             return `transform: translate(${ d3.event.x - $this.autoNodeSize.width / 2 }px, ${ d3.event.y - $this.autoNodeSize.height / 2 }px);`;
                //         })
                //     $this.updateLink();
                //     $this.updateLinkInfo();
                // }

                let updater = this.$d_g.selectAll(".node").data(this.graphData.nodes);
                console.log(updater);
                updater
                    .enter()
                    .append("div")
                    .attr("class", "node")
                    .attr("style", d => {
                        return `transform: translate(${ d.pos.x - this.autoNodeSize.width / 2 }px, ${ d.pos.y - this.autoNodeSize.height / 2 }px);`;
                    })
                    .html(d => {
                        if (true || d.data.type != "USER") {
                            return this.nodeHtml(null, d.pptData.applicationName, "状态：正常<br/>调用数：1");
                        }
                        else {
                            return this.nodeHtml2(d.data.img, d.data.name || "");
                        }
                    })
                    .on("click", d => {
                        this.winTop = this.offsetY;
                        this.winLeft = this.offsetX;
                        let name = d.pptData.applicationName;
                        this.b_updateDetailData(name);
                    })
            },

            updateLink () {
                let updater = this.$d_g.selectAll(".link").data(this.graphData.links.filter(link => !link.type));
                updater
                    .enter()
                    .append("div")
                    .attr("class", "link")
                    .attr("style", d => {
                        return this.lineStyleStr(
                            d.fromPos.x,
                            d.fromPos.y,
                            d.toPos.x,
                            d.toPos.y,
                            3,
                            "#4586AF"
                        );
                    });
                updater
                    .attr("style", d => {
                        return this.lineStyleStr(
                            d.fromPos.x,
                            d.fromPos.y,
                            d.toPos.x,
                            d.toPos.y,
                            4,
                            "#4586AF"
                        );
                    });
            },

            updateLinkInfo () {
                let updater = this.$d_g.selectAll(".linkInfo").data(this.graphData.links.filter(link => !link.type));
                updater
                    .enter()
                    .append("div")
                    .attr("class", "linkInfo")
                    .html(d => {
                        return `<div>${ d.pptData.totalCount || 0 }</div><i class='icon icon-downarrow downIcon'></i>`;
                    })
                    .attr("style", d => {
                        let x1 = d.fromPos.x;
                        let y1 = d.fromPos.y;
                        let x2 = d.toPos.x;
                        let y2 = d.toPos.y;
                        let radNum = Math.atan2((y1 - y2), (x1 - x2));
                        return `
                            position: absolute;
                            transform: translate(${ (x1 + x2) / 2 - 12 }px, ${ (y1 + y2) / 2 - 12 }px) rotate(${ radNum - (Math.PI / 2) * 2 }rad);
                        `;
                    });
                updater
                    .attr("style", d => {
                        let x1 = d.fromPos.x;
                        let y1 = d.fromPos.y;
                        let x2 = d.toPos.x;
                        let y2 = d.toPos.y;
                        let radNum = Math.atan2((y1 - y2), (x1 - x2));
                        return `
                            position: absolute;
                            transform: translate(${ (x1 + x2) / 2 - 12 }px, ${ (y1 + y2) / 2 - 12 }px) rotate(${ radNum - (Math.PI / 2) * 2 }rad);
                        `;
                    });
            },

            async b_updateDetailData (name) {
                let jsonStr = localStorage.userInfo;
                let jsonObj = JSON.parse(jsonStr);
                if (jsonObj.bid == "null") {
                    jsonObj.bid = null;
                }
                if (jsonObj.uid == "null") {
                    jsonObj.uid = null;
                }
                let params = {
                    uid: jsonObj.bid || jsonObj.uid,
                    metricTypes: ["cpu", "mem", "disk", "net"],
                    dataType: "CLUSTER",
                    names: [name],
                };
                let result = await this.i_getDetailData(params);
                if (result) {
                    let list = MF.KVList(result);
                    this.name = list[0].key;
                    this.detail = list[0].value;
                    // console.log(this.detail);
                    this.winShow = true;
                }
            },

            async i_getDetailData (params) {
                let reqUrl = "/api/xsky/sys/monitor/real/last/byName";
                let response = await this.$post(reqUrl, params)
                if (response.success) {
                    return response.object;
                }
                else {
                    return null;
                }
            },

            handleJmpClick () {
                this.$emit("jmp");
            },
        },
        created () {
            $this = this;
        },
        async mounted () {
            let result = await http.$get("/api/pingpoint/transactionInfo.pinpoint?agentId=277522814263623680&spanId=-5058001156860769893&traceId=277522814263623680%5E1544096192747%5E76985&focusTimestamp=1544156543997&_=1544158679901");
            let mapData = result.applicationMapData;
            this.graphData = this.graphLayers(mapData);
            console.log(this.graphData.nodes);
            this.initGraph();
            $(document).click(() => {
                this.winShow = false;
            }); 
        },
        components: {

        },
    };
</script>

