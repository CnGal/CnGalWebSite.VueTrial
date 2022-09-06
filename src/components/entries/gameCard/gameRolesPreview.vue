<template>
	<img
		:src="props.data.image"
		:alt="props.data.name"
		class="img"
		:class="{ active: props.data.id === active.id }"
		@click="changeActive(props.data.id, true)"
	/>
</template>

<script setup>
import { ref, inject } from "vue";

const props = defineProps({
	data: {
		type: Object,
		required: true
	}
});

const active = inject("active");
const changeActive = inject("changeActive");
</script>

<style scoped>
.img {
	width: 100%;
	aspect-ratio: 16 / 9;
	object-fit: contain;
	opacity: 0.4;
}
.img:hover,
.img.active {
	opacity: 1;
}
</style>
