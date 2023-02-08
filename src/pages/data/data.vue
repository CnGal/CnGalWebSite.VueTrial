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
			@changeActiveTab="changeActiveGroupTab"
		></gal-tabs>
	</gal-card>
	<gal-card class="table-section">
		<component
			v-if="tableShowData?.length"
			:data="tableShowData"
			:is="
				[
					gal_gameTable,
					gal_groupTable,
					gal_staffTable,
					gal_makerTable,
					gal_roleTable,
					gal_steamTable,
					gal_gameScoreTable
				][activeGroupTab]
			"
		></component>
		<div class="table-footer">
			<div class="info">
				<span
					>显示第{{
						tableShowSize * (tableShowActivePage - 1) + 1
					}}到第
					{{ tableShowSize * tableShowActivePage }}条记录，</span
				>
				<span>总共{{ tableData?.length }}条记录</span>
				<span>每页显示</span>
				<gal-dropdown
					width="100px"
					class="size-dropdown"
					@itemSelect="dropdownItemSelectEvent"
				>
					<gal-option :selected="true">10</gal-option>
					<gal-option>20</gal-option>
					<gal-option>40</gal-option>
					<gal-option>80</gal-option>
					<gal-option>200</gal-option>
					<gal-option>1000</gal-option>
				</gal-dropdown>
				<span>条记录</span>
			</div>
			<div class="pagination">
				<gal-pagination
					ref="paginationElement"
					:total="tableData?.length"
					:page-size="tableShowSize"
					:current-page="tableShowActivePage"
					@currentChange="currentChange"
				></gal-pagination>
			</div>
		</div>
	</gal-card>
</template>

<script>
document.title = "资料站数据汇总 - CnGal 中文GalGame资料站";
</script>

<script setup>
import { ref, nextTick } from "vue";
import {
	getTableView,
	getBasicInforList,
	getGroupInforList,
	getStaffInforList,
	getMakerInforList,
	getRoleInforList,
	getSteamInforList,
	getGameScoreList
} from "@/api/tableAPI/index.js";
import { dateFormat } from "@/assets/common/js/formatDate.js";
import gal_gameTable from "./table/gameTable.vue";
import gal_groupTable from "./table/groupTable.vue";
import gal_staffTable from "./table/staffTable.vue";
import gal_makerTable from "./table/makerTable.vue";
import gal_roleTable from "./table/roleTable.vue";
import gal_steamTable from "./table/steamTable.vue";
import gal_gameScoreTable from "./table/scoreTable.vue";

const tableViewCountInfo = ref(null);
const getTableViewData = async () => {
	const { data } = await getTableView();
	tableViewCountInfo.value = data;
};
getTableViewData();

const tableShowSize = ref(10);
const tableShowActivePage = ref(1);
const paginationElement = ref(null);

const tableShowData = ref(null);
const tableData = ref(null);
const basicTableData = ref(null);
const groupTableData = ref(null);
const staffTableData = ref(null);
const makerTableData = ref(null);
const roleTableData = ref(null);
const steamTableData = ref(null);
const gameScoreTableData = ref(null);
const getTableData = async () => {
	const size = tableShowSize.value;
	if (activeGroupTab.value === 0) {
		// 游戏
		if (basicTableData.value) {
			tableData.value = basicTableData.value.basicInfors;
			tableShowData.value = basicTableData.value.basicInfors.slice(
				0,
				size
			);
			return;
		}
		const { data } = await getBasicInforList();
		basicTableData.value = data;
		tableData.value = data.basicInfors;
		tableShowData.value = data.basicInfors.slice(0, size);
	} else if (activeGroupTab.value === 1) {
		// 制作组
		if (groupTableData.value) {
			tableData.value = groupTableData.value.groupInfors;
			tableShowData.value = groupTableData.value.groupInfors.slice(
				0,
				size
			);
			return;
		}
		const { data } = await getGroupInforList();
		groupTableData.value = data;
		tableData.value = data.groupInfors;
		tableShowData.value = data.groupInfors.slice(0, size);
	} else if (activeGroupTab.value === 2) {
		// STAFF
		if (staffTableData.value) {
			tableData.value = staffTableData.value.staffInfors;
			tableShowData.value = staffTableData.value.staffInfors.slice(
				0,
				size
			);
			return;
		}
		const { data } = await getStaffInforList();
		staffTableData.value = data;
		tableData.value = data.staffInfors;
		tableShowData.value = data.staffInfors.slice(0, size);
	} else if (activeGroupTab.value === 3) {
		// 制作人
		if (makerTableData.value) {
			tableData.value = makerTableData.value.makerInfors;
			tableShowData.value = makerTableData.value.makerInfors.slice(
				0,
				size
			);
			return;
		}
		const { data } = await getMakerInforList();
		makerTableData.value = data;
		tableData.value = data.makerInfors;
		tableShowData.value = data.makerInfors.slice(0, size);
	} else if (activeGroupTab.value === 4) {
		// 角色
		if (roleTableData.value) {
			tableData.value = roleTableData.value.roleInfors;
			tableShowData.value = roleTableData.value.roleInfors.slice(0, size);
			return;
		}
		const { data } = await getRoleInforList();
		roleTableData.value = data;
		tableData.value = data.roleInfors;
		tableShowData.value = data.roleInfors.slice(0, size);
	} else if (activeGroupTab.value === 5) {
		// 游戏价格
		if (steamTableData.value) {
			tableData.value = steamTableData.value.steamInfors;
			tableShowData.value = steamTableData.value.steamInfors.slice(
				0,
				size
			);
			return;
		}
		const { data } = await getSteamInforList();
		steamTableData.value = data;
		tableData.value = data.steamInfors;
		tableShowData.value = data.steamInfors.slice(0, size);
	} else if (activeGroupTab.value === 6) {
		// 游戏评分
		if (gameScoreTableData.value) {
			tableData.value = gameScoreTableData.value.gameScores;
			tableShowData.value = gameScoreTableData.value.gameScores.slice(
				0,
				size
			);
			return;
		}
		const { data } = await getGameScoreList();
		gameScoreTableData.value = data;
		tableData.value = data.gameScores;
		tableShowData.value = data.gameScores.slice(0, size);
	}
};

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
getTableData();

const changeActiveGroupTab = () => {
	tableShowData.value = null;
	getTableData();
};

const dropdownItemSelectEvent = (el) => {
	const newSize = parseInt(el.textContent);
	tableShowSize.value = newSize;
	tableShowActivePage.value = 1;
	tableShowData.value = tableData.value.slice(0, newSize);
	nextTick(() => {
		paginationElement.value?.refresh();
	});
};
const currentChange = (val) => {
	tableShowActivePage.value = val;
	tableShowData.value = tableData.value.slice(
		tableShowSize.value * (tableShowActivePage.value - 1),
		tableShowSize.value * tableShowActivePage.value
	);
};
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
.table-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-block-start: 8px;
	font-size: 14px;
}
.table-footer :deep(.size-dropdown) {
	margin-inline-start: 8px;
	margin-inline-end: 8px;
	border-radius: 5px;
}
.table-footer .pagination {
	width: 400px;
}
</style>
