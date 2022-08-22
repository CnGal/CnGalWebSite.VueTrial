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
		<gal-no-wrap-game-list :list="freeGames"></gal-no-wrap-game-list>
	</gal-card>
</template>

<script setup>
import { ref } from "vue";
import { getFreeGames } from "../../api/entriesAPI/index.js";

const getRandom = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

let freeGames = ref([]);
(async () => {
	const { data } = await getFreeGames();
	let list = [];
	if (data.length <= 12) {
		list = data;
	} else {
		// 选取列表中最后三项，以及在其它项中随机选取三项
		let set = new Set();
		while (set.size < 12) {
			set.add(getRandom(0, data.length - 1));
		}
		set.forEach((value) => {
			list.push(data[value]);
		});
	}
	freeGames.value = list;
})();
</script>

<style scoped></style>
