<template>
	<header class="header">
		<slot></slot>
	</header>
</template>

<script setup></script>

<style scoped>
.header {
	height: var(--header-height, 64px);
	position: sticky;
	top: 0;
	display: flex;
	align-items: center;
	box-shadow: var(--main-shadow);
	padding: 0 16px;
	z-index: 9;
	background-color: #ffffffaa;
	backdrop-filter: blur(5px);
}
</style>
