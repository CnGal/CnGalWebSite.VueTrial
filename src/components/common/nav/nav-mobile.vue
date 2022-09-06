<template>
	<nav class="nav">
		<ul class="nav-menu">
			<li
				class="nav-menu-item"
				v-for="(item, index) in navList"
				:key="index"
			>
				<router-link :to="item.link">
					<gal-icon :icon="item.icon" size="24px"></gal-icon>
					<div>{{ item.text }}</div>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script setup>
const navList = [
	{
		link: "/",
		text: "首页",
		icon: "home"
	},
	{
		link: "/entries",
		text: "词条",
		icon: "archive"
	},
	{
		link: "/",
		text: "CV",
		icon: "alignVerticalTop"
	},
	{
		link: "/article",
		text: "文章",
		icon: "stickerText"
	},
	{
		link: "/",
		text: "广场",
		icon: "timer"
	}
];
</script>

<style scoped>
.nav-menu {
	display: flex;
}
.nav-menu-item {
	flex: 1;
	height: 56px;
}
.nav-menu-item a {
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: var(--gray-color);
	font-size: 12px;
}
</style>
