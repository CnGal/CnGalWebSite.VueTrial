<template>
	<galEvaluation
		class="article"
		:data="props.data.evaluations[active]"
	></galEvaluation>
	<gal-no-wrap-game-list
		cardName="galGamePreview"
		:list="
			props.data.evaluations.map((item, index) => {
				item.index = index;
				return item;
			})
		"
	></gal-no-wrap-game-list>
</template>

<script setup>
import { ref, provide, computed } from "vue";

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

const activeData = computed(() => {
	return {
		active: active.value,
		type: "index"
	};
});

provide("active", activeData);
provide("changeActive", changeActive);
</script>

<style scoped>
article {
	height: 500px;
	overflow: auto;
	background-color: var(--main-bg-color);
	padding: 0 12px;
}
</style>
