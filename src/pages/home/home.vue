<template>
	<gal-banner class="banner"></gal-banner>
	<galWelcome></galWelcome>
	<gal-card class="card">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon icon="newspaper" size="1em"></gal-icon
					>&nbsp;&nbsp;最新动态
				</template>
				<template v-slot:end>
					<gal-link-button
						:text="'查看更多'"
						:icon="'shareAll'"
					></gal-link-button>
				</template>
			</gal-card-header>
		</template>
		<gal-news-list :list="newsList"></gal-news-list>
	</gal-card>
	<gal-card class="card">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon icon="send" size="1em"></gal-icon
					>&nbsp;&nbsp;近期新作
				</template>
				<template v-slot:end>
					<gal-link-button
						:text="'查看更多'"
						:icon="'shareAll'"
					></gal-link-button>
				</template>
			</gal-card-header>
		</template>
		<gal-game-card-list :list="recentIssuelGameList"></gal-game-card-list>
	</gal-card>
	<gal-card class="card">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon icon="send2" size="1em"></gal-icon
					>&nbsp;&nbsp;即将发售
				</template>
				<template v-slot:end>
					<gal-link-button
						:text="'查看更多'"
						:icon="'shareAll'"
					></gal-link-button>
				</template>
			</gal-card-header>
		</template>
		<gal-game-card-list :list="newestGameView"></gal-game-card-list>
	</gal-card>
	<gal-card class="card">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon icon="newspaper" size="1em"></gal-icon
					>&nbsp;&nbsp;文章
				</template>
				<template v-slot:end>
					<gal-link-button
						:text="'查看更多'"
						:icon="'shareAll'"
					></gal-link-button>
				</template>
			</gal-card-header>
		</template>
		<gal-game-card-list :list="articlesView"></gal-game-card-list>
	</gal-card>
	<gal-card class="card">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon icon="pencil" size="1em"></gal-icon
					>&nbsp;&nbsp;最近编辑
				</template>
				<template v-slot:end>
					<gal-link-button
						:text="'查看更多'"
						:icon="'shareAll'"
					></gal-link-button>
				</template>
			</gal-card-header>
		</template>
		<gal-game-card-list :list="recentEditView"></gal-game-card-list>
	</gal-card>
	<gal-card class="card">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon icon="note" size="1em"></gal-icon>&nbsp;&nbsp;公告
				</template>
				<template v-slot:end>
					<gal-link-button
						:text="'查看更多'"
						:icon="'shareAll'"
					></gal-link-button>
				</template>
			</gal-card-header>
		</template>
		<gal-game-card-list :list="noticesView"></gal-game-card-list>
	</gal-card>
	<gal-card class="card">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon icon="star" size="1em"></gal-icon
					>&nbsp;&nbsp;友情链接
				</template>
			</gal-card-header>
		</template>
		<gal-game-card-list :list="friendLinksList"></gal-game-card-list>
	</gal-card>
</template>

<script setup>
import { ref } from "vue";
import galBanner from "../../components/home/banner/banner.vue";
import galWelcome from "../../components/home/welcome/welcome.vue";
import galNewsList from "../../components/home/gameCard/newsCardlist.vue";
import galGameCardList from "../../components/home/gameCard/gameCardList.vue";

import { useStore } from "../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

// 获取 近期新作列表
import {
	getHomeNewsView,
	getHomeRecentIssuelGameView,
	getHomeNewestGameView,
	getHomeArticlesView,
	getHomeRecentEditView,
	getHomeNoticesView,
	getHomeFriendLinksView
} from "../../api/homeAPI/index.js";
let newsList = ref([]);
let recentIssuelGameList = ref([]);
let newestGameView = ref([]);
let articlesView = ref([]);
let recentEditView = ref([]);
let noticesView = ref([]);
let friendLinksList = ref([]);
(async () => {
	const data = await getHomeNewsView();
	newsList.value = data.data.splice(0, isMobile ? 3 : 6);
})();
(async () => {
	const data = await getHomeRecentIssuelGameView();
	recentIssuelGameList.value = data.data;
})();
(async () => {
	const data = await getHomeNewestGameView();
	newestGameView.value = data.data;
})();
(async () => {
	const data = await getHomeArticlesView();
	articlesView.value = data.data;
})();
(async () => {
	const data = await getHomeRecentEditView();
	recentEditView.value = data.data;
})();
(async () => {
	const data = await getHomeNoticesView();
	noticesView.value = data.data.splice(0, 6);
})();
(async () => {
	const data = await getHomeFriendLinksView();
	friendLinksList.value = data.data;
})();
</script>
<style scoped>
.banner {
	margin-block-end: 10px;
}
.card {
	margin-block-start: 16px;
}
</style>
