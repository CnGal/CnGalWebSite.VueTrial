<template>
	<gal-card class="card">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="random"></gal-icon>&nbsp;&nbsp;随机推荐
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/" class="link-button">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>
		<gal-no-wrap-game-list
			type="article"
			cardName="galNormalGameCard"
			:list="randomArticles"
			v-if="!isMobile"
		></gal-no-wrap-game-list>
		<gal-refresh-game-card-list
			v-else
			cardName="galNormalGameCard"
			:data="randomArticles"
			:changeData="changeRandomArticles"
			refreshText="换一组文章"
		></gal-refresh-game-card-list>
	</gal-card>

	<gal-card class="card">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="newspaper"></gal-icon
			>&nbsp;&nbsp;CnGal每周速报
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/" class="link-button">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>
		<gal-no-wrap-game-list
			type="article"
			cardName="galNormalGameCard"
			:list="weeklyNewsOverview"
			v-if="!isMobile"
		></gal-no-wrap-game-list>
		<gal-refresh-game-card-list
			v-else
			cardName="galNormalGameCard"
			:data="weeklyNewsOverview"
		></gal-refresh-game-card-list>
	</gal-card>
	<galArticlesGameEvaluationCardList
		class="card"
		:list="gameEvaluations"
		v-if="!isMobile"
	></galArticlesGameEvaluationCardList>
</template>

<script setup>
import { ref } from "vue";
import {
	getRandomArticles,
	getWeeklyNewsOverview,
	getGameEvaluations
} from "../../api/articlesAPI/index.js";
import { getNonRepeatRandomList } from "../../assets/common/js/random.js";

import { useStore } from "../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

let normalShowCardCount = isMobile ? 2 : 12;

// 获取随机推荐
const randomArticles = ref([]);
const allRandomArticles = ref([]);
(async () => {
	const { data } = await getRandomArticles();
	randomArticles.value = getNonRepeatRandomList(data, normalShowCardCount);
	allRandomArticles.value = data;
})();
const changeRandomArticles = () => {
	randomArticles.value = getNonRepeatRandomList(
		allRandomArticles.value,
		normalShowCardCount
	);
};

// 获取 CnGal每周速报
const weeklyNewsOverview = ref([]);
(async () => {
	const { data } = await getWeeklyNewsOverview();
	if (isMobile) {
		normalShowCardCount = 3;
	}
	weeklyNewsOverview.value = getNonRepeatRandomList(
		data,
		normalShowCardCount
	);
})();

// 获取游戏评测
const gameEvaluations = ref([]);
(async () => {
	const { data } = await getGameEvaluations();
	gameEvaluations.value = getNonRepeatRandomList(data, 2);
})();
</script>

<style scoped>
.card {
	margin-block-start: 16px;
}
</style>
