<template>
	<button class="button">
		<slot></slot>
	</button>
</template>

<script setup>
import { ref, onMounted } from "vue";
</script>

<style scoped>
.button {
	background-color: var(--card-bg-color);
}
</style>
