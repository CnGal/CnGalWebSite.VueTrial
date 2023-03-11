<template>
	<div class="aside">
		<div class="aside-item">
			<gal-icon-button
				class="icon"
				icon="star"
				theme="solid"
				circle
				v-gal-tooltip="'生日'"
				ref="birthdayButton"
				@click="
					birthdayDialog.show({
						type: 'element',
						value: birthdayButton.$el,
						fixed: true
					})
				"
			></gal-icon-button>
		</div>
		<div class="aside-item">
			<gal-icon-button
				class="icon"
				icon="star"
				theme="solid"
				circle
				v-gal-tooltip="'社区交流'"
				@click.stop="showCommunitySub()"
			></gal-icon-button>
			<div class="sub" v-if="isShowCommunitySub">
				<gal-link
					href="https://jq.qq.com/?_wv=1027&k=VFZGoQUe"
					target="_blank"
					v-gal-tooltip="'QQ'"
				>
					<gal-icon
						class="icon"
						:icon="'QQ'"
						:size="'32px'"
					></gal-icon>
				</gal-link>
				<gal-link
					href="https://weibo.com/cngalorg"
					target="_blank"
					v-gal-tooltip="'微博'"
				>
					<gal-icon
						class="icon"
						:icon="'weiboFill'"
						:size="'32px'"
					></gal-icon>
				</gal-link>
				<gal-icon-button
					class="icon"
					icon="star"
					theme="solid"
					circle
					@mouseover="isShowWechat = true"
					@mouseleave="isShowWechat = false"
				></gal-icon-button>
				<img
					v-if="isShowWechat"
					class="wx-code"
					src="https://image.cngal.org/images/2022/06/02/76142d8159b0.jpg"
					alt="微信二维码"
				/>
			</div>
		</div>
		<div class="aside-item">
			<gal-icon-button
				class="icon"
				icon="star"
				theme="solid"
				circle
				v-gal-tooltip="'工具箱'"
				@click.stop="showToolSub()"
			></gal-icon-button>
			<div class="sub" v-if="isShowToolSub">
				<gal-icon-button
					class="icon"
					icon="star"
					theme="solid"
					circle
					v-gal-tooltip="'转载视频'"
				></gal-icon-button>
				<gal-icon-button
					class="icon"
					icon="star"
					theme="solid"
					circle
					v-gal-tooltip="'转载文章'"
				></gal-icon-button>
				<gal-icon-button
					class="icon"
					icon="star"
					theme="solid"
					circle
					v-gal-tooltip="'合并词条'"
				></gal-icon-button>
			</div>
		</div>
		<div class="aside-item">
			<gal-icon-button
				class="icon"
				icon="star"
				theme="solid"
				circle
				v-gal-tooltip="'回到顶部'"
				@click="scrollToTop()"
			></gal-icon-button>
		</div>
	</div>
	<galBirthdayDialog ref="birthdayDialog"></galBirthdayDialog>
</template>

<script setup>
import { ref } from "vue";
import galBirthdayDialog from "./content/birthdaydialog.vue";

const birthdayDialog = ref(null);
const birthdayButton = ref(null);
const isShowToolSub = ref(false);
const isShowCommunitySub = ref(false);
const isShowWechat = ref(false);

const showToolSub = () => {
	if (isShowToolSub.value) {
		hideToolSub();
		return;
	}
	isShowToolSub.value = true;
	document.addEventListener("click", hideToolSub);

	isShowCommunitySub.value = false;
};
const hideToolSub = () => {
	isShowToolSub.value = false;
	document.removeEventListener("click", hideToolSub);
};

const showCommunitySub = () => {
	if (isShowCommunitySub.value) {
		hideCommunitySub();
		return;
	}
	isShowCommunitySub.value = true;
	document.addEventListener("click", hideCommunitySub);

	isShowToolSub.value = false;
};
const hideCommunitySub = () => {
	isShowCommunitySub.value = false;
	document.removeEventListener("click", hideCommunitySub);
};

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};
</script>

<style scoped>
.aside {
	position: fixed;
	z-index: 9;
	bottom: 125px;
	right: 50px;
	display: flex;
	flex-direction: column;
	row-gap: 16px;
}
.aside-item {
	display: flex;
	flex-direction: row-reverse;
	column-gap: 16px;
}
.icon {
	--icon-button-size: 40px;
	font-size: 20px;
}

.sub {
	display: flex;
	align-items: center;
	column-gap: 8px;
}
.sub .icon {
	--icon-button-size: 32px;
	font-size: 16px;
}

.wx-code {
	width: 200px;
	height: 200px;
	border: 5px solid #333333aa;
	position: fixed;
	bottom: 175px;
	right: 145px;
}
</style>
