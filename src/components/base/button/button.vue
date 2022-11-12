<template>
	<button
		:class="['button', props.width, { hasBg: props.bgColor }]"
		ref="button"
	>
		<slot></slot>
	</button>
</template>

<script setup>
import { ref, onMounted, useAttrs } from "vue";

const attrs = useAttrs();
const button = ref();

const props = defineProps({
	width: {
		type: String,
		default: "normal"
	},
	bgColor: String
});

onMounted(() => {
	if (attrs.hasOwnProperty("circle")) {
		button.value.removeAttribute("circle");
		button.value.classList.add("circle");
	}
});
</script>

<style scoped>
.button {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--main-bg-color);
	color: var(--main-font-color);
	cursor: pointer;
}
.button:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}
.circle {
	border-radius: 50%;
}
.button.full {
	padding: 0.5em 0;
	width: 100%;
}
.button.full.circle {
	border-radius: 1em;
}

.button.hasBg {
	background-color: v-bind("props.bgColor");
	border: none;
	color: var(--white-color);
}
.button:not(.hasBg):hover {
	background-color: var(--main-hover-color);
}
</style>
