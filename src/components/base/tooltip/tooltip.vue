<!-- 此文件没有使用，tooltip组件使用的是 tooltip.js -->
<template>
	<teleport :to="'body'">
		<div ref="tooltip" v-show="isShow" class="tooltip">
			<slot></slot>
		</div>
	</teleport>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(false);
const tooltip = ref();

const changePosition = (target) => {
	const rect = target.getBoundingClientRect();
	tooltip.value.style.transform = `translate(calc(${
		rect.x + rect.width / 2
	}px - 50%), ${rect.y + rect.height}px)`;
};

const showTooltip = (ev) => {
	changePosition(ev.target);
	isShow.value = true;
};
const hideTooltip = (ev) => {
	changePosition(ev.target);
	isShow.value = false;
};

defineExpose({
	showTooltip,
	hideTooltip
});
</script>

<style scoped>
.tooltip {
	position: absolute;
	z-index: 99;
	inset: 0 auto auto 0;
	padding: 0.5em 1em;
	background-color: #000000bb;
	color: #fff;
	border-radius: 7px;
	font-size: 14px;
}
</style>
