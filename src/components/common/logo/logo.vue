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
	display: flex;
	align-items: center;
}
.logoImg {
	height: 35px;
	aspect-ratio: 1 / 1;
}
.logoText {
	font-size: 24px;
	color: var(--main-color, #f06292);
	margin-inline-start: 8px;
}

@media screen and (max-width: 1200px) {
	.logoText {
		display: none;
	}
}
</style>
