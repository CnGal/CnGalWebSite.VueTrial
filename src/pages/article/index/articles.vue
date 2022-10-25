<template>
	<img :src="info.mainPicture" :alt="info.name" class="header-img" />

	<article class="article">
		<header>
			<h1 class="head">
				{{ info.name }}
			</h1>
			<div class="info">
				<span>
					<gal-icon icon="calendarAlt" size="1em"></gal-icon>
					{{ formatDate(info.createTime, "YMD") }}
				</span>
				<span>
					<gal-icon icon="eye" size="1em"></gal-icon>
					{{ info.readerCount }}次阅读
				</span>
				<span>
					<gal-icon icon="thumbsUp" size="1em"></gal-icon>
					{{ info.thumbsUpCount }}人点赞
				</span>
			</div>
			<RouterLink
				:to="'/space/index/' + info.userInfor?.id"
				class="author"
			>
				<img
					:src="info.userInfor?.photoPath"
					:alt="info.userInfor?.name"
					class="author-photo"
				/>
				<div class="author-info">
					<div class="author-tags">
						<galTag
							v-for="(
								item, index
							) in info.userInfor?.ranks.filter(
								(tag) => tag.type === 0
							)"
							:key="index"
							class="tag"
							:bgColor="item.css.replace('bg-', '')"
						>
							{{ item.text }}
						</galTag>
					</div>
					<div class="author-name">
						{{ info.userInfor?.name }}
					</div>
				</div>
			</RouterLink>
		</header>
		<hr />
		<main class="article-main">
			<gal-markdown v-html="info.mainPage"></gal-markdown>
			<div class="icon-wrap">
				<gal-icon-button
					icon="heartOutline"
					class="icon"
					size="40px"
					bgColor="var(--main-color)"
					circle
					v-gal-tooltip="'收藏'"
				></gal-icon-button>
				<gal-icon-button
					icon="thumbsUp"
					class="icon"
					size="40px"
					bgColor="var(--main-color)"
					circle
					v-gal-tooltip="'点赞'"
				></gal-icon-button>
			</div>
			<div class="article-last-edit-time">
				<gal-icon icon="pencilMdi" size="1em"></gal-icon>
				最后编辑：{{ formatDate(info.lastEditTime, "YMD") }}
			</div>
		</main>
	</article>
</template>

<script setup>
import { ref, watch } from "vue";
import { getArticleView } from "@/api/articlesAPI/index.js";
import { formatDate } from "@/assets/common/js/formatDate.js";
import { useRoute } from "vue-router";
const route = useRoute();
const id = ref(route.params.id);

const info = ref({});
const getInfo = async () => {
	const { data } = await getArticleView(id.value);
	info.value = data;
};
getInfo();

// 监听 articles/index/:id  页面的变化
watch(
	() => route.params,
	(newURL) => {
		id.value = newURL.id;
		getInfo();
	}
);
</script>

<style scoped>
.header-img {
	width: 100%;
}
.article {
	overflow: hidden;
	padding: 0 16px;
	background-color: var(--main-bg-color);
}
.head {
	margin: 32px auto 16px;
	font-size: 28px;
}
.info {
	margin-block-start: 5px;
	margin-block-end: 10px;
	color: var(--gray-color);
	font-size: 14px;
}
.info > span {
	display: inline-flex;
	column-gap: 0.5em;
	margin-inline-end: 1em;
}

.author {
	display: inline-flex;
	align-items: center;
	column-gap: 16px;
}
.author-photo {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
.author-info {
	display: flex;
	flex-direction: column;
	row-gap: 3px;
}
.author-tags {
	display: flex;
	flex-wrap: wrap;
	column-gap: 8px;
}
.author-name {
	font-size: 18px;
	font-weight: bold;
	color: var(--block-color);
}

.article-main {
	margin-block-start: 32px;
}

.icon-wrap {
	display: flex;
	justify-content: center;
	column-gap: 16px;
	font-size: 24px;
	margin: 16px 0;
}

.article-last-edit-time {
	display: flex;
	align-items: flex-end;
	justify-content: end;
	column-gap: 4px;
	color: var(--main-color);
	margin-block-end: 16px;
}
</style>
