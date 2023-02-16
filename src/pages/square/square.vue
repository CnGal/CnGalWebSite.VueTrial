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

	<gal-card class="card editOverviewChartCard">
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
			simplt
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
		<editOverviewChart ref="editChart"></editOverviewChart>
	</gal-card>

	<div class="info-wrapper">
		<gal-card class="card">
			<template v-slot:headerStart>
				<gal-icon class="icon" icon="homeFill"></gal-icon
				>&nbsp;&nbsp;CnGal资料站
			</template>
			<gal-link-button to="/about" width="full"
				><gal-icon class="icon" icon="homeFill"></gal-icon
				>关于我们</gal-link-button
			>
			<gal-link-button to="/structure" width="full"
				><gal-icon class="icon" icon="homeFill"></gal-icon
				>组织架构</gal-link-button
			>
			<gal-link-button to="/privacy" width="full"
				><gal-icon class="icon" icon="homeFill"></gal-icon
				>隐私政策</gal-link-button
			>
			<gal-link-button to="/data" width="full"
				><gal-icon class="icon" icon="homeFill"></gal-icon
				>数据汇总</gal-link-button
			>
		</gal-card>
		<gal-card class="card">
			<template v-slot:headerStart>
				<gal-icon class="icon" icon="homeFill"></gal-icon
				>&nbsp;&nbsp;标签
			</template>
			<gal-link-button to="/tags/index/1" width="full"
				><gal-icon class="icon" icon="homeFill"></gal-icon
				>游戏</gal-link-button
			>
			<gal-link-button to="/tags/index/2" width="full"
				><gal-icon class="icon" icon="homeFill"></gal-icon
				>角色</gal-link-button
			>
			<gal-link-button to="/tags/index/3" width="full"
				><gal-icon class="icon" icon="homeFill"></gal-icon
				>STAFF</gal-link-button
			>
			<gal-link-button to="/tags/index/4" width="full"
				><gal-icon class="icon" icon="homeFill"></gal-icon
				>制作组</gal-link-button
			>
		</gal-card>
	</div>

	<gal-card class="card lotteryCard">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="random"></gal-icon>&nbsp;&nbsp;抽奖
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/lotteries" class="link-button">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>
		<gal-no-wrap-game-list
			cardName="galNormalGameCard"
			type="lottery"
			:list="lotteryCardsList"
		></gal-no-wrap-game-list>
	</gal-card>

	<gal-card class="card voteCard">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="random"></gal-icon>&nbsp;&nbsp;投票
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/votes/home" class="link-button">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>
		<gal-no-wrap-game-list
			v-if="voteCardsList.length"
			cardName="galNormalGameCard"
			type="vote"
			:list="voteCardsList"
		></gal-no-wrap-game-list>
	</gal-card>
</template>

<script>
document.title = "广场 - CnGal 中文GalGame资料站";
</script>

<script setup>
import { ref, onMounted } from "vue";
import { getRandomUserScores } from "@/api/playedGamesAPI/index.js";
import { getLotteryCards } from "@/api/lotteryAPI/index.js";
import { getVoteCards } from "@/api/voteAPI/index.js";
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

const lotteryCardsList = ref([]);
(async () => {
	const { data } = await getLotteryCards();
	const isNow = data.filter(
		(item) => new Date(item.endTime).getTime() > Date.now()
	);

	if (isNow.length > (isSmallPage.value ? 6 : 12)) {
		lotteryCardsList.value = getNonRepeatRandomList(
			isNow,
			isSmallPage.value ? 6 : 12
		);
		return;
	} else {
		const isEnd = data.filter(
			(item) => new Date(item.endTime).getTime() <= Date.now()
		);
		lotteryCardsList.value = isNow.concat(
			getNonRepeatRandomList(
				isEnd,
				(isSmallPage.value ? 6 : 12) - isNow.length
			)
		);
		return;
	}
})();

const voteCardsList = ref([]);
(async () => {
	const { data } = await getVoteCards();
	voteCardsList.value = getNonRepeatRandomList(
		data,
		isSmallPage.value ? 6 : 12
	);
})();

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
.editOverviewChartCard,
.lotteryCard,
.voteCard {
	margin-block-start: 24px;
}
.refresh-button {
	--button-font-color: var(--main-color);
	border: none;
}

.editOverviewChartCard {
	text-align: right;
}

.info-wrapper {
	display: flex;
	margin-block-start: 24px;
	column-gap: 24px;
}
.info-wrapper > .card {
	flex: 1;
}
</style>
