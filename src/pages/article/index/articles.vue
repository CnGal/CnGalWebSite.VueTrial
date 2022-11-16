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
				<div v-if="info.userInfor?.ranks.some((tag) => tag.type === 1)">
					<img
						class="tag-image"
						:src="item.image"
						:alt="item.text"
						v-for="(item, index) in info.userInfor?.ranks.filter(
							(tag) => tag.type === 1
						)"
						:key="index"
					/>
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
			<div class="relevances-group" v-if="info.relevances?.length">
				<div
					v-for="informations in info.relevances"
					:key="informations.modifier"
				>
					<gal-icon icon="tags" size="1em"></gal-icon>
					<gal-link-button
						class="relevances-item"
						v-for="item in informations.informations"
						:key="item.id"
						:to="
							(informations.modifier === '词条'
								? '/entries/index/'
								: '/articles/index/') + item.id
						"
						theme="solid"
					>
						{{ item.displayName }}
					</gal-link-button>
				</div>
			</div>
			<div class="article-last-edit-time">
				<gal-icon icon="pencilMdi" size="1em"></gal-icon>
				最后编辑：{{ formatDate(info.lastEditTime, "YMD") }}
			</div>
		</main>
	</article>

	<gal-card class="comments-card" v-if="comments" width="full">
		<template v-slot:headerStart>
			<gal-icon class="icon header-icon" icon="note" size="1em"></gal-icon
			>留言板
		</template>
		<galConmmentsList :comments="comments?.items"></galConmmentsList>

		<div class="login-wrap">
			<galLinkButton to="/login" theme="solid" class="login">
				<galIcon icon="login"></galIcon>
				登入后发表评论
			</galLinkButton>
		</div>
	</gal-card>
</template>

<script setup>
import { ref, watch } from "vue";
import { getArticleView } from "@/api/articlesAPI/index.js";
import { getComments } from "@/api/commentsAPI/index.js";
import { formatDate } from "@/assets/common/js/formatDate.js";
import { useStateTypeStore } from "@/store/statetype.js";
import { useRoute } from "vue-router";
const route = useRoute();
const stateStore = useStateTypeStore();
const id = ref(route.params.id);

const info = ref({});
const getInfo = async () => {
	const { data } = await getArticleView(id.value);
	info.value = data;

	document.title = data.name + " - CnGal 中文GalGame资料站";
};
getInfo();

const comments = ref(null);
const getComment = async (newId) => {
	const { data } = await getComments(
		stateStore.commentType.commentArticle,
		newId
	);
	comments.value = data;
};
getComment(id.value);

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
.icon.header-icon {
	margin-inline-end: 1em;
}
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
	aspect-ratio: 1 / 1;
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
.tag-image {
	width: 50px;
	height: 50px;
	aspect-ratio: 1 / 1;
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

.relevances-group {
	color: var(--main-color);
	margin-block-end: 12px;
}
.relevances-group > div {
	display: flex;
	justify-content: end;
	column-gap: 8px;
}
.relevances-item {
	font-size: 12px;
}

.article-last-edit-time {
	display: flex;
	align-items: flex-end;
	justify-content: end;
	column-gap: 4px;
	font-size: 14px;
	color: var(--main-color);
	margin-block-end: 16px;
}

.comments-card {
	margin-block-start: 16px;
}
.comments-card :deep(.card-main) {
	background-color: transparent;
}
.login-wrap {
	padding: 0.5em;
	text-align: center;
	background-color: var(--main-bg-color);
	margin-block-start: 12px;
}
.login {
	overflow: hidden;
	margin: 0.5em auto;
}
.login.login.login.login.login:hover {
	background-color: var(--main-color);
	color: var(--white-color);
}
</style>
