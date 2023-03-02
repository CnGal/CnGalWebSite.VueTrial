<template>
	<gal-card
		class="card"
		:width="store.isSmallPage ? 'full' : 'fit'"
		:transparent="store.isSmallPage ? true : undefined"
	>
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="gift"></gal-icon>免费游戏
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/" class="link-button">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>
		<gal-no-wrap-game-list
			cardName="galNormalGameCard"
			:list="freeGames.showData"
			v-if="!store.isSmallPage"
		></gal-no-wrap-game-list>
		<gal-refresh-game-card-list
			v-else
			cardName="galNormalGameCard"
			:data="freeGames.showData"
			:changeData="changeFreeGames"
			refreshText="换一组免费游戏"
		></gal-refresh-game-card-list>
	</gal-card>

	<gal-card
		class="card"
		:width="store.isSmallPage ? 'full' : 'fit'"
		:transparent="store.isSmallPage ? true : undefined"
	>
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="dollar"></gal-icon>打折游戏
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/" class="link-button">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>
		<gal-no-wrap-game-list
			cardName="galDiscountGameCard"
			:list="discountGames.showData"
			v-if="!store.isSmallPage"
		></gal-no-wrap-game-list>
		<gal-refresh-game-card-list
			v-else
			cardName="galDiscountGameCard"
			:data="discountGames.showData"
			:changeData="changeDiscountGames"
			refreshText="换一组打折游戏"
		></gal-refresh-game-card-list>
	</gal-card>

	<galEntriesCGsCardList
		class="card"
		:list="gameCGs"
		v-if="!store.isSmallPage"
	></galEntriesCGsCardList>

	<galEntriesGameRolesCardList class="card"></galEntriesGameRolesCardList>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import {
	getFreeGames,
	getAllDiscountSteamGame,
	getGameCGs
} from "../../api/entriesAPI/index.js";
import { getNonRepeatRandomList } from "../../assets/common/js/random.js";

import { useStore } from "../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

const normalShowCardCount = isMobile ? 2 : 12;

// 获取免费游戏
let freeGames = reactive({
	data: [],
	showData: []
});
(async () => {
	const { data } = await getFreeGames();
	freeGames.data = data;
	freeGames.showData = getNonRepeatRandomList(
		data,
		store.isSmallPage ? 2 : 12
	);
})();
const changeFreeGames = () => {
	freeGames.showData = getNonRepeatRandomList(
		freeGames.data,
		store.isSmallPage ? 2 : 12
	);
};

// 获取打折游戏
let discountGames = reactive({
	data: [],
	showData: []
});
(async () => {
	const { data } = await getAllDiscountSteamGame();
	discountGames.data = data;
	discountGames.showData = getNonRepeatRandomList(
		data,
		store.isSmallPage ? 2 : 12
	);
})();
const changeDiscountGames = () => {
	discountGames.showData = getNonRepeatRandomList(
		discountGames.data,
		store.isSmallPage ? 2 : 12
	);
};

// 获取游戏 CG
let gameCGs = ref([]);
(async () => {
	const { data } = await getGameCGs();
	gameCGs.value = getNonRepeatRandomList(data, 2);
})();

watch(
	() => store.isSmallPage,
	() => {
		freeGames.showData = freeGames.data.slice(
			0,
			store.isSmallPage ? 2 : 12
		);
		discountGames.showData = discountGames.data.slice(
			0,
			store.isSmallPage ? 2 : 12
		);
	}
);
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
