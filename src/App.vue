<template>
	<router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "./store/index.js";
const store = useStore();

store.$subscribe((_, state) => {
	document.body.style.setProperty("--main-color", state.theme.color);
});
onMounted(() => {
	document.body.style.setProperty("--main-color", store.theme.color);
});
</script>

<style>
body {
	background-color: var(--body-color);
}
</style>
