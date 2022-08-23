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
	box-shadow: var(--main-shadow);
	border-radius: var(--main-border-radius);
}
</style>
