<template>
	<section class="not-fount-wrapper">
		<img src="/images/default/UserMessagesNotFound.png" alt="404图片" />
		<h1>这里似乎没有东西呢......</h1>
		<p>
			我们会在 {{ time }} 秒后帮你返回
			<gal-link :to="hasBackRouter ? backRouter : '/home'">{{
				hasBackRouter ? "上一页" : "主页"
			}}</gal-link>
			哦~
		</p>
	</section>
</template>

<script setup>
import { ref, onUnmounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const time = ref(5);
const backRouter = localStorage.getItem("pageRedirect");
const hasBackRouter = !(backRouter === null || backRouter === "/");

const timer = setInterval(() => {
	time.value--;
	if (time.value === 0) {
		clearInterval(timer);
		router.push(backRouter || "/");
		localStorage.removeItem("pageRedirect");
	}
}, 1000);

onUnmounted(() => {
	clearInterval(timer);
});
</script>

<style scoped>
.not-fount-wrapper {
	max-width: 500px;
	text-align: center;
	margin: 0 auto;
	padding: 1em 0;
	background-color: var(--main-bg-color);
}
.not-fount-wrapper img {
	width: 70%;
}
.not-fount-wrapper h1 {
	margin-block: 0.5em;
}
.not-fount-wrapper p {
	font-size: 12px;
}
</style>
