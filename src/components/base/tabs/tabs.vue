<template>
	<ul :class="['tabs', 'width-' + props.width]" ref="tabs">
		<li
			ref="tab"
			:class="['tab', { active: modelValue === index }]"
			v-for="(item, index) in props.tabs"
			:key="index"
		>
			<component
				class="content"
				:is="props.type === 'link' ? 'gal-link' : 'gal-button'"
				:to="item.link"
				@click="changeActiveTab(index)"
			>
				<gal-icon
					v-if="item.icon"
					:icon="item.icon"
					size="24px"
				></gal-icon>
				<div class="content-text">{{ item.text }}</div>
			</component>
		</li>
		<div ref="slider" class="slider" aria-hidden="true" role="none"></div>
	</ul>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const props = defineProps({
	tabs: {
		type: Array,
		required: true
	},
	type: {
		type: String,
		default: "button"
	},
	width: {
		type: String,
		default: "default"
	},
	modelValue: Number
});
const emit = defineEmits(["update:modelValue", "changeActiveTab"]);

const changeActiveTab = (index) => {
	const oldIndex = props.modelValue;
	emit("update:modelValue", index);
	emit("changeActiveTab", index, oldIndex);
	nextTick(() => {
		moveSlider();
	});
};

const tabs = ref(null);
const slider = ref(null);
const tab = ref(null);
const moveSlider = () => {
	const activeTab = tab.value[props.modelValue];
	const sliderWidth = activeTab.offsetWidth;
	const sliderLeft =
		activeTab.getBoundingClientRect().left -
		tabs.value.getBoundingClientRect().left;
	slider.value.style.width = sliderWidth + "px";
	slider.value.style.transform = `translateX(${sliderLeft}px)`;
};

onMounted(() => {
	moveSlider();
});
</script>

<style scoped>
.tabs {
	--tabs-font-size: 14px;
	--tabs-font-color: var(--gray-color);
	--tabs-font-color-active: var(--main-color);
	--tabs-slider-color: var(--main-color);
}
.theme-dark .tabs {
	--tabs-slider-color: var(--main-font-color);
	--tabs-font-color-active: var(--main-font-color);
}

.tabs,
.tab {
	height: 100%;
}
.tabs {
	position: relative;
	display: flex;
	align-items: center;
}

.tab {
	flex: 0 1 auto;
	min-width: 90px;
	text-align: center;
}
.tabs.width-full .tab {
	flex: 1 1 auto;
}

.tab .content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 6px;
	border: none;
	color: var(--tabs-font-color);
	font-size: var(--tabs-font-size);
	height: 100%;
	width: 100%;
}
.tab.active .content {
	color: var(--tabs-font-color-active);
}
.tab .content:hover {
	background-color: #f7f7f7;
}
.theme-dark .tab .content:hover {
	background-color: #2e2e2e;
}
.tab.active .content:hover {
	background-color: var(--main-hover-color);
}

.slider {
	position: absolute;
	bottom: 0;
	left: 0;
	height: 2px;
	background-color: var(--tabs-slider-color);
	transform: translateX(0);
	transition: transform 0.3s;
}
</style>
