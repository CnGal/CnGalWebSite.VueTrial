<template>
	<span ref="tag" class="tag">{{ props.text }}</span>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	text: String
});
</script>

<style scoped>
.tag {
	display: inline-block;
	padding: 0 5px;
	background-color: var(--main-color);
	color: #fff;
	border-radius: 5px;
}
.theme-dark .tag {
	background-color: #808080;
}
</style>
