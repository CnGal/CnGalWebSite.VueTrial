<template>
	<header class="header">
		<slot></slot>
	</header>
</template>

<script setup></script>

<style scoped>
.header {
	height: var(--header-mobile-heightt, 48px);
	position: sticky;
	top: 0;
	display: flex;
	align-items: center;
	box-shadow: var(--main-shadow);
	z-index: 9;
	background-color: var(--main-color);
}
</style>
