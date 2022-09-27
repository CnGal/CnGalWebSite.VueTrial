<template>
	<header class="card-header">
		<h2>
			<slot name="start"></slot>
		</h2>
		<div class="end">
			<slot name="end"></slot>
			<gal-icon-button
				v-if="props.toggle"
				icon="down"
				class="icon toggle"
				size="36px"
				bgColor="var(--main-color)"
				circle
				v-gal-tooltip="'折叠'"
				:data-tooltip-text="toggleBtnTooltipText"
				@click="toggleRolesCardVisibility"
			></gal-icon-button>
		</div>
	</header>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
	toggle: {
		type: Boolean,
		dafault: false,
	},
	toggleChange: {
		type: Function,
		default: Function.prototype,
	},
});
const isShow = ref(true);
const toggleBtnTooltipTextList = {
	show: "折叠",
	hide: "展开",
};
const toggleBtnTooltipText = ref("折叠");

const toggleRolesCardVisibility = () => {
	isShow.value = !isShow.value;
	toggleBtnTooltipText.value =
		toggleBtnTooltipTextList[isShow.value ? "show" : "hide"];

	props.toggleChange(isShow.value);
};
</script>

<style scoped>
.card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: var(--main-font-color);
	background-color: var(--main-bg-color);
	min-height: 35px;
	padding: 1em 1em 12px;
}
html:not(.theme-dark) .card-header {
	color: var(--main-color);
}
h2 {
	display: flex;
	align-items: center;
	font-size: 1.25em;
}
.end {
	display: flex;
}

.icon.toggle {
	font-size: 20px;
}

@media screen and (max-width: 768px) {
	h2 {
		font-size: 14px;
		font-weight: normal;
	}
	.card-header {
		margin-block-end: 12px;
		padding-block-start: 0;
		padding-block-end: 0;
		box-shadow: var(--main-shadow);
		border-radius: var(--main-border-radius);
	}
}
</style>
