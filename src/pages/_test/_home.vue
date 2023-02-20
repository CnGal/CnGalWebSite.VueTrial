<template>
	<div class="test-box">
		<div class="nav-box">
			<gal-link to="/_test/_button">button</gal-link>
			<gal-link to="/_test/_icon">icon</gal-link>
			<gal-link to="/_test/_list">list</gal-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script setup></script>

<style scoped>
.test-box {
	display: flex;
}
.nav-box {
	margin-block-start: 8px;
	margin-block-end: 8px;
	padding-inline-start: 16px;
	width: 100px;
	min-height: 100vh;
	background-color: #fff;
}
.nav-box > a {
	display: block;
	padding-block: 8px;
}
.test-box > div:nth-child(2) {
	flex: 1;
}
</style>
