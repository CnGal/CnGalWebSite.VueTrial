<template>
	<button v-bind="$attrs" ref="iconWrap" class="icon-wrap">
		<gal-icon :icon="props.icon" :size="'24px'"></gal-icon>
	</button>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
	icon: String,
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

const iconWrap = ref();

onMounted(() => {
	if (iconWrap.value.hasAttribute("circle")) {
		iconWrap.value.removeAttribute("circle");
		iconWrap.value.classList.add("circle");
	}

	if (props.bgHoverColor) {
		iconWrap.value.style.setProperty("--hover-color", props.bgHoverColor);
	}
});
</script>

<style scoped>
.icon-wrap {
	display: flex;
	align-items: center;
	justify-content: center;
	width: v-bind("props.size");
	aspect-ratio: 1 / 1;
	background-color: v-bind("props.bgColor");
	border: none;
	cursor: pointer;
}
.icon-wrap:hover {
	background-color: var(--hover-color, #fbf1f4);
}
.icon-wrap.circle {
	border-radius: 50%;
}
.icon-wrap :deep(.icon) {
	margin: 0;
}
</style>
