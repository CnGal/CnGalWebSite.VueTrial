<template>
	<div :class="['time-line', props.contentAlign]">
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps({
	contentAlign: {
		type: String,
		default: "left",
	},
});
</script>

<style scoped>
.time-line {
	position: relative;
	padding-block: 24px;
}
.time-line::before {
	content: "";
	position: absolute;
	top: 0;
	bottom: 0;
	width: 2px;
	height: 100%;
	background-color: #ddd;
}
.time-line.left::before {
	left: calc(48px - 1px);
}
.time-line.right :deep(.timeline-item) {
	flex-direction: row-reverse;
}
.time-line.right::before {
	right: calc(48px - 1px);
}
.time-line.right :deep(.arrow) {
	left: unset;
	right: -16px;
	clip-path: polygon(100% 100%, 100% 0, 0 0);
}
</style>
