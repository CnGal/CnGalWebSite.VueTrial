<template>
	<gal-button ref="importButton" class="import" @click="clickEvent"
		>导出数据</gal-button
	>
	<gal-dialog
		class="popover"
		ref="popover"
		:position="{
			type: 'element'
		}"
		@click="dialogClickEvent"
	>
		<gal-button class="import" @click="downloadEXCEL">EXCEL</gal-button>
	</gal-dialog>
</template>

<script setup>
import { ref } from "vue";
import * as XLSX from "xlsx";
const props = defineProps({
	data: {
		type: [Object],
		required: true
	}
});

const importButton = ref(null);

const popover = ref(null);
const isOpening = ref(false);
const dialogClickEvent = (ev) => {
	popover.value.hide();
	isOpening.value = false;
};

const clickEvent = () => {
	if (isOpening.value) {
		return;
	}
	popover.value.show(importButton.value.$el);
	isOpening.value = true;
};

const downloadEXCEL = () => {
	const data = props.data.map((item) => {
		delete item.id;
		return item;
	});
	let ws = XLSX.utils.json_to_sheet(data);
	ws = changeExcelTitle(ws);
	const wb = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
	XLSX.writeFile(wb, "游戏汇总表.xlsx");
};
const titleMap = {
	realId: "ID",
	name: "名称",
	issueTime: "发行时间",
	productionGroup: "制作组",
	original: "原作",
	gamePlatforms: "游戏平台",
	engine: "引擎",
	publisher: "发行商",
	gameNickname: "游戏别称",
	tags: "标签",
	issueMethod: "发行方式",
	officialWebsite: "官网",
	steamId: "Steam平台ID",
	qQgroupGame: "QQ群",
	anotherNameGroup: "别称",
	bilibili: "B站",
	microBlog: "微博",
	anotherName: "别称",
	gameName: "登场游戏",
	cv: "声优",
	anotherNameRole: "别称",
	gender: "性别",
	birthday: "生日",
	haircolor: "发色",
	pupilcolor: "瞳色",
	figureData: "身材数据",
	figureSubjective: "身材(主观)",
	clothesAccessories: "服饰",
	roleIdentity: "角色身份",
	bloodType: "血型",
	roleHeight: "身高",
	roleAge: "年龄",
	roleTaste: "兴趣"
};
const changeExcelTitle = (ws) => {
	const range = XLSX.utils.decode_range(ws["!ref"]);

	for (let i = range.s.c; i <= range.e.c; i++) {
		const cell = XLSX.utils.encode_cell({ c: i, r: 0 });
		const cellValue = ws[cell].v;
		ws[cell].v = titleMap[cellValue];
	}
	return ws;
};
</script>

<style scoped>
.import {
	border: none;
	--button-font-color: var(--main-color);
}
</style>
