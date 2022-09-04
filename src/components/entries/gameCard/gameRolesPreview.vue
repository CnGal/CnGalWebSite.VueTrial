<template>
	<img
		:src="props.cardInfo.image"
		:alt="props.cardInfo.name"
		class="img"
		:class="{ active: props.cardInfo.id === active }"
		@click="changeActive(props.cardInfo.id)"
	/>
</template>

<script setup>
import { ref, inject } from "vue";

const props = defineProps({
	cardInfo: {
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
