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
	},
	size: {
		type: String,
		default: "24px"
	}
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
</style>
