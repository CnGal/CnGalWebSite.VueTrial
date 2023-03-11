<template>
	<gal-header></gal-header>
	<gal-main class="main">
		<router-view></router-view>
	</gal-main>
	<gal-aside></gal-aside>
	<gal-footer v-if="!isSmallPage" class="footer"></gal-footer>
	<gal-footer-mobile v-else></gal-footer-mobile>
</template>

<script setup>
import { ref, onMounted } from "vue";
import galHeader from "../components/common/header/header.vue";
import galMain from "../components/common/main/main.vue";
import galFooter from "../components/common/footer/footer.vue";
import galFooterMobile from "../components/common/footer/footer-mobile.vue";
import galAside from "../components/common/aside/aside.vue";

const isSmallPage = ref(false);

const pageWidthChange = () => {
	isSmallPage.value = window.innerWidth < 768;
};

onMounted(() => {
	pageWidthChange();
	window.addEventListener("resize", pageWidthChange);
});
</script>

<style scoped>
.footer {
	margin-block-start: 16px;
}
.main-mobile {
	margin-block-end: 56px;
}

@media screen and (max-width: 768px) {
	.main {
		margin-block-end: 56px;
	}
}
</style>
