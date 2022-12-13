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
</template>

<script>
document.title = "广场 - CnGal 中文GalGame资料站";
</script>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { getRandomUserScores } from "@/api/playedGamesAPI/index.js";
import { getNonRepeatRandomList } from "@/assets/common/js/random.js";

const isSmallPage = ref(false);
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

const pageWidthChange = () => {
	isSmallPage.value = window.innerWidth < 768;
};

onMounted(() => {
	pageWidthChange();
	window.addEventListener("resize", pageWidthChange);
});
</script>

<style scoped>
.refresh-button {
	--button-font-color: var(--main-color);
	border: none;
}
</style>
