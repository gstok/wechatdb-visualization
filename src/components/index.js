
import dayChatLine from "./charts/dayChatLine";
import d3ChainGraph from "./charts/d3ChainGraph.vue";

const coms = {
    install: Vue => {
        Vue.component("dayChatLine", dayChatLine);
        Vue.component("d3ChainGraph", d3ChainGraph);
    },
};

export default coms;
