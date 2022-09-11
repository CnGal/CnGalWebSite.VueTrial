<template>
	<router-link class="link-button" :to="props.to">
		<gal-icon
			v-if="props.icon"
			:icon="props.icon"
			:size="size"
			class="link-button-icon"
		></gal-icon>
		<span ref="linkButtonText" v-if="props.text" v-text="props.text"></span>
	</router-link>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
	icon: String,
	text: String,
	to: {
		type: String,
		required: true
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
	color: var(--main-font-color);
	font-size: 14px;
	padding: 0.5em 1em;
	display: flex;
	column-gap: 0.5em;
	justify-content: center;
}
html:not(.theme-dark) .link-button {
	color: var(--main-color);
}
.link-button:hover {
	background-color: var(--main-hover-color);
}

@media screen and (max-width: 768px) {
	.link-button {
		font-size: 12px;
	}
}
</style>
