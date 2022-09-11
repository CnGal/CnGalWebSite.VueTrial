<template>
	<img
		class="cg-show"
		:src="
			props.data.pictures &&
			(props.data.pictures[active].image ||
				props.data.pictures[active].url)
		"
		:alt="
			(props.data.pictures && props.data.pictures[active].note) ||
			props.data.name + 'CG'
		"
	/>
	<gal-no-wrap-game-list
		class="cg-preview"
		cardName="galGamePreview"
		:list="
			(props.data.pictures &&
				props.data.pictures.map((item, index) => {
					item.index = index;
					return item;
				})) ||
			[]
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
.cg-show {
	width: 100%;
	box-sizing: border-box;
	padding: 0 12px;
}
.cg-preview {
	margin-block-start: 16px;
}
</style>
