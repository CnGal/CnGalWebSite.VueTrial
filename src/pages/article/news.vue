<template>
	<gal-Tabs
		class="tabs"
		:tabs="tabs"
		v-model="activeTab"
		width="full"
		@changeActiveTab="changeActiveTab"
	></gal-Tabs>

	<gal-collapse
		class="collapse"
		v-for="news in newsData"
		:key="news.groupId"
		accordion
	>
		<gal-collapse-item :name="1" class="first">
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
		<gal-collapse-item
			:name="index + 2"
			v-for="(item, index) in news.articles"
			:key="item.id"
		>
			<template #title>
				<div class="title">
					{{ item.displayName }} -
					{{ formatDateWithHowLong(item.lastEditTime) }}
				</div>
			</template>
			<gal-game-card-rows
				class="rows"
				type="article"
				:rows="[item]"
				:hideTypeTag="true"
				:rowHasCellTotal="1"
			></gal-game-card-rows>
		</gal-collapse-item>
	</gal-collapse>

	<galPagination
		class="pagination"
		v-if="newsData"
		:total="allNewsData.length"
		v-model:currentPage="currentPage"
		@currentChange="changePage"
	></galPagination>
</template>

<script setup>
import { ref } from "vue";
import { getNewSummary } from "@/api/articlesApi/index.js";
import { formatDateWithHowLong } from "@/assets/common/js/formatDate.js";

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
const allNewsData = ref([]);
const newsData = ref([]);
const currentPage = ref(1);

const getNewsData = async () => {
	const { data } = await getNewSummary(tabs[activeTab.value].text);
	allNewsData.value = data;
	newsData.value = data.slice(0, 10);
};
getNewsData();

const changeActiveTab = () => {
	currentPage.value = 1;
	getNewsData();
};
const changePage = (val) => {
	newsData.value = allNewsData.value.slice((val - 1) * 10, val * 10);
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
.first .title {
	font-size: 24px;
	font-weight: bold;
}
.title {
	margin-inline-start: 12px;
}

.pagination {
	margin-block-start: 16px;
}
</style>
