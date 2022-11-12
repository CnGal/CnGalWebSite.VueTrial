<template>
	<gal-Tabs
		class="tabs"
		:tabs="tabs"
		v-model="activeTab"
		width="full"
	></gal-Tabs>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { getNewSummary } from "@/api/articlesApi/index.js";

const tabs = [
	{
		text: "本周",
		icon: "timer"
	},
	{
		text: "本月",
		icon: "clockTimeFour"
	},
	{
		text: "本年",
		icon: "calendarText"
	},
	{
		text: "全部",
		icon: "allInclusive"
	}
];

const activeTab = ref(0);

(async () => {
	const res = await getNewSummary(tabs[activeTab.value].text);
	console.log(res);
})();
</script>

<style scoped>
.tabs {
	height: 72px;
}
</style>
