<template>
	<gal-button class="icon-button" :class="{ hasBg: props.bgColor }">
		<gal-icon :icon="props.icon"></gal-icon>
	</gal-button>
</template>

<script setup>
const props = defineProps({
	icon: {
		type: String,
		required: true,
	},
	size: {
		type: String,
		default: "24px",
	},
	bgColor: String,
});
</script>

<style scoped>
.icon-button {
	width: v-bind("props.size");
	aspect-ratio: 1 / 1;
	background-color: transparent;
	border: none;
	font-size: inherit;
}
.icon-button.hasBg {
	background-color: v-bind("props.bgColor");
	color: var(--white-color);
}
.icon-button:not(.hasBg):hover {
	background-color: var(--main-hover-color);
}
</style>
