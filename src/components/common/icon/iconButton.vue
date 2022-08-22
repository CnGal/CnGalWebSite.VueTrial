<template>
	<button
		v-bind="$attrs"
		ref="iconWrap"
		class="icon-wrap"
		@mouseenter="showTooltip"
		@mouseleave="hideTooltip"
	>
		<gal-icon :icon="props.icon" :size="'24px'"></gal-icon>
	</button>
	<gal-tooltip ref="tooltip" v-if="props.tooltip">
		<span>{{ props.tooltipText }}</span>
	</gal-tooltip>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
	icon: String,
	tooltip: {
		type: Boolean,
		default: true
	},
	tooltipText: String,
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

const tooltip = ref();
const showTooltip = (ev) => {
	tooltip.value.showTooltip(ev);
};
const hideTooltip = (ev) => {
	tooltip.value.hideTooltip(ev);
};

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
