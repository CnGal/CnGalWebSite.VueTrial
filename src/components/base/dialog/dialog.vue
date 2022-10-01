<template>
	<teleport :to="'body'">
		<div class="dialog" v-show="isShow">
			<div class="overlay" @click="hide"></div>
			<div class="dialog-content">
				<slot></slot>
			</div>
		</div>
	</teleport>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(false);

const show = () => {
	isShow.value = true;
	document.body.style.overflow = "hidden";
};
const hide = () => {
	isShow.value = false;
	document.body.style.overflow = "";
};

defineExpose({
	show,
	hide,
});
</script>

<style scoped>
.dialog {
	position: fixed;
	inset: 0;
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--main-font-color);
}
.dialog-content {
	background-color: var(--main-bg-color);
}
.overlay {
	position: absolute;
	width: 100vw;
	height: 100vh;
	z-index: -1;
	background-color: #21212177;
}
.theme-dark .overlay {
	background-color: #cccccc77;
}
</style>
