<template>
	<ul :class="['tabs', 'width-' + props.width]">
		<li
			ref="tab"
			:class="['tab', { active: modelValue === index }]"
			v-for="(item, index) in props.tabs"
			:key="index"
		>
			<component
				class="content"
				:is="props.type === 'link' ? 'router-link' : 'gal-button'"
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
	</ul>
</template>

<script setup>
import { ref } from "vue";

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
	emit("update:modelValue", index);
	emit("changeActiveTab", index);
};
</script>

<style scoped>
.tabs,
.tab {
	height: 100%;
}
.tabs {
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
	color: var(--gray-color);
	font-size: 14px;
	height: 100%;
	width: 100%;
}
.tab.active .content {
	color: var(--pink-color);
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
</style>
