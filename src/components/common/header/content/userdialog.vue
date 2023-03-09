<template>
	<gal-dialog ref="userDialog" :isModal="true">
		<gal-card class="user-dialog" width="full" level="box">
			<div class="header">
				<img
					class="user-photo"
					:src="store.userInfo?.basicInfor?.photoPath"
					:alt="store.userInfo?.basicInfor?.name"
				/>
				<div class="user-name">
					{{ store.userInfo?.basicInfor?.name }}
				</div>
				<div>
					<galTag
						v-for="(
							item, index
						) in store.userInfo?.basicInfor?.ranks.filter(
							(tag) => tag.type === 0
						)"
						:key="index"
						class="tag"
						:bgColor="item.css.replace('bg-', '')"
					>
						{{ item.text }}
					</galTag>
				</div>
			</div>
			<gal-link-button width="full">每日签到</gal-link-button>
			<gal-link-button width="full">内容中心</gal-link-button>
			<gal-link-button width="full">个人空间</gal-link-button>
			<gal-link-button width="full">编辑资料</gal-link-button>
			<gal-link-button width="full">消息通知</gal-link-button>
			<gal-link-button width="full">主题设置</gal-link-button>
			<gal-button theme="text" width="full" @click="logout()"
				>退出登入</gal-button
			>
		</gal-card>
	</gal-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "@/store/index.js";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();

const userDialog = ref(null);

const logout = () => {
	store.logout();
	hide();
	router.push("/account/login");
};

const show = (arg) => {
	userDialog.value.show(arg);
};
const hide = () => {
	userDialog.value.hide();
};

defineExpose({
	show,
	hide
});
</script>

<style scoped>
.user-dialog {
	width: 300px;
	padding: 0;
	--dialog-overlay-bg-color: transparent;
}

.header {
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 6px;
	padding: 10px;
	padding-block-end: 16px;
	border-block-end: thin solid #e5e5e5;
}
.user-photo {
	width: 60px;
	height: 60px;
	border-radius: 50%;
}
.tag + .tag {
	margin-inline-start: 8px;
}
</style>
