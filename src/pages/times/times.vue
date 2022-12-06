<template>
	<gal-card class="search-area">
		<h2 class="times-page-title">游戏发售时间汇总</h2>
		<div class="times-search-area">
			<galDatepicker
				v-model="datePickerTimes"
				type="month"
				simplt
				@change="datePickerTimesChange"
			></galDatepicker>
		</div>
	</gal-card>
	<gal-card class="data-area" width="full">
		<gal-game-card-rows
			class="rows"
			:rows="gameList"
			type="entry"
			:rowHasCellTotal="1"
			:heightOverflowScroll="false"
		></gal-game-card-rows>
	</gal-card>
</template>

<script>
document.title = "游戏发售时间汇总 - CnGal 中文GalGame资料站";
</script>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { getPublishGamesByTime } from "@/api/entriesAPI/index.js";
import { dateFormat } from "@/assets/common/js/formatDate.js";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const searchDate = reactive({
	date: dateFormat(Date.now())
});
const datePickerTimes = ref(searchDate.date("YMD"));
const gameList = ref([]);

const getGamesByTime = async () => {
	const { data } = await getPublishGamesByTime({
		year: searchDate.date("Y"),
		month: searchDate.date("M")
	});
	gameList.value = data;
};

const updateRouter = () => {
	router.push({
		path: "/times",
		query: {
			year: searchDate.date("Y"),
			month: searchDate.date("M")
		}
	});
};

const datePickerTimesChange = (date) => {
	searchDate.date = dateFormat(date);
	getGamesByTime();
	updateRouter();
};

onMounted(() => {
	if (route.query.year && route.query.month) {
		searchDate.date = dateFormat(
			`${route.query.year}-${route.query.month}-01`
		);
		datePickerTimes.value = searchDate.date("YMD");
	}
	getGamesByTime();
});
</script>

<style scoped>
.times-page-title {
	color: var(--main-color);
	text-align: center;
}
.times-search-area {
	margin-block-start: 1em;
	display: flex;
	justify-content: center;
}
</style>
