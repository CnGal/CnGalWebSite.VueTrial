<template>
	<gal-header v-if="!isMobile">
		<gal-logo class="logo"></gal-logo>
		<gal-nav class="nav"></gal-nav>
		<gal-icon-button
			v-for="(item, index) in headerIconList"
			:key="index"
			class="headerIcon"
			:icon="item.icon"
			circle
			size="48px"
			v-gal-tooltip="item.text"
		></gal-icon-button>
	</gal-header>
	<gal-header-mobile v-else>
		<gal-icon-button
			class="mobile-header-icon"
			icon="menu"
			size="48px"
		></gal-icon-button>
		<h1 class="title">CnGal 中文GalGame资料站</h1>
		<gal-icon-button
			class="mobile-header-icon"
			icon="search"
			size="48px"
		></gal-icon-button>
	</gal-header-mobile>
	<gal-main class="main" :class="{ 'main-mobile': isMobile }">
		<router-view></router-view>
	</gal-main>
	<gal-footer v-if="!isMobile" class="footer"></gal-footer>
	<gal-footer-mobile v-else></gal-footer-mobile>
</template>

<script setup>
import { ref } from "vue";
import galHeader from "../components/common/header/header.vue";
import galHeaderMobile from "../components/common/header/header-mobile.vue";
import galLogo from "../components/common/logo/logo.vue";
import galNav from "../components/common/nav/nav.vue";
import galMain from "../components/common/main/main.vue";
import galFooter from "../components/common/footer/footer.vue";
import galFooterMobile from "../components/common/footer/footer-mobile.vue";

import { useStore } from "../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

const headerIconList = ref([
	{
		icon: "search",
		text: "搜索"
	},
	{
		icon: "login",
		text: "登陆"
	},
	{
		icon: "settings",
		text: "设置"
	}
]);
</script>

<style scoped>
.logo {
	margin-inline-start: 16px;
}
.nav {
	margin-inline-start: 32px;
	flex: 1;
}
:deep(.headerIcon) {
	margin-inline-end: 24px;
	color: var(--main-color);
}
.title,
:deep(.mobile-header-icon) {
	color: var(--white-color);
}
.footer {
	margin-block-start: 16px;
}
.title {
	font-size: large;
	flex: 1;
	font-weight: normal;
}
.main-mobile {
	margin-block-end: 56px;
}
</style>
