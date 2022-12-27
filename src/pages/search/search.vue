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
	<gal-card class="tags-wrap">
		<div class="tag-area">
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
			<div class="time-area">
				<galTag
					v-for="tag in timeList"
					:key="tag.name"
					v-text="tag.name"
					:simple="!searchTimes.includes(tag.name)"
					circle
					class="tag"
					@click="changeTime(tag.name)"
				></galTag>
				<galTag
					class="tag"
					circle
					@click="showPicker"
					v-if="!pickerIsShow"
				>
					{{ pickerTagTime ? pickerTagTime : "+ 自定义时间段" }}
				</galTag>
				<galDatepicker
					v-else
					v-model="datePickerTimes"
					type="daterange"
					unlink-panels
					range-separator="~"
					start-placeholder="Start"
					end-placeholder="End"
					size="small"
					@change="changeTimeByPicker"
				></galDatepicker>
			</div>
			<div class="types-area">
				<galTag
					v-for="tag in typesList.filter((item) => item.class === 1)"
					:key="tag.value"
					circle
					:simple="!searchTypes.includes(tag.value)"
					class="tag"
					v-text="tag.name"
					@click="changeTypes(tag.value)"
				></galTag>
			</div>
			<div class="types-area">
				<galTag
					v-for="tag in typesList.filter((item) => item.class === 2)"
					:key="tag.value"
					circle
					:simple="!searchTypes.includes(tag.value)"
					class="tag"
					v-text="tag.name"
					@click="changeTypes(tag.value)"
				></galTag>
			</div>
			<div class="types-area">
				<galTag
					v-for="tag in typesList.filter((item) => item.class === 4)"
					:key="tag.value"
					circle
					:simple="!searchTypes.includes(tag.value)"
					class="tag"
					v-text="tag.name"
					@click="changeTypes(tag.value)"
				></galTag>
			</div>
			<div class="types-area">
				<galTag
					v-for="tag in typesList.filter((item) => item.class === 3)"
					:key="tag.value"
					circle
					:simple="!searchTypes.includes(tag.value)"
					class="tag"
					v-text="tag.name"
					@click="changeTypes(tag.value)"
				></galTag>
			</div>
			<div class="types-area">
				<galTag
					v-for="tag in typesList.filter((item) => item.class === 5)"
					:key="tag.value"
					circle
					:simple="!searchTypes.includes(tag.value)"
					class="tag"
					v-text="tag.name"
					@click="changeTypes(tag.value)"
				></galTag>
			</div>
		</div>
	</gal-card>
	<gal-card
		class="data-area"
		width="full"
		:style="{ '--card-body-bg-color': 'transparent' }"
		v-if="searchData.pagedResultDto?.data.length"
	>
		<div
			v-for="(item, index) in searchData.pagedResultDto.data"
			:key="index"
			class="data-item"
		>
			<gal-game-card-rows
				class="rows"
				:rows="[
					item.article ||
						item.entry ||
						item.tag ||
						item.periphery ||
						item.video
				]"
				:type="
					item.article
						? 'article'
						: item.entry
						? 'entry'
						: item.tag
						? 'tag'
						: item.periphery
						? 'periphery'
						: item.video
						? 'video'
						: item.user
						? 'user'
						: ''
				"
				:rowHasCellTotal="1"
				:heightOverflowScroll="false"
			></gal-game-card-rows>
		</div>
	</gal-card>
	<gal-card class="data-area" v-else>
		<div class="no-data">
			<img
				class="no-data-img"
				src="images/default/UserMessagesNotFound.png"
				alt="摸摸鱼"
			/>
			<h3>搜索不到呢......不过你可以在这里 创建词条 或者 发布文章</h3>
		</div>
	</gal-card>
	<galPagination
		class="pagination"
		v-if="searchData.pagedResultDto"
		:total="searchData.pagedResultDto.totalCount"
		v-model:currentPage="currentPage"
		@currentChange="changePage"
	></galPagination>
</template>

<script>
document.title = "搜索 - CnGal 中文GalGame资料站";
</script>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { getHomeSearch } from "../../api/homeAPI/index.js";
import { formatDate } from "../../assets/common/js/formatDate.js";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const getTime = (date) => {
	const time = new Date(date);
	return time.getTime();
};

const sortList = [
	{ name: "默认排序", value: "" },
	{ name: "最后编辑时间", value: "lastEditTime" },
	{ name: "发布时间", value: "pubulishTime" },
	{ name: "创建时间", value: "createTime" },
	{ name: "热度", value: "readerCount" }
];
const typesList = [
	{ name: "词条", value: "entry", class: 1 },
	{ name: "游戏", value: "game", class: 1 },
	{ name: "角色", value: "role", class: 1 },
	{ name: "制作组", value: "productionGroup", class: 1 },
	{ name: "STAFF", value: "staff", class: 1 },
	{ name: "周边", value: "periphery", class: 2 },
	{ name: "设定集或画册等", value: "setorAlbumEtc", class: 2 },
	{ name: "原声集", value: "ost", class: 2 },
	{ name: "套装", value: "set", class: 2 },
	{ name: "激活码", value: "activationCode", class: 2 },
	{ name: "色纸", value: "coloredPaper", class: 2 },
	{ name: "徽章", value: "badge", class: 2 },
	{ name: "明信片", value: "postcard", class: 2 },
	{ name: "挂画", value: "hangPainting", class: 2 },
	{ name: "挂件", value: "keychain", class: 2 },
	{ name: "书签", value: "bookmark", class: 2 },
	{ name: "其它周边", value: "otherPeriphery", class: 2 },
	{ name: "标签", value: "tag", class: 3 },
	{ name: "文章", value: "article", class: 4 },
	{ name: "感想", value: "tought", class: 4 },
	{ name: "攻略", value: "strategy", class: 4 },
	{ name: "访谈", value: "Interview", class: 4 },
	{ name: "动态", value: "news", class: 4 },
	{ name: "评测", value: "evaluation", class: 4 },
	{ name: "周边文章", value: "peripheralArticle", class: 4 },
	{ name: "公告", value: "notice", class: 4 },
	{ name: "杂谈", value: "otherArticle", class: 4 },
	{ name: "二创", value: "fan", class: 4 },
	{ name: "视频", value: "video", class: 5 }
];
const timeList = [
	{
		name: "2018",
		value: `${getTime("2018/01/01")}-${getTime("2019/01/01")}`
	},
	{
		name: "2019",
		value: `${getTime("2019/01/01")}-${getTime("2020/01/01")}`
	},
	{
		name: "2020",
		value: `${getTime("2020/01/01")}-${getTime("2021/01/01")}`
	},
	{
		name: "2021",
		value: `${getTime("2021/01/01")}-${getTime("2022/01/01")}`
	},
	{ name: "2022", value: `${getTime("2022/01/01")}-${getTime("2023/01/01")}` }
];

