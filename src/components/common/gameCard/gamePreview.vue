<template>
	<img
		:src="props.data.image || props.data.mainImage || props.data.url"
		:alt="props.data.note || props.data.displayName || props.data.name"
		class="img"
		:class="{ active: isActive() }"
		@click="
			changeActive(
				active.type === 'id' ? props.data.id : props.data.index
			)
		"
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

const isActive = () => {
	if (active.value.type === "id") {
		return props.data.id === active.value.active.id;
	}
	return props.data.index === active.value.active;
};
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
