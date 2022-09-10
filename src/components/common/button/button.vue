<template>
	<button class="button" ref="button">
		<slot></slot>
	</button>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
	bgColor: {
		type: String,
		required: true
	}
});

const button = ref();

onMounted(() => {
	if (props.bgColor) {
		button.value.style.setProperty("--button-bg-color", props.bgColor);
	}
});
</script>

<style scoped>
.button {
	--button-bg-color: var(--card-bg-color);
}
.button {
	background-color: var(--button-bg-color);
	border: none;
}
</style>
