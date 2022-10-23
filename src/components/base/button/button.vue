<template>
	<button class="button" ref="button">
		<slot></slot>
	</button>
</template>

<script setup>
import { ref, onMounted, useAttrs } from "vue";

const attrs = useAttrs();
const button = ref();

onMounted(() => {
	if (attrs.hasOwnProperty("circle")) {
		button.value.removeAttribute("circle");
		button.value.classList.add("circle");
	}
});
</script>

<style scoped>
.button {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--main-bg-color);
	color: var(--main-font-color);
	cursor: pointer;
}
.button:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}
.circle {
	border-radius: 50%;
}
</style>
