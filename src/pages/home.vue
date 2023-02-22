<template>
	<gal-header></gal-header>
	<gal-main class="main">
		<router-view></router-view>
	</gal-main>
	<gal-footer v-if="!isSmallPage" class="footer"></gal-footer>
	<gal-footer-mobile v-else></gal-footer-mobile>
	<div class="web-bg" ref="webBG"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import galHeader from "../components/common/header/header.vue";
import galMain from "../components/common/main/main.vue";
import galFooter from "../components/common/footer/footer.vue";
import galFooterMobile from "../components/common/footer/footer-mobile.vue";
import { getUserView } from "@/api/spaceAPI/index.js";
import { useStore } from "../store/index.js";
const store = useStore();

const isSmallPage = ref(false);

const pageWidthChange = () => {
	isSmallPage.value = window.innerWidth < 768;
};

onMounted(() => {
	pageWidthChange();
	window.addEventListener("resize", pageWidthChange);
});

const webBG = ref(null);
(async () => {
	const { data } = await getUserView();
	store.webBG = data.mBgImage;
	webBG.value.style.backgroundImage = `url(${data.mBgImage})`;
})();
</script>

<style scoped>
.footer {
	margin-block-start: 16px;
}
.main-mobile {
	margin-block-end: 56px;
}

.web-bg {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

@media screen and (max-width: 768px) {
	.main {
		margin-block-end: 56px;
	}
}
</style>
