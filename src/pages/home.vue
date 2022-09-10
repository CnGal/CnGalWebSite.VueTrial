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
			@click="item.click"
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

	<gal-dialog ref="settingDialog">
		<gal-card class="setting-dialog">
			<h2>主题设置</h2>
			<h3>主题颜色</h3>
			<p>
				你可以从下方选择一个喜欢的颜色作为主题颜色，选择黑色可以进入夜间模式
			</p>
			<div>
				<gal-button
					v-for="(item, index) in colorList"
					class="color"
					:bgColor="item"
					@click="changeTheme(item)"
				></gal-button>
			</div>
		</gal-card>
	</gal-dialog>
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

const settingDialog = ref();
const openSettingDialog = () => {
	settingDialog.value.show();
};

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
		text: "设置",
		click: openSettingDialog
	}
]);

const colorList = [
	"#f44336",
	"#f06292",
	"#9c27b0",
	"#673ab7",
	"#3f51b5",
	"#2196f3",
	"#03a9f4",
	"#00bcd4",
	"#009688",
	"#4caf50",
	"#8bc34a",
	"#cddc39",
	"#ffeb3b",
	"#ffc107",
	"#ff9800",
	"#ff5722",
	"#795548",
	"#607d8b",
	"#000000"
];
const changeTheme = (theme) => {
	store.changeTheme({
		color: theme
	});
};
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
	font-size: 24px;
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

.setting-dialog {
	background-color: var(--card-bg-color);
	width: 440px;
	padding: 24px;
}
.color {
	width: 28px;
	height: 28px;
	vertical-align: bottom;
}
</style>
