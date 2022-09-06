<template>
	<gal-card class="card">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon class="icon" icon="random" size="1em"></gal-icon
					>&nbsp;&nbsp;随机推荐
				</template>
				<template v-slot:end>
					<gal-link-button
						to="/"
						class="link-button"
						:text="'查看更多'"
						:icon="'shareAll'"
					></gal-link-button>
				</template>
			</gal-card-header>
		</template>
		<gal-no-wrap-game-list
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
</template>

<script setup>
import { ref } from "vue";
import { getRandomArticles } from "../../api/articlesAPI/index.js";
import { getNonRepeatRandomList } from "../../assets/common/js/random.js";

import { useStore } from "../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

const normalShowCardCount = isMobile ? 2 : 12;

let randomArticles = ref([]);
let allRandomArticles = ref([]);
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
</script>

<style scoped></style>
