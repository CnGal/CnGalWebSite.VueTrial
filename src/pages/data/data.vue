<template>
	<gal-card class="title-section">
		<h2>CnGal资料站数据汇总</h2>
		<div class="subArea">
			<span
				><gal-icon icon="archive"></gal-icon
				>{{ tableViewCountInfo?.entriesCount }}个词条</span
			>
			<span
				><gal-icon icon="stickerText"></gal-icon
				>{{ tableViewCountInfo?.articlesCount }}篇文章</span
			>
			<span
				><gal-icon icon="timer"></gal-icon
				>{{
					dateFormat(tableViewCountInfo?.lastEditTime)({
						format: "YMDhm",
						fill: true
					})
				}}</span
			>
		</div>
	</gal-card>
	<gal-card class="group-section" width="full">
		<gal-tabs
			v-model="activeGroupTab"
			:tabs="groupTabs"
			width="full"
		></gal-tabs>
	</gal-card>
	<gal-card class="table-section">table</gal-card>
</template>

<script>
document.title = "资料站数据汇总 - CnGal 中文GalGame资料站";
</script>

<script setup>
import { ref } from "vue";
import { getTableView, getBasicInforList } from "@/api/tableAPI/index.js";
import { dateFormat } from "@/assets/common/js/formatDate.js";

const tableViewCountInfo = ref(null);
const getTableViewData = async () => {
	const { data } = await getTableView();
	tableViewCountInfo.value = data;
};
getTableViewData();

const tableData = ref(null);
const getTableData = async () => {
	const { data } = await getBasicInforList();
	console.log(data);
	tableData.value = data;
};
getTableData();

const groupTabs = [
	{
		text: "游戏",
		icon: "gamepad"
	},
	{
		text: "制作组",
		icon: "users"
	},
	{
		text: "STAFF",
		icon: "users"
	},
	{
		text: "制作人",
		icon: "users"
	},
	{
		text: "角色",
		icon: "users"
	},
	{
		text: "游戏价格",
		icon: "users"
	},
	{
		text: "游戏评分",
		icon: "users"
	}
];
const activeGroupTab = ref(0);
</script>

<style scoped>
.title-section {
	text-align: center;
}
.title-section h2 {
	color: var(--main-color);
}
.title-section .subArea {
	margin-block-start: 12px;
	font-size: 14px;
	color: var(--gray-color);
}
.title-section .subArea > span {
	margin-inline-end: 8px;
}

.group-section {
	margin-top: 16px;
}
</style>
