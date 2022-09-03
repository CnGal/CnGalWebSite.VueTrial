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
		></gal-refresh-game-card-list>
	</gal-card>
	<galEntriesGameCGsCardList
		class="card"
		:list="gameCGs"
	></galEntriesGameCGsCardList>
</template>

<script setup>
import { ref } from "vue";
import {
	getFreeGames,
	getAllDiscountSteamGame,
	getGameCGs
} from "../../api/entriesAPI/index.js";
import { nonRepeatRandomList } from "../../assets/common/js/random.js";

import { useStore } from "../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

let freeGames = ref([]);
let allFreeGames = ref([]);
let discountGames = ref([]);
let allDiscountGames = ref([]);
let gameCGs = ref([]);
let allGameCGs = ref([]);
(async () => {
	const { data } = await getFreeGames();
	let list = [];
	if (data.length <= 12) {
		list = data;
	} else {
		// 在列表中随机选取12项
		const set = nonRepeatRandomList(0, data.length - 1, 12);
		set.forEach((value) => {
			list.push(data[value]);
		});
	}
	freeGames.value = list;
	allFreeGames.value = data;
})();
(async () => {
	const { data } = await getAllDiscountSteamGame();
	let list = [];
	if (data.length <= 12) {
		list = data;
	} else {
		// 在列表中随机选取12项
		const set = nonRepeatRandomList(0, data.length - 1, 12);
		set.forEach((value) => {
			list.push(data[value]);
		});
	}
	discountGames.value = list;
	allDiscountGames.value = data;
})();
(async () => {
	const { data } = await getGameCGs();
	let list = [];
	if (data.length <= 2) {
		list = data;
	} else {
		// 在列表中随机选取2项
		const set = nonRepeatRandomList(0, data.length - 1, 2);
		set.forEach((value) => {
			list.push(data[value]);
		});
	}
	gameCGs.value = list;
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
</style>
