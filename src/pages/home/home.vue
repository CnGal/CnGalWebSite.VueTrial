<template>
	<gal-banner class="banner"></gal-banner>

	<galWelcome></galWelcome>

	<gal-card
		class="section"
		width="full"
		:transparent="store.isSmallPage ? true : undefined"
	>
		<template v-slot:headerStart>
			<gal-icon icon="newspaper"></gal-icon>最新动态
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/articles/news">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>
		<gal-list
			class="news-list"
			:rowHasCellTotal="{
				xxLarge: 2,
				xLarge: 2,
				large: 2,
				medium: 1,
				small: 1
			}"
		>
			<gal-list-item
				v-for="(item, index) in newsList.showData"
				:key="index"
			>
				<gal-news-card :newsInfo="item"></gal-news-card>
			</gal-list-item>
		</gal-list>
	</gal-card>

	<gal-card
		class="section"
		:width="store.isSmallPage ? 'full' : 'fit'"
		:transparent="store.isSmallPage ? true : undefined"
	>
		<template v-slot:headerStart>
			<gal-icon icon="send"></gal-icon>近期新作
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/times">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>

		<gal-list
			class="game-list"
			:rowHasCellTotal="{
				xxLarge: 6,
				xLarge: 6,
				large: 4,
				medium: 3,
				small: 2
			}"
		>
			<gal-list-item
				v-for="(item, index) in recentIssuelGameList.showData"
				:key="index"
			>
				<galHomeGameCard :data="item"></galHomeGameCard>
			</gal-list-item>
		</gal-list>
	</gal-card>

	<gal-card
		class="section"
		:width="store.isSmallPage ? 'full' : 'fit'"
		:transparent="store.isSmallPage ? true : undefined"
	>
		<template v-slot:headerStart>
			<gal-icon icon="send2"></gal-icon>即将发售
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/times">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>
		<gal-list
			class="game-list"
			:rowHasCellTotal="{
				xxLarge: 6,
				xLarge: 6,
				large: 4,
				medium: 3,
				small: 2
			}"
		>
			<gal-list-item
				v-for="(item, index) in newestGameView.showData"
				:key="index"
			>
				<galHomeGameCard :data="item"></galHomeGameCard>
			</gal-list-item>
		</gal-list>
	</gal-card>
	<gal-card
		class="section"
		:width="store.isSmallPage ? 'full' : 'fit'"
		:transparent="store.isSmallPage ? true : undefined"
	>
		<template v-slot:headerStart>
			<gal-icon icon="newspaper"></gal-icon>文章
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/articles">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>
		<gal-list
			class="game-list"
			:rowHasCellTotal="{
				xxLarge: 6,
				xLarge: 6,
				large: 4,
				medium: 3,
				small: 2
			}"
		>
			<gal-list-item
				v-for="(item, index) in articlesView.showData"
				:key="index"
			>
				<galHomeGameCard :data="item"></galHomeGameCard>
			</gal-list-item>
		</gal-list>
	</gal-card>
	<gal-card
		class="section"
		:width="store.isSmallPage ? 'full' : 'fit'"
		:transparent="store.isSmallPage ? true : undefined"
	>
		<template v-slot:headerStart>
			<gal-icon icon="video"></gal-icon>视频
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/search?types=video">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>
		<gal-list
			class="game-list"
			:rowHasCellTotal="{
				xxLarge: 6,
				xLarge: 6,
				large: 4,
				medium: 3,
				small: 2
			}"
		>
			<gal-list-item
				v-for="(item, index) in videosView.showData"
				:key="index"
			>
				<galHomeGameCard :data="item"></galHomeGameCard>
			</gal-list-item>
		</gal-list>
	</gal-card>
	<gal-card
		class="section"
		:width="store.isSmallPage ? 'full' : 'fit'"
		:transparent="store.isSmallPage ? true : undefined"
	>
		<template v-slot:headerStart>
			<gal-icon icon="pencil"></gal-icon>最近编辑
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/search?sort=lastEditTime+desc&types=game">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>
		<gal-list
			class="game-list"
			:rowHasCellTotal="{
				xxLarge: 6,
				xLarge: 6,
				large: 4,
				medium: 3,
				small: 2
			}"
		>
			<gal-list-item
				v-for="(item, index) in recentEditView.showData"
				:key="index"
			>
				<galHomeGameCard :data="item"></galHomeGameCard>
			</gal-list-item>
		</gal-list>
	</gal-card>
	<gal-card
		class="section"
		:width="store.isSmallPage ? 'full' : 'fit'"
		:transparent="store.isSmallPage ? true : undefined"
	>
		<template v-slot:headerStart>
			<gal-icon icon="note"></gal-icon>公告
		</template>
		<template v-slot:headerEnd>
			<gal-link-button to="/">
				<gal-icon icon="shareAll"></gal-icon>查看更多
			</gal-link-button>
		</template>
		<gal-list
			class="game-list"
			:rowHasCellTotal="{
				xxLarge: 6,
				xLarge: 6,
				large: 4,
				medium: 3,
				small: 2
			}"
		>
			<gal-list-item
				v-for="(item, index) in noticesView.showData"
				:key="index"
			>
				<galHomeGameCard :data="item"></galHomeGameCard>
			</gal-list-item>
		</gal-list>
	</gal-card>
	<gal-card
		class="section"
		:width="store.isSmallPage ? 'full' : 'fit'"
		:transparent="store.isSmallPage ? true : undefined"
	>
		<template v-slot:headerStart>
			<gal-icon icon="star"></gal-icon>友情链接
		</template>
		<gal-list
			class="game-list"
			:rowHasCellTotal="{
				xxLarge: 6,
				xLarge: 6,
				large: 4,
				medium: 3,
				small: 2
			}"
		>
			<gal-list-item
				v-for="(item, index) in friendLinksList.showData"
				:key="index"
			>
				<galHomeGameCard :data="item"></galHomeGameCard>
			</gal-list-item>
		</gal-list>
	</gal-card>
