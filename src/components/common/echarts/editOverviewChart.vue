<template>
	<div class="charts" ref="charts"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { getPerfectionLineChart } from "@/api/perfectionAPI/index.js";
import * as echarts from "echarts/core";
import {
	TooltipComponent,
	GridComponent,
	LegendComponent,
	TitleComponent
} from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
	TooltipComponent,
	GridComponent,
	LegendComponent,
	BarChart,
	CanvasRenderer,
	TitleComponent
]);

const charts = ref(null);
let myChart = null;
const PerfectionLineChartData = ref(null);

const refreshChartData = async (params) => {
	const { data } = await getPerfectionLineChart(params);
	data.options.series = data.options.series.map((item) => {
		item.type = "bar";
		item.stack = "default";
		return item;
	});
	PerfectionLineChartData.value = data;
	myChart.setOption(PerfectionLineChartData.value.options);
};

const echartsResize = () => {
	myChart.resize();
};

onMounted(() => {
	myChart = echarts.init(charts.value);

	window.addEventListener("resize", echartsResize);
});
onUnmounted(() => {
	window.removeEventListener("resize", echartsResize);
});

defineExpose({
	refreshChartData
});
</script>

<style scoped>
.charts {
	width: 100%;
	height: 400px;
}
</style>
