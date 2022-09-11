<template>
	<header class="header">
		<slot></slot>
	</header>
</template>

<script setup></script>

<style scoped>
.header {
	--header-bg-color: #ffffffaa;
}
.theme-dark .header {
	--header-bg-color: var(--main-bg-color);
}
.header {
	height: var(--header-height, 64px);
	position: sticky;
	top: 0;
	display: flex;
	align-items: center;
	box-shadow: var(--main-shadow);
	padding: 0 16px;
	z-index: 9;
	background-color: var(--header-bg-color);
	backdrop-filter: blur(5px);
}
</style>
