<template>
	<img
		class="cg-show"
		:src="props.data.pictures[active].image"
		:alt="props.data.pictures[active].note || props.data.name + 'CG'"
	/>
	<gal-no-wrap-game-list
		class="cg-preview"
		cardName="galEntriesGameCGPreview"
		:list="
			props.data.pictures.map((item, index) => {
				item.index = index;
				return item;
			})
		"
	></gal-no-wrap-game-list>
</template>

<script setup>
import { ref, provide } from "vue";

const props = defineProps({
	data: {
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
