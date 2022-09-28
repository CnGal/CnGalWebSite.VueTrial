<template>
	<gal-card class="extra-card" :toggle="true">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="sitemap" size="1em"></gal-icon>Staff
		</template>
		<template v-slot:headerEnd>
			<gal-icon-button
				icon="databaseExport"
				class="icon export"
				size="36px"
				bgColor="var(--main-color)"
				circle
				v-gal-tooltip="'导出STAFF'"
				@click="openDialog"
			></gal-icon-button>
		</template>
		<div>
			<div v-for="(staffs, index) in info.staffs" :key="index">
				<h3 class="staff-content-head">
					{{ staffs.modifier }}
				</h3>
				<div
					class="row"
					v-for="(staffList, index) in staffs.staffList"
					:key="index"
				>
					<gal-tag>{{ staffList.modifier }}</gal-tag>
					<gal-link-button
						class="staff-item"
						v-for="item in staffList.names"
						:key="item.id"
						:to="item.id ? '/entries/index/' + item.id : '#'"
						:text="item.displayName"
						theme="outline"
					></gal-link-button>
				</div>
			</div>
		</div>

		<gal-dialog ref="exportDialog">
			<gal-card class="export-dialog">
				<h2 class="dialog-title">导出STAFF</h2>
				<div ref="staffText" class="dialog-content">
					<div v-for="(staffs, index) in info.staffs" :key="index">
						<h3 class="staff-content-head">
							{{ staffs.modifier }}
						</h3>
						<div
							v-for="(item, index) in staffs.staffList"
							:key="index"
							class="staff-group-row"
						>
							<span v-text="item.modifier"></span>：
							<span
								v-for="(item, index) in item.names"
								class="staff-name"
								:key="item.id"
								v-text="
									(index === 0 ? '' : '，') + item.displayName
								"
							></span>
						</div>
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

const exportDialog = ref();
const openDialog = () => {
	exportDialog.value.show();
};
const closeDialog = () => {
	exportDialog.value.hide();
};

const staffText = ref();
const copyState = ref("");
const copyStaffText = async () => {
	// 点击 一键复制 按钮时，直接将 staffText 内的文字写入到剪切板
	// tip 写入剪切板不需要任何权限，读取剪切板需要用户授权
	try {
		await navigator.clipboard?.writeText(staffText.value.innerText);
		copyState.value = "success";
		console.log("复制成功");
		// todo 想不出来动画效果
	} catch (err) {
		copyState.value = "error";
		console.log("复制失败");
		console.log(err);
	}
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

.icon.export {
	font-size: 20px;
	margin-inline-end: 16px;
}

.staff-content-head {
	color: var(--main-color);
	margin-block-end: 8px;
	padding-inline-start: 14px;
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
	line-height: 2;
}
.dialog-content .staff-content-head {
	color: var(--main-color);
	margin: 0;
	padding: 0;
}
.dialog-footer {
	display: flex;
	justify-content: end;
}
</style>