</template>

<script>
document.title = "CnGal 中文GalGame资料站";
</script>

<script setup>
import { ref, watch, reactive } from "vue";
import galBanner from "../../components/home/banner/banner.vue";
import galWelcome from "../../components/home/welcome/welcome.vue";
import { useStore } from "../../store/index.js";
import {
	getHomeNewsView,
	getHomeRecentIssuelGameView,
	getHomeNewestGameView,
	getHomeArticlesView,
	getHomeRecentEditView,
	getHomeNoticesView,
	getHomeFriendLinksView,
	getHomeVideosView
} from "../../api/homeAPI/index.js";

const store = useStore();

let newsList = reactive({
	data: [],
	showData: []
});
let recentIssuelGameList = reactive({
	data: [],
	showData: []
});
let newestGameView = reactive({
	data: [],
	showData: []
});
let articlesView = reactive({
	data: [],
	showData: []
});
let recentEditView = reactive({
	data: [],
	showData: []
});
let noticesView = reactive({
	data: [],
	showData: []
});
let friendLinksList = reactive({
	data: [],
	showData: []
});
let videosView = reactive({
	data: [],
	showData: []
});
(async () => {
	const { data } = await getHomeNewsView();
	newsList.data = data;
	newsList.showData = data.slice(0, store.isSmallPage ? 3 : 6);
})();
(async () => {
	const { data } = await getHomeRecentIssuelGameView();
	recentIssuelGameList.data = data;
	recentIssuelGameList.showData = data.slice(0, store.isSmallPage ? 6 : 12);
})();
(async () => {
	const { data } = await getHomeNewestGameView();
	newestGameView.data = data;
	newestGameView.showData = data.slice(0, store.isSmallPage ? 6 : 12);
})();
(async () => {
	const { data } = await getHomeArticlesView();
	articlesView.data = data;
	articlesView.showData = data.slice(0, store.isSmallPage ? 6 : 12);
})();
(async () => {
	const { data } = await getHomeRecentEditView();
	recentEditView.data = data;
	recentEditView.showData = data.slice(0, store.isSmallPage ? 6 : 12);
})();
(async () => {
	const { data } = await getHomeNoticesView();
	noticesView.data = data;
	noticesView.showData = data.slice(0, 6);
})();
(async () => {
	const { data } = await getHomeFriendLinksView();
	friendLinksList.data = data;
	friendLinksList.showData = data;
})();
(async () => {
	const { data } = await getHomeVideosView();
	videosView.data = data;
	videosView.showData = data.slice(0, store.isSmallPage ? 6 : 12);
})();

watch(
	() => store.isSmallPage,
	() => {
		newsList.showData = newsList.data.slice(0, store.isSmallPage ? 3 : 6);
		recentIssuelGameList.showData = recentIssuelGameList.data.slice(
			0,
			store.isSmallPage ? 6 : 12
		);
		newestGameView.showData = newestGameView.data.slice(
			0,
			store.isSmallPage ? 6 : 12
		);
		articlesView.showData = articlesView.data.slice(
			0,
			store.isSmallPage ? 6 : 12
		);
		videosView.showData = videosView.data.slice(
			0,
			store.isSmallPage ? 6 : 12
		);
		recentEditView.showData = recentEditView.data.slice(
			0,
			store.isSmallPage ? 6 : 12
		);
	}
);
</script>
<style scoped>
.banner {
	margin-block-end: 10px;
}
.section {
	margin-block-start: 16px;
}

.news-list {
	--list-column-gap: 0;
}

@media screen and (max-width: 768px) {
	.news-list,
	.game-list {
		--list-row-gap: 12px;
		margin-block-start: 12px;
	}
}
</style>
