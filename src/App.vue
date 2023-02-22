<template>
	<router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";
import { refreshJWToken } from "@/api/accountAPI/login.js";
import { useStore } from "./store/index.js";
const store = useStore();

store.$subscribe((_, state) => {
	document.body.style.setProperty("--main-color", state.theme.color);
	if (state.theme.isDark) {
		document.documentElement.classList.add("theme-dark");
	} else {
		document.documentElement.classList.remove("theme-dark");
	}
});
onMounted(() => {
	document.body.style.setProperty("--main-color", store.theme.color);
	if (store.theme.isDark) {
		document.documentElement.classList.add("theme-dark");
	}
});

(async () => {
	// 打开网站时刷新token
	if (!localStorage.getItem("authToken")) {
		return;
	}
	const {
		data: { token: token }
	} = await refreshJWToken();
	localStorage.setItem("authToken", token);
	store.authToken = token;
})();
</script>

<style>
body {
	background-color: var(--body-color);
}
</style>
