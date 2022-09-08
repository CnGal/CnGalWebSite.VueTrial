<template>
	<img
		:src="props.data.image || props.data.mainImage"
		:alt="props.data.note || props.data.displayName || props.data.name"
		class="img"
		:class="{ active: props.data.index === active }"
		@click="changeActive(props.data.index)"
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
	filter: blur(3px);
}
.img:hover,
.img.active {
	filter: none;
}
</style>
