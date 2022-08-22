<template>
	<section class="card">
		<slot name="header"></slot>
		<main class="card-main">
			<slot></slot>
		</main>
	</section>
</template>

<script setup></script>

<style scoped>
.card {
	background-color: var(--white-color);
	padding: 1em;
}
.card-main {
	margin-block-start: 12px;
}
</style>
