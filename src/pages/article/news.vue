<template>
	<gal-Tabs
		class="tabs"
		:tabs="tabs"
		v-model="activeTab"
		width="full"
	></gal-Tabs>

	<gal-collapse
		class="collapse"
		v-for="news in newsData"
		:key="news.groupId"
		v-model="activeNames[news.groupId]"
		@change="collapseChange"
		accordion
	>
		<gal-collapse-item name="1">
			<template #title>
				<img class="img" :src="news.groupImage" :alt="news.groupName" />
				<div class="title">{{ news.groupName }}</div>
			</template>
			<gal-link-button :href="news.outlink" target="_blank">
				<gal-icon icon="shareAll"></gal-icon>前往微博主页
			</gal-link-button>
			<gal-link-button :to="'/entries/index/' + news.groupId">
				<gal-icon icon="shareAll"></gal-icon>查看词条
			</gal-link-button>
		</gal-collapse-item>
	</gal-collapse>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { getNewSummary } from "@/api/articlesApi/index.js";

const tabs = [
	{
		text: "本周",
		icon: "timer"
	},
	{
		text: "本月",
		icon: "clockTimeFour"
	},
	{
		text: "本年",
		icon: "calendarText"
	},
	{
		text: "全部",
		icon: "allInclusive"
	}
];

const activeTab = ref(0);
const newsData = ref([]);
const activeNames = ref({});

(async () => {
	const { data } = await getNewSummary(tabs[activeTab.value].text);
	newsData.value = data;
	data.forEach((item) => {
		activeNames.value[item.groupId] = "0";
	});
})();

const collapseChange = (val) => {
	console.log(val);
};
</script>

<style scoped>
.tabs {
	height: 72px;
}

.collapse {
	margin-block-start: 16px;
}
.img {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
.title {
	font-size: 24px;
	font-weight: bold;
	margin-inline-start: 12px;
}
</style>
