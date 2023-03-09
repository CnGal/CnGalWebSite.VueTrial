<template>
	<header class="header" v-if="!store.isSmallPage">
		<gal-logo class="logo"></gal-logo>
		<gal-nav class="nav"></gal-nav>
		<gal-icon-button
			class="headerIcon"
			icon="search"
			circle
			v-gal-tooltip="'搜索'"
			@click="router.push('/search')"
		></gal-icon-button>
		<gal-icon-button
			v-if="!store.isLogin"
			class="headerIcon"
			icon="login"
			circle
			v-gal-tooltip="'登陆'"
			@click="router.push('/account/login')"
		></gal-icon-button>
		<gal-icon-button
			v-if="!store.isLogin"
			class="headerIcon"
			icon="settings"
			circle
			v-gal-tooltip="'设置'"
			@click="settingDialog.show()"
		></gal-icon-button>
		<gal-icon-button
			ref="createButton"
			v-if="store.isLogin"
			class="headerIcon"
			icon="menu"
			circle
			v-gal-tooltip="'创建'"
			@click="
				createDialog.show({
					type: 'element',
					value: createButton.$el,
					fixed: true
				})
			"
		></gal-icon-button>
		<gal-button
			class="user"
			ref="userButton"
			v-if="store.isLogin"
			theme="text"
			circle
			@click="
				userDialog.show({
					type: 'element',
					value: userButton.$el,
					fixed: true
				})
			"
		>
			<img
				class="user-photo"
				:src="store.userInfo?.basicInfor?.photoPath"
				:alt="store.userInfo?.basicInfor?.name"
			/>
		</gal-button>
	</header>
	<header class="header" v-else>
		<gal-icon-button
			class="small-header-icon"
			theme="solid"
			icon="menu"
		></gal-icon-button>
		<h1 class="title">CnGal 中文GalGame资料站</h1>
		<gal-icon-button
			class="small-header-icon"
			icon="search"
			theme="solid"
			v-gal-tooltip="'搜索'"
			role="link"
			@click="router.push('/search')"
		></gal-icon-button>
	</header>

	<galSettingDialog ref="settingDialog"></galSettingDialog>
	<galCreateDialog ref="createDialog"></galCreateDialog>
	<galUserDialog ref="userDialog"></galUserDialog>
</template>

<script setup>
import { ref, onMounted } from "vue";
import galLogo from "../logo/logo.vue";
import galNav from "../nav/nav.vue";
import galSettingDialog from "./content/settingdialog.vue";
import galCreateDialog from "./content/createdialog.vue";
import galUserDialog from "./content/userdialog.vue";
import { useStore } from "@/store/index.js";

import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();

const settingDialog = ref(null);
const createDialog = ref(null);
const createButton = ref(null);
const userDialog = ref(null);
const userButton = ref(null);
</script>

<style scoped>
.header {
	--header-height: 64px;
	--header-bg-color: #ffffffaa;
	--header-bg-color-dark: var(--main-bg-color);
	--header-font-color: var(--gray-color);
}

.theme-dark .header {
	--header-bg-color: var(--header-bg-color-dark);
}

@media screen and (max-width: 768px) {
	.header {
		--header-height: 48px;
		--header-bg-color: var(--main-color);
		--header-font-color: var(--white-color);
	}
}

.header {
	height: var(--header-height);
	position: sticky;
	top: 0;
	display: flex;
	align-items: center;
	box-shadow: var(--main-shadow);
	color: var(--header-font-color);
	padding: 0 16px;
	z-index: 9;
	background-color: var(--header-bg-color);
	backdrop-filter: blur(5px);
}
.logo {
	margin-inline-start: 16px;
}
.nav {
	margin-inline-start: 32px;
	flex: 1;
}
.headerIcon {
	margin-inline-end: 1em;
	font-size: 24px;
}

.title {
	font-size: large;
	flex: 1;
	font-weight: normal;
}

.small-header-icon {
	font-size: 24px;
}

.user {
	width: 48px;
	height: 48px;
}
.user-photo {
	width: 36px;
	height: 36px;
	border-radius: 50%;
}
</style>
