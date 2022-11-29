<template>
	<gal-card class="search-area">
		<h2 class="times-page-title">游戏发售时间汇总</h2>
		<div class="times-search-area">
			<galDatepicker
				v-model="datePickerTimes"
				type="month"
				simplt
			></galDatepicker>
		</div>
	</gal-card>
</template>

<script>
document.title = "游戏发售时间汇总 - CnGal 中文GalGame资料站";
</script>

<script setup>
import { ref, reactive } from "vue";
const datePickerTimes = ref("");
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
