<template>
	<nav class="nav">
		<ul class="nav-menu">
			<li
				class="nav-menu-item"
				v-for="(item, index) in navList"
				:key="index"
			>
				<router-link :to="item.link">{{ item.text }}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script setup>
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
		link: "/",
		text: "CV"
	},
	{
		link: "/article",
		text: "文章"
	},
	{
		link: "/",
		text: "广场"
	}
];
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

.nav-menu-item {
	flex: 0 1 auto;
	min-width: 90px;
	text-align: center;
}

.nav-menu-item a {
	display: block;
	color: #00000088;
	font-size: 14px;
	height: 100%;
	line-height: var(--header-height, 64px);
}
.nav-menu-item a:hover {
	background-color: #f7f7f7;
}
</style>
