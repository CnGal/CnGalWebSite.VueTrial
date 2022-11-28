<template>
	<nav class="nav">
		<gal-Tabs
			class="nav-tabs"
			type="link"
			:tabs="navList.value"
			:width="isSmallPage ? 'full' : 'default'"
			v-model="activeNav"
		></gal-Tabs>
	</nav>
</template>

<script setup>
import { ref, onMounted, watch, reactive } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const isSmallPage = ref(false);

const navList = reactive({
	value: [
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
	],
	icon: ["home", "archive", "alignVerticalTop", "stickerText", "timer"]
});
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

	if (isSmallPage.value) {
		navList.value = navList.value.map((item, index) => {
			return {
				...item,
				icon: index === activeNav.value ? navList.icon[index] : ""
			};
		});
	}
};

const pageWidthChange = () => {
	isSmallPage.value = window.innerWidth < 768;
};

onMounted(() => {
	pageWidthChange();
	window.addEventListener("resize", pageWidthChange);

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

@media screen and (max-width: 768px) {
	.nav-tabs {
		--tabs-font-size: 12px;
	}
}
</style>
