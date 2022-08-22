<template>
	<header class="card-header">
		<h2>
			<slot name="start"></slot>
		</h2>
		<slot name="end"></slot>
	</header>
</template>

<script setup></script>

<style scoped>
.card-header {
	display: flex;
	justify-content: space-between;
	height: 35px;
}
h2 {
	color: var(--main-color);
	font-size: 1.25em;
}
</style>
