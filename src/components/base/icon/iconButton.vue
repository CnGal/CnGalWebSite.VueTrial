<template>
	<gal-button class="icon-button">
		<gal-icon :icon="props.icon"></gal-icon>
	</gal-button>
</template>

<script setup>
const props = defineProps({
	icon: {
		type: String,
		required: true
	}
});
</script>

<style scoped>
.icon-button {
	--icon-button-size: 48px;
	--button-border-color: transparent;
	--button-padding: 0;
	--button-font-color: var(--main-color);
	--button-hover-font-color: var(--main-color);
}
.icon-button.theme-outline {
	--button-bg-color: transparent;
}
.icon-button.theme-solid {
	--button-hover-bg-color: var(--main-color);
	--button-hover-font-color: var(--white-color);
}

.theme-dark .icon-button {
	--button-bg-color: var(--main-bg-color);
	--button-font-color: var(--main-font-color);
	--button-hover-font-color: var(--main-font-color);
}

.icon-button {
	width: var(--icon-button-size);
	height: var(--icon-button-size);
	font-size: inherit;
}
</style>
