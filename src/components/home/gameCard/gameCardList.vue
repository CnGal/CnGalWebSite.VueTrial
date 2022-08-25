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
	--column-gap: 16px;
}
.game-card-list {
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		calc((100% - (var(--column-gap) * 5) - (12px * 2)) / 6)
	);
	column-gap: var(--column-gap);
	row-gap: 8px;
	background-color: var(--card-bg-color);
	justify-content: center;
	padding-block-end: 1em;
}

@media screen and (max-width: 1200px) {
	.game-card-list {
		grid-template-columns: repeat(
			auto-fill,
			calc((100% - (var(--column-gap) * 3) - (12px * 2)) / 4)
		);
	}
}

@media screen and (max-width: 992px) {
	.game-card-list {
		grid-template-columns: repeat(
			auto-fill,
			calc((100% - (var(--column-gap) * 2) - (12px * 2)) / 3)
		);
	}
}
@media screen and (max-width: 768px) {
	.game-card-list {
		padding-block-end: 0;
		background-color: transparent;
		grid-template-columns: repeat(
			auto-fill,
			calc((100% - (var(--column-gap) * 1)) / 2)
		);
	}
}
</style>
