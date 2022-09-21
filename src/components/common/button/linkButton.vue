<template>
	<router-link :to="props.to" :class="['link-button', props.theme]">
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
		required: true,
	},
	theme: {
		type: String,
		default: "hollow",
	},
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
	display: inline-flex;
	column-gap: 0.5em;
	justify-content: center;
}
html:not(.theme-dark) .link-button {
	color: var(--main-color);
}
.link-button:hover {
	background-color: var(--main-hover-color);
}

.link-button.solid,
.link-button.outline {
	border: thin solid var(--main-color);
	border-radius: 0.5em;
	padding: 1px 8px;
}
html:not(.theme-dark) .link-button.solid {
	background-color: var(--main-color);
	color: var(--white-color);
}
html:not(.theme-dark) .link-button.solid:hover {
	background-color: transparent;
	color: var(--main-color);
}
.theme-dark .link-button.solid {
	background-color: var(--main-bg-color);
	color: var(--main-font-color);
}
.theme-dark .link-button.solid:hover {
	background-color: var(--main-hover-color);
	border-color: var(--main-hover-color);
}

html:not(.theme-dark) .link-button.outline {
	color: var(--main-color);
}
html:not(.theme-dark) .link-button.outline:hover {
	background-color: var(--main-color);
	color: var(--white-color);
}
.theme-dark .link-button.outline {
	color: var(--white-color);
	border-color: #808080;
}
.theme-dark .link-button.outline:hover {
	background-color: #808080;
}

@media screen and (max-width: 768px) {
	.link-button {
		font-size: 12px;
	}
}
</style>
