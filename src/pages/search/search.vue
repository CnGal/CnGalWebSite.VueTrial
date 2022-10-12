<template>
	<div class="search-area">
		<galInput
			v-model="searchText"
			type="search"
			simplt
			placeholder="可以搜索哦~"
			autofocus
		></galInput>
	</div>
	<div>
		<div
			v-for="(item, index) in searchData.pagedResultDto?.data"
			:key="index"
		>
			<gal-game-card-rows
				class="rows"
				:rows="[item.article || item.entry]"
				:rowHasCellTotal="1"
				:heightOverflowScroll="false"
			></gal-game-card-rows>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, useAttrs } from "vue";
import { getHomeSearch } from "../../api/homeAPI/index.js";

document.title = "搜索 - CnGal 中文GalGame资料站";

const searchText = ref("");
const searchData = ref({});
(async () => {
	const data = await getHomeSearch();
	console.log(data);
	searchData.value = data.data;
})();
</script>

<style scoped>
.search-area {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
	background-color: var(--main-bg-color);
}

:deep(.input-wrap) {
	max-width: 500px;
}
:deep(.input) {
	width: 100%;
}
</style>
