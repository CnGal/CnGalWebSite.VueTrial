<template>
	<gal-card class="search-area" width="full">
		<galInput
			v-model="searchText"
			type="search"
			simplt
			placeholder="可以搜索哦~"
			autofocus
			:submitEvent="submitEvent"
		></galInput>
	</gal-card>
	<gal-card
		class="data-area"
		width="full"
		:style="{ '--bgColor-main': 'transparent' }"
	>
		<div
			v-for="(item, index) in searchData.pagedResultDto?.data"
			:key="index"
			class="data-item"
		>
			<gal-game-card-rows
				class="rows"
				:rows="[item.article || item.entry]"
				:type="item.article ? 'article' : 'entry'"
				:rowHasCellTotal="1"
				:heightOverflowScroll="false"
			></gal-game-card-rows>
		</div>
	</gal-card>
</template>

<script>
document.title = "搜索 - CnGal 中文GalGame资料站";
</script>

<script setup>
import { ref } from "vue";
import { getHomeSearch } from "../../api/homeAPI/index.js";
import { useRouter } from "vue-router";

const router = useRouter();

const searchText = ref("");
const searchData = ref({});
const getSearch = async () => {
	const res = await getHomeSearch({
		text: searchText.value
	});
	searchData.value = res.data;

	const query = {};
	if (searchText.value) {
		query.text = searchText.value;
	}
	router.push({
		path: "/search",
		query
	});
};
getSearch();

const submitEvent = () => {
	getSearch();
};
</script>

<style scoped>
.search-area {
	height: 100px;
}
.search-area :deep(.card-main) {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

:deep(.input-wrap) {
	max-width: 500px;
}
:deep(.input) {
	width: 100%;
}

.data-area,
.data-item {
	margin-block-start: 12px;
}
</style>
