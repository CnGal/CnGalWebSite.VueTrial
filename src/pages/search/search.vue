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
	<gal-card class="tag-area">
		<div class="sort-area">
			<galTag
				v-for="tag in sortList"
				:key="tag.value"
				v-text="tag.name"
				:simple="tag.value !== searchSort.value"
				circle
				class="tag"
				@click="changeSort(tag.value)"
			></galTag>
			<galTag
				class="tag"
				circle
				v-if="searchSort.value && searchSort.sort === 'desc'"
				@click="changeSort(searchSort.value, 'asc')"
			>
				<galIcon icon="sortDesc"></galIcon>逆序
			</galTag>
			<galTag
				class="tag"
				circle
				v-if="searchSort.value && searchSort.sort === 'asc'"
				@click="changeSort(searchSort.value, 'desc')"
			>
				<galIcon icon="sortAsc"></galIcon>顺序
			</galTag>
		</div>
		<div class="types-area">
			<galTag
				v-for="tag in typesList"
				:key="tag.value"
				circle
				:simple="!searchTypes.includes(tag.value)"
				class="tag"
				v-text="tag.name"
				@click="changeTypes(tag.value)"
			></galTag>
		</div>
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
				:rows="[item.article || item.entry || item.tag]"
				:type="item.article ? 'article' : item.entry ? 'entry' : 'tag'"
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
import { ref, reactive } from "vue";
import { getHomeSearch } from "../../api/homeAPI/index.js";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const sortList = [
	{ name: "默认排序", value: "" },
	{ name: "最后编辑时间", value: "lastEditTime" },
	{ name: "发布时间", value: "pubulishTime" },
	{ name: "创建时间", value: "createTime" },
	{ name: "热度", value: "readerCount" }
];
const typesList = [
	{ name: "词条", value: "entry" },
	{ name: "游戏", value: "game" },
	{ name: "角色", value: "role" },
	{ name: "制作组", value: "productionGroup" },
	{ name: "STAFF", value: "staff" }
];

const searchText = ref("");
const searchSort = reactive({
	value: "",
	sort: "desc"
});
const searchTypes = reactive([]);
const searchData = ref({});
const getSearch = async () => {
	const query = {};
	if (searchText.value) {
		query.text = searchText.value;
	}
	if (searchSort.value) {
		query.sort =
			searchSort.value + (searchSort.sort === "desc" ? " desc" : "");
	}
	if (searchTypes.length) {
		query.types = searchTypes;
	}

	const res = await getHomeSearch(query);
	searchData.value = res.data;

	router.push({
		path: "/search",
		query
	});
};

if (route.query.text) {
	searchText.value = route.query.text;
} else if (route.query.sort) {
	const sort = route.query.sort.split(" ");
	searchSort.value = sort[0];
	searchSort.sort = sort[1];
} else if (route.query.types) {
	searchTypes.push(...route.query.types);
}
getSearch();

const submitEvent = () => {
	getSearch();
};
const changeSort = (value, sort) => {
	searchSort.value = value;
	if (sort) {
		searchSort.sort = sort;
	}
	getSearch();
};
const changeTypes = (value) => {
	if (searchTypes.includes(value)) {
		searchTypes.splice(searchTypes.indexOf(value), 1);
	} else {
		searchTypes.push(value);
	}
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
.tag-area,
.data-area,
.data-item {
	margin-block-start: 12px;
}

.tag-area {
	font-size: 12px;
}

.sort-area {
	display: flex;
	flex-wrap: wrap;
	column-gap: 8px;
}
.tag {
	cursor: pointer;
}
</style>
