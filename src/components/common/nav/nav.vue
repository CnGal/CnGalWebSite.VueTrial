<template>
	<nav class="nav">
		<ul class="nav-menu">
			<li
				ref="navItem"
				class="nav-item"
				v-for="(item, index) in navList"
				:key="index"
			>
				<router-link :to="item.link">{{ item.text }}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const navList = [
	{
		link: "/",
		text: "首页",
	},
	{
		link: "/entries",
		text: "词条",
	},
	{
		link: "/cv",
		text: "CV",
	},
	{
		link: "/article",
		text: "文章",
	},
	{
		link: "/square",
		text: "广场",
	},
];

const navItem = ref();

onMounted(() => {
	const path = route.fullPath;

	if (path.startsWith("/entries")) {
		navItem.value[1].classList.add("active");
	} else if (path.startsWith("/cv")) {
		navItem.value[2].classList.add("active");
	} else if (path.startsWith("/article")) {
		navItem.value[3].classList.add("active");
	} else if (path.startsWith("/square")) {
		navItem.value[4].classList.add("active");
	} else {
		navItem.value[0].classList.add("active");
	}
});
</script>

<style scoped>
.nav,
.nav-menu,
.nav-item {
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
	color: var(--main-font-color);
	font-size: 14px;
	height: 100%;
	line-height: var(--header-height, 64px);
}
.nav-item.active a {
	color: var(--pink-color);
}
.nav-item a:hover {
	background-color: #f7f7f7;
}
.theme-dark .nav-item a:hover {
	background-color: #2e2e2e;
}
.nav-item.active a:hover {
	background-color: var(--main-hover-color);
}
</style>
