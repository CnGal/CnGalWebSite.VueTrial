<template>
	<main class="main">
		<slot></slot>
	</main>
</template>

<script setup></script>

<style scoped>
.main {
	width: var(--main-width, 80vw);
	margin: 12px auto 0;
}

@media screen and (max-width: 768px) {
	.main {
		margin: var(--main-margin);
	}
}
</style>
