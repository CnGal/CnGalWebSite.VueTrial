<template>
	<footer class="footer">
		<gal-nav-mobile></gal-nav-mobile>
	</footer>
</template>

<script setup>
import galNavMobile from "../nav/nav-mobile.vue";
</script>

<style scoped>
.footer {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--card-bg-color);
}
</style>
