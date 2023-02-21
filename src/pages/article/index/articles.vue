<template>
	<img :src="info.mainPicture" :alt="info.name" class="header-img" />

	<gal_ArticlesContent :info="info"></gal_ArticlesContent>

	<galConmmentsContent
		class="comments-card"
		:id="id"
		:type="stateStore.commentType.commentArticle"
	></galConmmentsContent>
</template>

<script setup>
import { ref, watch } from "vue";
import gal_ArticlesContent from "@/components/articles/articlesContent.vue";
import { getArticleView } from "@/api/articlesAPI/index.js";
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

.comments-card {
	margin-block-start: 16px;
}
</style>
