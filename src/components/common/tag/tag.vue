<template>
	<span ref="tag" class="tag">{{ props.text }}</span>
</template>

<script setup>
import { ref, onMounted } from "vue";

const tag = ref();
const props = defineProps({
	text: String,
	bgColor: String,
	color: String
});

onMounted(() => {
	if (props.bgColor) {
		tag.value.style.setProperty("--tag-bg-color", props.bgColor);
	}
	if (props.color) {
		tag.value.style.setProperty("--tag-color", props.color);
	}
});
</script>

<style scoped>
.tag {
	display: inline-block;
	padding: 0 5px;
	background-color: var(--tag-bg-color, transparent);
	color: var(--tag-color, #000);
	border-radius: 5px;
}
</style>
