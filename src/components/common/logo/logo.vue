<template>
	<h1>
		<router-link class="logo" to="/">
			<img
				src="/images/logo.png"
				alt="CnGal资料站 logo"
				class="logoImg"
			/>
			<span class="logoText">CnGal资料站</span>
		</router-link>
	</h1>
</template>

<script setup></script>

<style scoped>
.logo {
	--logo-font-color: var(--pink-color);
}
.theme-dark .logo {
	--logo-font-color: var(--main-font-color);
}
.logo {
	display: flex;
	align-items: center;
	column-gap: 8px;
}
.logoImg {
	height: 35px;
	aspect-ratio: 1 / 1;
}
.logoText {
	font-size: 24px;
	color: var(--logo-font-color, #f06292);
}

@media screen and (max-width: 1200px) {
	.logoText {
		display: none;
	}
}
</style>
