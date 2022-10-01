<template>
	<gal-card class="card">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="gift" size="1em"></gal-icon
			>&nbsp;&nbsp;免费游戏
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/" class="link-button">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>
		<gal-no-wrap-game-list
			cardName="galNormalGameCard"
			:list="freeGames"
			v-if="!isMobile"
		></gal-no-wrap-game-list>
		<gal-refresh-game-card-list
			v-else
			cardName="galNormalGameCard"
			:data="freeGames"
			:changeData="changeFreeGames"
			refreshText="换一组免费游戏"
		></gal-refresh-game-card-list>
	</gal-card>
	<gal-card class="card">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="dollar" size="1em"></gal-icon
			>&nbsp;&nbsp;打折游戏
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/" class="link-button">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>
		<gal-no-wrap-game-list
			cardName="galDiscountGameCard"
			:list="discountGames"
			v-if="!isMobile"
		></gal-no-wrap-game-list>
		<gal-refresh-game-card-list
			v-else
			cardName="galDiscountGameCard"
			:data="discountGames"
			:changeData="changeDiscountGames"
			refreshText="换一组打折游戏"
		></gal-refresh-game-card-list>
	</gal-card>
	<galEntriesGameCGsCardList
		class="card"
		:list="gameCGs"
		v-if="!isMobile"
	></galEntriesGameCGsCardList>
	<Suspense>
		<galEntriesGameRolesCardList class="card"></galEntriesGameRolesCardList>
	</Suspense>
</template>

<script setup>
import { ref } from "vue";
import {
	getFreeGames,
	getAllDiscountSteamGame,
	getGameCGs,
} from "../../api/entriesAPI/index.js";
import { getNonRepeatRandomList } from "../../assets/common/js/random.js";

import { useStore } from "../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

const normalShowCardCount = isMobile ? 2 : 12;

// 获取免费游戏
let freeGames = ref([]);
let allFreeGames = ref([]);
(async () => {
	const { data } = await getFreeGames();
	freeGames.value = getNonRepeatRandomList(data, normalShowCardCount);
	allFreeGames.value = data;
})();
const changeFreeGames = () => {
	freeGames.value = getNonRepeatRandomList(
		allFreeGames.value,
		normalShowCardCount
	);
};

// 获取打折游戏
let discountGames = ref([]);
let allDiscountGames = ref([]);
(async () => {
	const { data } = await getAllDiscountSteamGame();
	discountGames.value = getNonRepeatRandomList(data, normalShowCardCount);
	allDiscountGames.value = data;
})();
const changeDiscountGames = () => {
	discountGames.value = getNonRepeatRandomList(
		allDiscountGames.value,
		normalShowCardCount
	);
};

// 获取游戏 CG
let gameCGs = ref([]);
let allGameCGs = ref([]);
(async () => {
	const { data } = await getGameCGs();
	gameCGs.value = getNonRepeatRandomList(data, 2);
	allGameCGs.value = data;
})();
</script>

<style scoped>
.icon {
	vertical-align: middle;
}
.card {
	margin-block-start: 16px;
}
.link-button {
	flex: 0 0 auto;
}
</style>