const searchText = ref("");
const searchSort = reactive({
	value: "",
	sort: "desc"
});
const searchTypes = reactive([]);
const searchTimes = reactive([]);
const datePickerTimes = ref("");
const searchData = ref({});
const currentPage = ref(1);
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
	if (currentPage.value !== 1) {
		query.page = currentPage.value;
	}
	if (searchTimes.length) {
		query.times = searchTimes.map((timeName) => {
			if (timeName.includes("-")) {
				return timeName
					.split("-")
					.map((time) => new Date(time).getTime())
					.join("-");
			}

			const time = timeList.find((time) => time.name === timeName);
			return time.value;
		});
	}

	const res = await getHomeSearch(query);
	searchData.value = res.data;

	if (searchTimes.length) {
		query.times = searchTimes;
	}
	console.log(query);
	router.push({
		path: "/search",
		query
	});
};

const pickerIsShow = ref(false);
const pickerTagTime = ref("");
const showPicker = () => {
	if (pickerTagTime.value) {
		pickerTagTime.value = "";
		searchTimes.length = 0;
		changeTime();
		return;
	}
	pickerIsShow.value = true;
};

if (route.query.text) {
	searchText.value = route.query.text;
}
if (route.query.sort) {
	const sort = route.query.sort.split(" ");
	searchSort.value = sort[0];
	searchSort.sort = sort[1];
}
if (route.query.types) {
	searchTypes.push(
		...(Array.isArray(route.query.types)
			? route.query.types
			: [route.query.types])
	);
}
if (route.query.times) {
	const times = Array.isArray(route.query.times)
		? route.query.times
		: [route.query.times];
	searchTimes.push(...times);
	times.forEach((time) => {
		if (time.includes("-")) {
			pickerTagTime.value = time.replace("-", " ~ ").replaceAll("/", "-");
		}
	});
}
if (route.query.page) {
	currentPage.value = route.query.page;
}
getSearch();

const submitEvent = () => {
	currentPage.value = 1;
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
	currentPage.value = 1;
	getSearch();
};
const changeTime = (value) => {
	if (value) {
		if (searchTimes.includes(value)) {
			searchTimes.splice(searchTimes.indexOf(value), 1);
		} else {
			// 多选分支 暂不支持
			// searchTimes.push(value);
			searchTimes.splice(0, searchTimes.length, value);
			pickerTagTime.value = "";
		}
	}

	currentPage.value = 1;
	getSearch();
};
const changeTimeByPicker = (value) => {
	const start = new Intl.DateTimeFormat("zh-CN").format(value[0]);
	const end = new Intl.DateTimeFormat("zh-CN").format(value[1]);
	searchTimes.splice(0, searchTimes.length, start + "-" + end);
	currentPage.value = 1;
	pickerIsShow.value = false;
	pickerTagTime.value =
		formatDate(value[0], "YMD") + " ~ " + formatDate(value[1], "YMD");
	getSearch();
};
const changePage = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
	getSearch();
};

onMounted(() => {
	changePage();
});
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
.tags-wrap,
.data-area,
.data-item {
	margin-block-start: 12px;
}

.tag-area {
	font-size: 12px;
	display: grid;
	grid-template:
		"sort time" auto
		"type1 type2" auto
		"type3 type4" auto
		"type3 type5" auto
		/ 1fr 1fr;
	gap: 12px;
}

.sort-area,
.time-area,
.types-area {
	display: flex;
	align-items: start;
	flex-wrap: wrap;
	gap: 8px;
}

.sort-area {
	grid-area: sort;
}
.time-area {
	grid-area: time;
}
.types-area:nth-of-type(3) {
	grid-area: type1;
}
.types-area:nth-of-type(4) {
	grid-area: type3;
}
.types-area:nth-of-type(5) {
	grid-area: type2;
}
.types-area:nth-of-type(6) {
	grid-area: type4;
}
.types-area:nth-of-type(7) {
	grid-area: type5;
}
.tag {
	cursor: pointer;
}

.pagination {
	margin-top: 16px;
}

.time-area :deep(.el-date-editor) {
	flex: 0 0 170px;
}
.time-area :deep(.el-range__close-icon) {
	display: none;
}

.no-data {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}
.no-data-img {
	width: 50%;
}

@media screen and (max-width: 992px) {
	.tag-area {
		grid-template:
			"sort" auto
			"time" auto
			"type1" auto
			"type2" auto
			"type3" auto
			"type4" auto
			/ 1fr;
	}
}
</style>
