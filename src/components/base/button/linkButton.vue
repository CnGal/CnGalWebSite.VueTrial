<template>
	<gal-link :class="['link-button', props.theme]">
		<slot></slot>
	</gal-link>
</template>

<script setup>
const props = defineProps({
	theme: {
		type: String,
		default: "hollow"
	}
});
</script>

<style scoped>
.link-button {
	padding: 0.5em 1em;
	display: inline-flex;
	column-gap: 0.5em;
	justify-content: center;
	align-items: center;
}
.link-button:hover {
	background-color: var(--main-hover-color);
}

.link-button.solid,
.link-button.outline {
	border: thin solid var(--main-color);
	border-radius: 0.5em;
	padding: 1px 8px;
}
html:not(.theme-dark) .link-button.solid {
	background-color: var(--main-color);
	color: var(--white-color);
}
html:not(.theme-dark) .link-button.solid:hover {
	background-color: transparent;
	color: var(--main-color);
}
.theme-dark .link-button.solid {
	background-color: var(--main-bg-color);
	color: var(--main-font-color);
}
.theme-dark .link-button.solid:hover {
	background-color: var(--main-hover-color);
	border-color: var(--main-hover-color);
}

html:not(.theme-dark) .link-button.outline {
	color: var(--main-color);
}
html:not(.theme-dark) .link-button.outline:hover {
	background-color: var(--main-color);
	color: var(--white-color);
}
.theme-dark .link-button.outline {
	color: var(--white-color);
	border-color: #808080;
}
.theme-dark .link-button.outline:hover {
	background-color: #808080;
}
</style>
