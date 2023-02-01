<template>
	<div class="about-wrapper">
		<gal-card class="nav-card" width="full">
			<gal-tree
				class="tree"
				v-if="documents?.length"
				:data="documents"
				:defaultSelectedKey="activeItemKey"
				@nodeSelected="nodeSelected"
			></gal-tree>
		</gal-card>
		<div>
			<gal_ArticlesContent
				:info="info"
				:showIconWrap="false"
			></gal_ArticlesContent>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import gal_ArticlesContent from "@/components/articles/articlesContent.vue";
import { getDocuments } from "../../api/homeAPI/index.js";
import { getArticleView } from "@/api/articlesAPI/index.js";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const activeItemKey = route.hash.slice(1);

let documents = ref([]);
(async () => {
	const data = await getDocuments();
	documents.value = data.data;
})();

const info = ref({});

const nodeSelected = async (trigger, item) => {
	router.replace("#" + trigger.dataset.key);
	const { data } = await getArticleView(item.id);
	info.value = data;

	document.title = data.name + " - CnGal 中文GalGame资料站";
};
</script>

<style scoped>
.about-wrapper {
	display: flex;
}
.nav-card {
	--card-body-bg-color: var(--main-bg-color);
	margin-right: 20px;
}
.nav-card .tree {
	width: 300px;
}
</style>
