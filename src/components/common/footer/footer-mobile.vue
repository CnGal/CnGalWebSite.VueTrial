<template>
	<footer class="footer">
		<gal-nav></gal-nav>
	</footer>
</template>

<script setup>
import galNav from "../nav/nav.vue";
</script>

<style scoped>
.footer {
	--footer-height: 56px;
	--footer-bg-color: var(--main-bg-color);
}
.footer {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: var(--footer-height);
	background-color: var(--footer-bg-color);
}
</style>
