<template>
	<gal-card class="extra-card">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon class="icon" icon="sitemap" size="1em"></gal-icon
					>Staff
				</template>
				<template v-slot:end>
					<div class="icon-wrap">
						<gal-icon-button
							icon="databaseExport"
							class="icon"
							size="36px"
							bgColor="var(--main-color)"
							circle
							v-gal-tooltip="'导出STAFF'"
							@click="openDialog"
						></gal-icon-button>
						<gal-icon-button
							icon="down"
							class="icon"
							size="36px"
							bgColor="var(--main-color)"
							circle
							v-gal-tooltip="'折叠'"
							:data-tooltip-text="toggleBtnTooltipText"
							@click="toggleRolesCardVisibility"
						></gal-icon-button>
					</div>
				</template>
			</gal-card-header>
		</template>
		<div v-show="contentIsShow">
			<div
				class="row"
				v-for="(item, index) in info.staffs[0].staffList"
				:key="index"
			>
				<gal-tag>{{ item.modifier }}</gal-tag>
				<gal-link-button
					class="staff-item"
					v-for="item in item.names"
					:key="item.id"
					:to="item.id ? '/entries/index/' + item.id : '#'"
					:text="item.displayName"
					theme="outline"
				></gal-link-button>
			</div>
		</div>

		<gal-dialog ref="exportDialog">
			<gal-card class="export-dialog">
				<h2 class="dialog-title">导出STAFF</h2>
				<div ref="staffText" class="dialog-content">
					<div
						v-for="(item, index) in info.staffs[0].staffList"
						:key="index"
					>
						<span v-text="item.modifier"></span>：
						<span
							v-for="item in item.names"
							:key="item.id"
							v-text="item.displayName"
						></span>
					</div>
				</div>
				<div class="dialog-footer">
					<gal-button @click="copyStaffText">一键复制</gal-button>
					<gal-button @click="closeDialog">关闭</gal-button>
				</div>
			</gal-card>
		</gal-dialog>
	</gal-card>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
	info: {
		type: Object,
		required: true,
	},
});

const contentIsShow = ref(true);
const toggleBtnTooltipTextList = {
	show: "折叠",
	hide: "展开",
};
const toggleBtnTooltipText = ref("折叠");

const toggleRolesCardVisibility = () => {
	contentIsShow.value = !contentIsShow.value;
	toggleBtnTooltipText.value =
		toggleBtnTooltipTextList[contentIsShow.value ? "show" : "hide"];
};

const exportDialog = ref();
const openDialog = () => {
	exportDialog.value.show();
};
const closeDialog = () => {
	exportDialog.value.hide();
};

const staffText = ref();
const copyStaffText = async () => {
	// 点击 一键复制 按钮时，直接将 staffText 内的文字写入到剪切板
	// ps 写入剪切板不需要任何权限，读取剪切板需要用户授权
	await navigator.clipboard?.writeText(staffText.value.innerText);
	// todo 复制成功后的视觉反馈效果
};
</script>

<style scoped>
.icon {
	color: var(--main-color);
	margin-inline-end: 1em;
}

.theme-dark .icon {
	color: var(--main-font-color);
}
.icon-wrap {
	display: inline-flex;
	column-gap: 16px;
}
.icon-wrap .icon {
	font-size: 20px;
	margin-inline-end: 0;
}

.row {
	display: flex;
	padding: 1em;
	padding-block-start: 0;
	flex-wrap: wrap;
	column-gap: 8px;
	row-gap: 8px;
}

.export-dialog {
	width: 440px;
	padding: 24px;
}
.dialog-title {
	color: var(--main-color);
}
.theme-dark .dialog-title {
	color: var(--main-font-color);
}
.dialog-content {
	margin-top: 8px;
	font-size: 14px;
}
.dialog-footer {
	display: flex;
	justify-content: end;
}
</style>
