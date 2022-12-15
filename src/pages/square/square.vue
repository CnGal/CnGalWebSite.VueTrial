<template>
	<gal-card class="card">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="random"></gal-icon>&nbsp;&nbsp;随机评价
		</template>
		<template v-slot:headerEnd>
			<gal-button class="refresh-button" @click="refreshUserScoresList">
				<gal-icon icon="refresh"></gal-icon>换一批
			</gal-button>
		</template>
		<gal-no-wrap-game-list
			cardName="galUserScoresCard"
			:list="userScoresList"
		></gal-no-wrap-game-list>
	</gal-card>

	<gal-card class="card editOverviewChartCard" width="full">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="random"></gal-icon>&nbsp;&nbsp;编辑概览
		</template>
		<template v-slot:headerEnd>
			<gal-button class="refresh-button">
				<gal-icon icon="refresh"></gal-icon>查看编辑指引
			</gal-button>
		</template>
		<gal-dropdown
			width="100px"
			:style="{
				'margin-inline-start': 'auto',
				'margin-inline-end': '24px'
			}"
			@itemSelect="dropdownItemSelectEvent"
		>
			<gal-option :time="getLastTime(nowTime, { day: 15 })"
				>15天</gal-option
			>
			<gal-option
				:selected="true"
				:time="getLastTime(nowTime, { month: 1 })"
				>1个月</gal-option
			>
			<gal-option :time="getLastTime(nowTime, { month: 3 })"
				>3个月</gal-option
			>
			<gal-option :time="getLastTime(nowTime, { month: 6 })"
				>6个月</gal-option
			>
			<gal-option :time="getLastTime(nowTime, { year: 1 })"
				>一年</gal-option
			>
			<gal-option :time="0">所有</gal-option>
		</gal-dropdown>
		<Suspense>
			<editOverviewChart ref="editChart"></editOverviewChart>
		</Suspense>
	</gal-card>
</template>

<script>
document.title = "广场 - CnGal 中文GalGame资料站";
</script>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { getRandomUserScores } from "@/api/playedGamesAPI/index.js";
import { getNonRepeatRandomList } from "@/assets/common/js/random.js";
import { getLastTime } from "@/assets/common/js/formatDate.js";
import editOverviewChart from "../../components/common/echarts/editOverviewChart.vue";

const nowTime = Date.now();
const isSmallPage = ref(false);
const editChart = ref(null);
const userScoresList = ref([]);
const userScoresListCount = ref([]);
(async () => {
	const { data } = await getRandomUserScores();
	userScoresListCount.value = data;
	refreshUserScoresList();
})();

const refreshUserScoresList = () => {
	userScoresList.value = getNonRepeatRandomList(
		userScoresListCount.value,
		isSmallPage.value ? 6 : 12
	);
};

const dropdownItemSelectEvent = (item) => {
	editChart.value.refreshChartData({
		type: 9,
		afterTime: item.getAttribute("time"),
		beforeTime: nowTime
	});
};
const initChart = () => {
	editChart.value.refreshChartData({
		type: 9,
		afterTime: getLastTime(nowTime, { month: 1 }),
		beforeTime: nowTime
	});
};

const pageWidthChange = () => {
	isSmallPage.value = window.innerWidth < 768;
};

onMounted(() => {
	pageWidthChange();
	initChart();
	window.addEventListener("resize", pageWidthChange);
});
</script>

<style scoped>
.refresh-button {
	--button-font-color: var(--main-color);
	border: none;
}
</style>
