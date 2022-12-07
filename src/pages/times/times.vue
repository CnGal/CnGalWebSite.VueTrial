<template>
	<gal-card class="search-area">
		<h2 class="times-page-title">游戏发售时间汇总</h2>
		<div class="times-search-area">
			<gal-button class="time-btn" @click="prevMonth">
				<gal-icon
					class="icon search-icon"
					icon="arrowLeftThick"
				></gal-icon>
				&nbsp;上个月</gal-button
			>
			<galDatepicker
				v-model="datePickerTimes"
				type="month"
				:clearable="false"
				simplt
				@change="datePickerTimesChange"
			></galDatepicker>
			<gal-button class="time-btn" @click="nextMonth">
				下个月&nbsp;<gal-icon
					class="icon search-icon"
					icon="arrowRightThick"
				></gal-icon
			></gal-button>
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
import {
	dateFormat,
	getLastMonth,
	getNextMonth
} from "@/assets/common/js/formatDate.js";
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
	datePickerTimes.value = searchDate.date("YMD");
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
const prevMonth = () => {
	searchDate.date = dateFormat(new Date(getLastMonth(searchDate.date("YM"))));
	getGamesByTime();
	updateRouter();
};
const nextMonth = () => {
	searchDate.date = dateFormat(new Date(getNextMonth(searchDate.date("YM"))));
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

.time-btn {
	--button-font-color: var(--main-color);
	border: none;
}

.data-area {
	--card-body-bg-color: transparent;
	margin-block-start: 1em;
}
.rows {
	--rows-bg-color: transparent;
}
</style>
