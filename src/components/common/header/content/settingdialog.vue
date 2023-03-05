<template>
	<gal-dialog ref="settingDialog" :isModal="true">
		<gal-card class="setting-dialog">
			<h2 class="dialog-title">主题设置</h2>
			<h3>主题颜色</h3>
			<p>
				你可以从下方选择一个喜欢的颜色作为主题颜色，选择黑色可以进入夜间模式
			</p>
			<div>
				<gal-button
					v-for="item in colorList"
					:key="item"
					class="color"
					:style="{
						'--button-bg-color': item,
						'--button-hover-bg-color': item,
						'--button-border-radius': 'unset'
					}"
					theme="solid"
					@click="changeTheme(item)"
				></gal-button>
			</div>
			<h3>背景图</h3>
			<p>
				显示背景图会将卡片设置为半透明状态，目前建议使用明亮的图片作为背景
			</p>
			<div>
				<galCheckbox
					v-model="isTransparent"
					@change="changeTr"
					label="是否显示背景图片"
				></galCheckbox>
			</div>
		</gal-card>
	</gal-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "@/store/index.js";
const store = useStore();

const colorList = [
	"#f44336",
	"#f06292",
	"#9c27b0",
	"#673ab7",
	"#3f51b5",
	"#2196f3",
	"#03a9f4",
	"#00bcd4",
	"#009688",
	"#4caf50",
	"#8bc34a",
	"#cddc39",
	"#ffeb3b",
	"#ffc107",
	"#ff9800",
	"#ff5722",
	"#795548",
	"#607d8b",
	"#000000"
];
const changeTheme = (theme) => {
	store.changeTheme({
		color: theme
	});
};

const isTransparent = ref(store.theme.isTransparent);

const changeTr = () => {
	store.changeTheme({
		isTransparent: isTransparent.value
	});
};

const settingDialog = ref(null);
const show = () => {
	settingDialog.value.show();
};
const hide = () => {
	settingDialog.value.hide();
};

defineExpose({
	show,
	hide
});
</script>

<style scoped>
.setting-dialog {
	width: 440px;
	padding: 24px;
}
.dialog-title {
	color: var(--main-color);
}
.theme-dark .dialog-title {
	color: var(--main-font-color);
}
.color {
	display: inline-flex;
	border: none;
	width: 28px;
	height: 28px;
	vertical-align: bottom;
}
</style>
