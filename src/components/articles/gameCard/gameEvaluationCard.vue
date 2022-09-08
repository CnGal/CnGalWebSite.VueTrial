<template>
	<galEvaluation
		class="article"
		:data="props.data.evaluations[active]"
	></galEvaluation>
	<gal-no-wrap-game-list
		cardName="galEntriesGameCGPreview"
		:list="
			props.data.evaluations.map((item, index) => {
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
article {
	height: 500px;
	overflow: auto;
	background-color: var(--card-bg-color);
	padding: 0 12px;
}
</style>
