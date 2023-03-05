<template>
	<component
		:is="props.type === 'search' ? galSearchfield : galInputfield"
		@submitEvent="emit('submitEvent')"
	/>
</template>

<script setup>
import galInputfield from "./inputfield.vue";
import galSearchfield from "./searchfield.vue";

const props = defineProps({
	type: {
		type: String,
		default: "text"
	}
});

const emit = defineEmits(["submitEvent"]);
</script>

<style scoped></style>
