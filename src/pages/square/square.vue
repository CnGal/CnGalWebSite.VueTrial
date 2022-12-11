<template>
	<gal-card class="card">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="gift"></gal-icon>&nbsp;&nbsp;随机评价
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/" class="link-button">
				<gal-icon icon="shareAll"></gal-icon>换一批
			</gal-link-button>
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

const isSmallPage = ref(false);
const userScoresList = ref([]);
(async () => {
	const { data } = await getRandomUserScores();
	userScoresList.value = data.splice(0, isSmallPage.value ? 6 : 12);
})();

const pageWidthChange = () => {
	isSmallPage.value = window.innerWidth < 768;
};

onMounted(() => {
	pageWidthChange();
	window.addEventListener("resize", pageWidthChange);
});
</script>

<style scoped></style>
