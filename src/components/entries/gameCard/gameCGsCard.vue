<template>
	<img
		class="cg-show"
		:src="props.cardInfo.pictures[active].image"
		:alt="
			props.cardInfo.pictures[active].note || props.cardInfo.name + 'CG'
		"
	/>
	<gal-no-wrap-game-list
		class="cg-preview"
		cardName="galEntriesGameCGPreview"
		:list="
			props.cardInfo.pictures.map((item, index) => {
				item.index = index;
				return item;
			})
		"
	></gal-no-wrap-game-list>
</template>

<script setup>
import { ref, provide } from "vue";

const props = defineProps({
	cardInfo: {
		type: Object,
		required: true
	}
});

const active = ref(0);

const changeActive = (newActive) => {
	active.value = newActive;
};

provide("active", active);
provide("changeActive", changeActive);
</script>

<style scoped>
.cg-show {
	width: 100%;
	box-sizing: border-box;
	padding: 0 12px;
}
.cg-preview {
	margin-block-start: 16px;
}
</style>
