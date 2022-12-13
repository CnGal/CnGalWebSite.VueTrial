<template>
	<button :class="['button', props.width, props.type]" ref="button">
		<slot></slot>
	</button>
</template>

<script setup>
import { ref } from "vue";

const button = ref();

const props = defineProps({
	width: {
		type: String,
		default: "normal"
	},
	type: {
		type: String,
		default: "default" // primary
	}
});
</script>

<style scoped>
.button {
	--button-bg-color: var(--main-bg-color);
	--button-hover-bg-color: var(--main-hover-bg-color);
	--button-primary-bg-color: var(--main-color);
	--button-primary-hover-bg-color: var(--main-color);
	--button-font-color: var(--main-font-color);
}
.button {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--button-bg-color);
	color: var(--button-font-color);
	cursor: pointer;
	padding: 0.5em 1em;
	column-gap: 0.5em;
}
.button:hover {
	background-color: var(--button-hover-bg-color);
}
.button.primary {
	background-color: var(--button-primary-bg-color);
	border: none;
	color: var(--white-color);
}
.button.primary:hover {
	background-color: var(--button-primary-bg-color);
}
.button:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}
.button[circle] {
	border-radius: 50%;
}
.button.full {
	padding: 0.5em 0;
	width: 100%;
}
.button.full[circle] {
	border-radius: 1em;
}
</style>
