<template>
	<nav class="nav">
		<ul class="nav-menu">
			<li class="nav-menu-item">
				<router-link to="/">首页</router-link>
			</li>
			<li class="nav-menu-item">
				<router-link to="/entries">词条</router-link>
			</li>
			<li class="nav-menu-item">
				<a href="#">文章</a>
			</li>
			<li class="nav-menu-item">
				<a href="#">广场</a>
			</li>
			<li class="nav-menu-item">
				<a href="#">周年庆</a>
			</li>
		</ul>
	</nav>
</template>

<script setup></script>

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
