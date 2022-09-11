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
	align-items: center;
	color: var(--main-font-color);
	background-color: var(--main-bg-color);
	min-height: 35px;
	padding: 1em 1em 12px;
}
html:not(.theme-dark) .card-header {
	color: var(--main-color);
}
h2 {
	display: flex;
	align-items: center;
	font-size: 1.25em;
}

@media screen and (max-width: 768px) {
	h2 {
		font-size: 14px;
		font-weight: normal;
	}
	.card-header {
		margin-block-end: 12px;
		padding-block-start: 0;
		padding-block-end: 0;
		box-shadow: var(--main-shadow);
		border-radius: var(--main-border-radius);
	}
}
</style>
