<template>
	<gal-card class="card">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon class="icon" icon="gift" size="1em"></gal-icon
					>&nbsp;&nbsp;免费游戏
				</template>
				<template v-slot:end>
					<gal-link-button
						:text="'查看更多'"
						:icon="'shareAll'"
					></gal-link-button>
				</template>
			</gal-card-header>
		</template>
		<gal-no-wrap-game-list
			cardName="galFreeGameCard"
			:list="freeGames"
			v-if="!isMobile"
		></gal-no-wrap-game-list>
		<gal-refresh-game-card-list
			v-else
			cardName="galFreeGameCard"
			:list="allFreeGames"
			refreshText="换一组免费游戏"
		></gal-refresh-game-card-list>
	</gal-card>
	<gal-card class="card">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon class="icon" icon="dollar" size="1em"></gal-icon
					>&nbsp;&nbsp;打折游戏
				</template>
				<template v-slot:end>
					<gal-link-button
						:text="'查看更多'"
						:icon="'shareAll'"
					></gal-link-button>
				</template>
			</gal-card-header>
		</template>
		<gal-no-wrap-game-list
			cardName="galDiscountGameCard"
			:list="discountGames"
			v-if="!isMobile"
		></gal-no-wrap-game-list>
		<gal-refresh-game-card-list
			v-else
			cardName="galDiscountGameCard"
			:list="allDiscountGames"
			refreshText="换一组打折游戏"
		></gal-refresh-game-card-list>
	</gal-card>
	<galEntriesGameCGsCardList
		class="card"
		:list="gameCGs"
		v-if="!isMobile"
	></galEntriesGameCGsCardList>
	<galEntriesGameRolesCardList
		class="card"
		:list="gameRoles"
		:allList="allGameRoles"
	></galEntriesGameRolesCardList>
</template>

<script setup>
import { ref } from "vue";
import {
	getFreeGames,
	getAllDiscountSteamGame,
	getGameCGs,
	getGameRoles
} from "../../api/entriesAPI/index.js";
import { nonRepeatRandomList } from "../../assets/common/js/random.js";

import { useStore } from "../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

const getRandomList = (data, wantLength) => {
	if (data.length <= wantLength) {
		return data;
	} else {
		let list = [];
		// 在列表中随机选取 wantLength 项
		const set = nonRepeatRandomList(0, data.length - 1, wantLength);
		set.forEach((i) => {
			list.push(data[i]);
		});
		return list;
	}
};

// 获取免费游戏
let freeGames = ref([]);
let allFreeGames = ref([]);
(async () => {
	const { data } = await getFreeGames();
	freeGames.value = getRandomList(data, 12);
	allFreeGames.value = data;
})();

// 获取打折游戏
let discountGames = ref([]);
let allDiscountGames = ref([]);
(async () => {
	const { data } = await getAllDiscountSteamGame();
	discountGames.value = getRandomList(data, 12);
	allDiscountGames.value = data;
})();

// 获取游戏 CG
let gameCGs = ref([]);
let allGameCGs = ref([]);
(async () => {
	const { data } = await getGameCGs();
	gameCGs.value = getRandomList(data, 2);
	allGameCGs.value = data;
})();

// 获取游戏以及角色
let gameRoles = ref([]);
let allGameRoles = ref([]);
(async () => {
	const { data } = await getGameRoles();
	gameRoles.value = getRandomList(data, 12);
	allGameRoles.value = data;
})();
</script>

<style scoped>
.icon {
	vertical-align: middle;
}
.card {
	margin-block-start: 16px;
}
</style>
