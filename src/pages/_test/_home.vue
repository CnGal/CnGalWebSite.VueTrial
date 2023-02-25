<template>
	<div class="test-box">
		<gal-card class="left">
			<galCheckbox
				v-model="isDark"
				@change="changeDark"
				:label="isDark ? '黑夜模式' : '白天模式'"
			></galCheckbox>
			<br />
			<galCheckbox
				v-model="isTransparent"
				@change="changeTr"
				label="是否显示背景图片"
			></galCheckbox>
			<div class="nav-box">
				<gal-link to="/_test/_button">button</gal-link>
				<gal-link to="/_test/_icon">icon</gal-link>
				<gal-link to="/_test/_list">list</gal-link>
				<gal-link to="/_test/_linkbutton">linkbutton</gal-link>
			</div>
		</gal-card>
		<gal-card class="right">
			<router-view></router-view>
		</gal-card>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "@/store/index.js";
const store = useStore();

const isDark = ref(store.theme.isDark);
const isTransparent = ref(store.theme.isTransparent);

const changeDark = () => {
	store.changeTheme({
		color: isDark.value ? "#000000" : "#f06292"
	});
};
const changeTr = () => {
	store.changeTheme({
		isTransparent: isTransparent.value
	});
};
</script>

<style scoped>
.test-box {
	display: flex;
}
.nav-box {
	margin-block-start: 8px;
	margin-block-end: 8px;
	padding-inline-start: 16px;
	width: 100px;
	min-height: 100vh;
}
.nav-box > a {
	display: block;
	padding-block: 8px;
}

.right {
	flex: 1;
}
</style>
