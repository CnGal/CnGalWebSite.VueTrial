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
.time-line:not(.center) :deep(.timeline-item-opposite) {
	display: none;
}

.time-line.left::before {
	left: calc(48px - 1px);
}
.time-line.left :deep(.timeline-item-divider) {
	order: 1;
}
.time-line.left :deep(.timeline-item-body) {
	order: 2;
}

.time-line.right::before {
	right: calc(48px - 1px);
}
.time-line.right :deep(.timeline-item) {
	flex-direction: row-reverse;
}
.time-line.right :deep(.timeline-item-divider) {
	order: 1;
}
.time-line.right :deep(.timeline-item-body) {
	order: 2;
}
.time-line.right :deep(.arrow) {
	left: unset;
	right: -16px;
	clip-path: polygon(100% 100%, 100% 0, 0 0);
}

.time-line.center::before {
	left: calc(50% - 1px);
}
.time-line.center :deep(.arrow) {
	left: unset;
	right: -16px;
	clip-path: polygon(100% 100%, 100% 0, 0 0);
}
.time-line.center :deep(.timeline-item):nth-of-type(2n) {
	flex-direction: row-reverse;
}
.time-line.center :deep(.timeline-item):nth-of-type(2n) .arrow {
	left: 0;
	right: unset;
	clip-path: polygon(100% 100%, 0 100%, 0 0);
}
.time-line.center
	:deep(.timeline-item):nth-of-type(2n)
	.timeline-item-opposite {
	justify-content: end;
}
</style>
