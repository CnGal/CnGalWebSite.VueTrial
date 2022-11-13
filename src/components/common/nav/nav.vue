<template>
	<nav class="nav">
		<gal-Tabs type="link" :tabs="navList" v-model="activeNav"></gal-Tabs>
	</nav>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
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
		link: "/articles",
		text: "文章"
	},
	{
		link: "/square",
		text: "广场"
	}
];
const activeNav = ref(0);

const changeActivePath = () => {
	const path = route.fullPath;

	if (path.startsWith("/entries")) {
		activeNav.value = 1;
	} else if (path.startsWith("/cv")) {
		activeNav.value = 2;
	} else if (path.startsWith("/articles")) {
		activeNav.value = 3;
	} else if (path.startsWith("/square")) {
		activeNav.value = 4;
	} else {
		activeNav.value = 0;
	}
};

onMounted(() => {
	changeActivePath();
});

// 监听页面的变化
watch(
	() => route.params,
	() => {
		changeActivePath();
	}
);
</script>

<style scoped>
.nav {
	height: 100%;
}
</style>
