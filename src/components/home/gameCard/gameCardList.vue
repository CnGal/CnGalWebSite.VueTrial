<template>
	<ul class="game-card-list">
		<li
			class="game-card-item"
			v-for="(item, index) in props.list"
			:key="index"
		>
			<gal-game-card :cardInfo="item"></gal-game-card>
		</li>
	</ul>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	list: [Object]
});
</script>

<style scoped>
.game-card-list {
	--row-dot-line: 2;
}
.game-card-list {
	display: flex;
	flex-wrap: wrap;
	column-gap: 16px;
	row-gap: 8px;
}
.game-card-item {
	width: calc((100% - (16px * 5)) / 6);
}

@media screen and (max-width: 1200px) {
	.game-card-item {
		width: calc((100% - (16px * 3)) / 4);
	}
}

@media screen and (max-width: 992px) {
	.game-card-item {
		width: calc((100% - (16px * 2)) / 3);
	}
}
@media screen and (max-width: 768px) {
	.game-card-item {
		width: calc((100% - (16px * 1)) / 2);
	}
}
</style>
