<template>
	<img
		:src="props.cardInfo.image"
		:alt="props.cardInfo.note || 'CG'"
		class="img"
		:class="{ active: props.cardInfo.index === active }"
		@click="changeActive(props.cardInfo.index)"
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
	filter: blur(3px);
}
.img:hover,
.img.active {
	filter: none;
}
</style>
