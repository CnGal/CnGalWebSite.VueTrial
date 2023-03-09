<template>
	<router-view></router-view>

	<teleport :to="'body'">
		<div
			class="web-bg"
			v-show="showWebBG"
			:style="{
				backgroundImage: `url(${store.webBG.show})`
			}"
		></div>
	</teleport>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { refreshJWToken } from "@/api/accountAPI/login.js";
import { getUserView } from "@/api/spaceAPI/index.js";
import { useStore } from "@/store/index.js";
const store = useStore();

store.$subscribe((_, state) => {
	document.body.style.setProperty("--main-color", state.theme.color);
	if (state.theme.isDark) {
		document.documentElement.classList.add("theme-dark");
	} else {
		document.documentElement.classList.remove("theme-dark");
	}

	if (state.theme.isTransparent) {
		document.documentElement.classList.add("theme-transparent");
		showWebBG.value = true;
	} else {
		document.documentElement.classList.remove("theme-transparent");
		showWebBG.value = false;
	}
});
onMounted(() => {
	document.body.style.setProperty("--main-color", store.theme.color);
	if (store.theme.isDark) {
		document.documentElement.classList.add("theme-dark");
	}

	pageWidthChange();
	window.addEventListener("resize", pageWidthChange);
});

const pageWidthChange = () => {
	store.isSmallPage = window.innerWidth < 768;
};
const showWebBG = ref(false);

const getUserData = async () => {
	// 打开网站时判断是否有 authToken, 有就请求 getUserView 获取用户信息。
	try {
		if (!store.authToken) {
			return;
		}
		const { data, name } = await getUserView();

		if (name === "AxiosError") {
			return;
		}

		store.isLogin = true;
		store.userInfo = data;

		if (data.mBgImage) {
			store.webBG.user = data.mBgImage;
			store.webBG.show = data.mBgImage;
			store.changeTheme({
				isTransparent: true
			});
			document.documentElement.classList.add("theme-transparent");
			showWebBG.value = true;
		}
	} catch (error) {
		throw error;
	}
};

(async () => {
	// 打开网站时刷新token
	if (localStorage.getItem("authToken")) {
		const {
			data: { token: token }
		} = await refreshJWToken();
		localStorage.setItem("authToken", token);
		store.authToken = token;
	}

	getUserData();
})();

watch(
	() => store.authToken,
	(newToken) => {
		if (!newToken) {
			return;
		}
		getUserData();
	}
);
</script>

<style>
body {
	background-color: var(--body-color);
}

.web-bg {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.theme-dark.theme-transparent .web-bg {
	filter: brightness(0.3);
}
</style>
