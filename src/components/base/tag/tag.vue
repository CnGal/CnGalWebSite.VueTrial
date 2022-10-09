<template>
	<span ref="tag" :class="['tag', props.bgColor]">
		<slot></slot>
	</span>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	bgColor: {
		type: String,
	},
});
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

.primary {
	background-color: #009ef7;
}
.success {
	background-color: #50cd89;
}
</style>
