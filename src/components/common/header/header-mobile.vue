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
	box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
	z-index: 9;
	background-color: var(--main-color);
}
</style>
