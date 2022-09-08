<template>
	<nav class="nav">
		<ul class="nav-menu">
			<li
				class="nav-item"
				v-for="(item, index) in navList"
				:key="index"
				:class="{
					active: isActivePath(item.link)
				}"
			>
				<router-link :to="item.link">{{ item.text }}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

const navList = [
	{
		link: "/",
		text: "首页"
	},
	{
		link: "/entries",
		text: "词条"
	},
	{
		link: "/cv",
		text: "CV"
	},
	{
		link: "/article",
		text: "文章"
	},
	{
		link: "/square",
		text: "广场"
	}
];

const isActivePath = (path) => {
	if (path === "/") {
		return route.fullPath === "/";
	}
	return route.fullPath.startsWith(path);
};
</script>

<style scoped>
.nav,
.nav-menu,
.nav-menu-item {
	height: 100%;
}
.nav-menu {
	display: flex;
	align-items: center;
}

.nav-item {
	flex: 0 1 auto;
	min-width: 90px;
	text-align: center;
}

.nav-item a {
	display: block;
	color: #00000088;
	font-size: 14px;
	height: 100%;
	line-height: var(--header-height, 64px);
}
.nav-item.active a {
	color: var(--main-color);
}
.nav-item a:hover {
	background-color: #f7f7f7;
}
.nav-item.active a:hover {
	background-color: var(--main-hover-color);
}
</style>
