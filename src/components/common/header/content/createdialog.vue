<template>
	<gal-dialog
		ref="createDialog"
		:position="{
			type: 'element'
		}"
	>
		<gal-card class="create-dialog" width="full">
			<gal-link-button width="full">创建词条</gal-link-button>
			<gal-link-button width="full">发布文字</gal-link-button>
			<gal-link-button width="full">发布视频</gal-link-button>
			<gal-link-button width="full">创建标签</gal-link-button>
			<gal-link-button width="full">创建周边</gal-link-button>
		</gal-card>
	</gal-dialog>
</template>

<script setup>
import { ref } from "vue";

const createDialog = ref(null);
const show = (arg) => {
	createDialog.value.show(arg);
};
const hide = () => {
	createDialog.value.hide();
};

defineExpose({
	show,
	hide
});
</script>

<style scoped>
.create-dialog {
	width: 150px;
}
</style>
