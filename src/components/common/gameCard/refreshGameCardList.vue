<template>
	<div class="card-wrap">
		<ul class="card-list" ref="cardList">
			<li
				v-for="(item, index) in showData"
				:key="index"
				class="card-item"
				ref="cardItem"
			>
				<gal-game-card :cardInfo="item"></gal-game-card>
			</li>
		</ul>
		<button class="refresh-btn" @click="setShowData">
			<gal-icon icon="refresh" class="icon" size="12px"></gal-icon>
			换一组免费游戏
		</button>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { nonRepeatRandomList } from "../../../assets/common/js/random.js";
const props = defineProps({
	list: {
		type: [Object],
		required: true
	}
});

let showData = ref([]);
const setShowData = () => {
	const set = nonRepeatRandomList(0, props.list.length - 1, 2);
	showData.value.length = 0;
	set.forEach((value) => {
		showData.value.push(props.list[value]);
	});
};
onMounted(() => {
	setShowData();
});
</script>

<style scoped>
.card-item {
	margin-block-end: 12px;
}
.refresh-btn {
	display: block;
	font-size: 12px;
	border: none;
	border-radius: 1em;
	background-color: var(--pink-color);
	color: var(--white-color);
	margin: 0 auto;
}
.icon {
	margin-inline-end: 8px;
}
</style>
