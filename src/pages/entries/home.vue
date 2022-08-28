<template>
	<gal-card>
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon icon="gift" size="1em"></gal-icon
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
			:list="freeGames"
			v-if="!isMobile"
		></gal-no-wrap-game-list>
		<gal-refresh-game-card-list
			v-else
			:list="allFreeGames"
		></gal-refresh-game-card-list>
	</gal-card>
</template>

<script setup>
import { ref } from "vue";
import { getFreeGames } from "../../api/entriesAPI/index.js";
import { nonRepeatRandomList } from "../../assets/common/js/random.js";

import { useStore } from "../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

let freeGames = ref([]);
let allFreeGames = ref([]);
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
</script>

<style scoped></style>
