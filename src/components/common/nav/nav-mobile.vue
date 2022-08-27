<template>
	<nav class="nav">
		<ul class="nav-menu">
			<li class="nav-menu-item">
				<router-link to="/">
					<gal-icon icon="home" size="24px"></gal-icon>
					<div>主页</div>
				</router-link>
			</li>
			<li class="nav-menu-item">
				<router-link to="/entries">
					<gal-icon icon="archive" size="24px"></gal-icon>
					<div>词条</div></router-link
				>
			</li>
			<li class="nav-menu-item">
				<router-link to="/entries">
					<gal-icon icon="cake" size="24px"></gal-icon>
					<div>周年庆</div></router-link
				>
			</li>
			<li class="nav-menu-item">
				<router-link to="/entries">
					<gal-icon icon="stickerText" size="24px"></gal-icon>
					<div>文章</div></router-link
				>
			</li>
			<li class="nav-menu-item">
				<router-link to="/entries">
					<gal-icon icon="timer" size="24px"></gal-icon>
					<div>广场</div></router-link
				>
			</li>
		</ul>
	</nav>
</template>

<script setup></script>

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
.nav-menu-item :deep(.icon) {
	margin-inline-end: 0;
}
</style>
