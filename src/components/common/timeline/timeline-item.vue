<template>
	<div class="timeline-item">
		<div class="timeline-item-body">
			<slot name="body"></slot>
			<div class="arrow"></div>
		</div>
		<div class="timeline-item-divider">
			<slot name="divider"></slot>
		</div>
		<div class="timeline-item-opposite">
			<slot name="opposite"></slot>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.timeline-item {
	display: flex;
	position: relative;
	padding-block-end: 24px;
}
.timeline-item-divider {
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 96px;
}
.timeline-item-body {
	position: relative;
	max-width: calc(100% - 96px);
	flex: 1;
	border-radius: 4px;
	box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
		0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.timeline-item-opposite {
	flex: 1;
	display: flex;
	align-items: center;
}
.arrow {
	position: absolute;
	box-sizing: border-box;
	left: 0;
	top: calc(50% - 8px);
	width: 16px;
	height: 16px;
	border: 1px solid #ddd;
	background-color: var(--main-bg-color);
	transform-origin: center;
	transform: translate(-50%) rotate(45deg);
	/* 上三角形 */
	/* clip-path: polygon(0 0, 0 100%, 100% 0); */
	/* 下三角形 */
	/* clip-path: polygon(0 100%, 100% 100%, 100% 0); */
	/* 右三角形 */
	/* clip-path: polygon(100% 100%, 100% 0, 0 0); */
	/* 左三角形 */
	clip-path: polygon(100% 100%, 0 100%, 0 0);
}
</style>
