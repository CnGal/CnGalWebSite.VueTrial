<template>
	<button ref="iconButton" class="icon-button">
		<gal-icon :icon="props.icon" :size="iconSize"></gal-icon>
	</button>
</template>

<script setup>
import { ref, onMounted, useAttrs } from "vue";

const props = defineProps({
	icon: {
		type: String,
		required: true
	},
	bgColor: {
		type: String,
		default: "transparent"
	},
	bgHoverColor: String,
	size: {
		type: String,
		default: "24px"
	}
});

const attrs = useAttrs();
const iconButton = ref();

let iconSize = ref("");

onMounted(() => {
	iconSize.value = window
		.getComputedStyle(iconButton.value, null)
		.getPropertyValue("font-size");

	if (attrs.hasOwnProperty("circle")) {
		iconButton.value.removeAttribute("circle");
		iconButton.value.classList.add("circle");
	}

	if (props.bgHoverColor) {
		iconButton.value.style.setProperty(
			"--main-hover-color",
			props.bgHoverColor
		);
	}
});
</script>

<style scoped>
.icon-button {
	width: v-bind("props.size");
	line-height: v-bind("props.size");
	aspect-ratio: 1 / 1;
	background-color: v-bind("props.bgColor");
	border: none;
	cursor: pointer;
}
.icon-button:hover {
	background-color: var(--main-hover-color);
}
.icon-button.circle {
	border-radius: 50%;
}
</style>
