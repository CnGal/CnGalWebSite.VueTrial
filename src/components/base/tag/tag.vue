<template>
	<span ref="tag" class="tag">
		<slot></slot>
	</span>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
.tag {
	display: inline-block;
	padding: 1px 8px;
	background-color: var(--main-color);
	color: #fff;
	border-radius: 5px;
}
.theme-dark .tag {
	background-color: #808080;
}
</style>
