<template>
	<button
		:class="['button', props.width, props.type, 'theme-' + props.theme]"
	>
		<slot></slot>
	</button>
</template>

<script setup>
const props = defineProps({
	width: {
		type: String,
		default: "normal"
	},
	theme: {
		type: String,
		default: "outline"
	}
});
</script>

<style scoped>
.button {
	--button-padding: 0.5em 1em;
	--button-col-gap: 0.5em;
	--button-border-radius: 4px;

	--button-bg-color: var(--main-bg-color);
	--button-font-color: var(--main-font-color);
	--button-border-color: var(--gray-color);

	--button-hover-bg-color: var(--main-hover-bg-color);
	--button-hover-font-color: var(--main-font-color);
}
.button.theme-solid {
	--button-bg-color: var(--main-color);
	--button-font-color: var(--white-color);
	--button-border-color: var(--main-color);

	--button-hover-bg-color: unset;
	--button-hover-font-color: var(--main-color);
}
.button.theme-text {
	--button-bg-color: transparent;
	--button-font-color: var(--main-color);
	--button-border-color: transparent;

	--button-hover-bg-color: var(--main-hover-bg-color);
	--button-hover-font-color: var(--main-color);
}
.button[circle] {
	--button-border-radius: 50%;
}
.button.full[circle] {
	--button-border-radius: 4px;
}

.theme-dark .button.theme-solid {
	--button-hover-font-color: var(--main-font-color);
}
.theme-dark .button.theme-text {
	--button-font-color: var(--main-font-color);
	--button-hover-font-color: var(--main-font-color);
}

.button {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	background-color: var(--button-bg-color);
	color: var(--button-font-color);
	cursor: pointer;
	padding: var(--button-padding);
	column-gap: var(--button-col-gap);
	border: thin solid var(--button-border-color);
	border-radius: var(--button-border-radius);
	transition: background-color 0.2s ease-in-out;
}
.button:hover {
	background-color: var(--button-hover-bg-color);
	color: var(--button-hover-font-color);
}

.button:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}
.button.full {
	width: 100%;
}
</style>
