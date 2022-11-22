<template>
	<gal-button class="icon-button" :type="props.type">
		<gal-icon :icon="props.icon"></gal-icon>
	</gal-button>
</template>

<script setup>
const props = defineProps({
	icon: {
		type: String,
		required: true
	},
	type: {
		type: String,
		default: "default" // primary
	}
});
</script>

<style scoped>
.icon-button {
	--icon-button-aspect-ratio: 1 / 1;
	--icon-button-size: 24px;
}
.icon-button.default {
	--button-bg-color: transparent;
}
.icon-button {
	width: var(--icon-button-size);
	aspect-ratio: var(--icon-button-aspect-ratio);
	border: none;
	font-size: inherit;
}
</style>
