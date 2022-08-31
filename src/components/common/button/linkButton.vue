<template>
	<router-link class="link-button" :to="props.to">
		<gal-icon
			:icon="props.icon"
			:size="size"
			class="link-button-icon"
		></gal-icon>
		<span ref="linkButtonText">{{ props.text }}</span>
	</router-link>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
	icon: String,
	text: String,
	to: {
		type: String,
		default: "/"
	}
});

const linkButtonText = ref();
let size = ref("");

onMounted(() => {
	size.value = window
		.getComputedStyle(linkButtonText.value, null)
		.getPropertyValue("font-size");
});
</script>

<style scoped>
.link-button {
	color: var(--main-color);
	font-size: 14px;
	padding: 0 1em;
}
.link-button:hover {
	background-color: #fbf1f4;
}
.link-button-icon {
	margin-inline-end: 0.5em;
	vertical-align: middle;
}

@media screen and (max-width: 768px) {
	.link-button {
		font-size: 12px;
	}
}
</style>
