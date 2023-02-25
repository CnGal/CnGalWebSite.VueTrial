<template>
	<div :class="[isSelect ? 'dropdown-select-item' : '', 'dropdown-option']">
		<slot></slot>
	</div>
</template>

<script setup>
import { ref, onMounted, useAttrs, watch } from "vue";

const isSelect = ref(false);
const attrs = useAttrs();
if (attrs.selected !== undefined) {
	isSelect.value = true;
}
</script>

<style scoped>
.dropdown-option {
	height: 48px;
	line-height: 48px;
	padding: 0 16px;
	cursor: pointer;
}
.dropdown-select-item {
	color: var(--main-color);
	background-color: var(--main-hover-bg-color);
}
.dropdown-option:not(.dropdown-select-item):hover {
	background-color: #f6f6f6;
}
</style>
