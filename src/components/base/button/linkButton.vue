<template>
	<gal-link :class="['link-button', 'theme-' + props.theme, props.width]">
		<slot></slot>
	</gal-link>
</template>

<script setup>
const props = defineProps({
	theme: {
		type: String,
		default: "text"
	},
	width: {
		type: String,
		default: "normal"
	}
});
</script>

<style scoped>
.link-button {
	--link-button-padding: 0.5em 1em;
	--link-button-col-gap: 0.5em;
	--link-border-radius: unset;

	--link-button-bg-color: unset;
	--link-button-font-color: var(--main-color);
	--link-button-border-color: unset;

	--link-button-hover-bg-color: var(--main-hover-bg-color);
	--link-button-hover-font-color: var(--main-color);
}

.link-button.theme-solid {
	--link-border-radius: 4px;

	--link-button-bg-color: var(--main-color);
	--link-button-font-color: var(--white-color);
	--link-button-border-color: var(--main-color);

	--link-button-hover-bg-color: unset;
	--link-button-hover-font-color: var(--main-color);
}

.link-button.theme-outline {
	--link-border-radius: 4px;

	--link-button-bg-color: unset;
	--link-button-font-color: var(--main-color);
	--link-button-border-color: var(--main-color);

	--link-button-hover-bg-color: var(--main-color);
	--link-button-hover-font-color: var(--white-color);
}

.theme-dark .link-button {
	--link-button-font-color: var(--main-font-color);
	--link-button-hover-font-color: var(--main-font-color);
}

.link-button {
	padding: var(--link-button-padding);
	display: inline-flex;
	column-gap: var(--link-button-col-gap);
	justify-content: center;
	align-items: center;
	background-color: var(--link-button-bg-color);
	color: var(--link-button-font-color);
	border: thin solid var(--link-button-border-color);
	border-radius: var(--link-border-radius);
}
.link-button.full {
	box-sizing: border-box;
	width: 100%;
}
.link-button:hover {
	background-color: var(--link-button-hover-bg-color);
	color: var(--link-button-hover-font-color);
}
</style>
