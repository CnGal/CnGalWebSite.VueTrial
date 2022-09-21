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
		default: "var(--main-bg-color)",
	},
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
	background-color: var(--button-bg-color);
	border: none;
	cursor: pointer;
}
</style>
