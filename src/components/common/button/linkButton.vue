<template>
	<a ref="linkButton" class="link-button">
		<gal-icon :icon="props.icon" :size="size"></gal-icon>
		<span>{{ props.text }}</span>
	</a>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
	icon: String,
	text: String
});

const linkButton = ref();
let size = ref("");

onMounted(() => {
	size.value = window
		.getComputedStyle(linkButton.value, null)
		.getPropertyValue("font-size");
});
</script>

<style scoped>
.link-button {
	color: var(--main-color);
}
</style>
