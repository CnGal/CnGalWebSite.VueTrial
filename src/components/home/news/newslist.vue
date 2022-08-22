<template>
	<ul class="news">
		<li class="new-item" v-for="(item, index) in newsList" :key="index">
			<a :href="`/entries/index/${item.groupId}/10`">
				<img class="new-img" loading="lazy" :src="item.image" alt="" />
			</a>
			<a :href="item.link" class="text-info">
				<div>
					<gal-tag
						class="tag"
						:text="item.type"
						:bgColor="'var(--main-color)'"
						:color="'#fff'"
					></gal-tag>
					<span class="user">{{ item.title }}</span>
					<span class="date">{{ formatDate(item.time) }}</span>
				</div>
				<div class="new-text single-row-dot">
					<span>{{ item.text }}</span>
				</div>
			</a>
		</li>
	</ul>
</template>

<script setup>
import { ref } from "vue";
// 引入 formatDate 格式化日期
import { formatDate } from "../../../assets/common/js/formatDate.js";

// 获取 最新动态列表
import { getHomeNewsView } from "../../../api/homeAPI/index.js";
let newsList = ref([]);
const getNewList = async () => {
	const data = await getHomeNewsView();
	newsList.value = data.data.splice(0, 6);
};
getNewList();
</script>

<style scoped>
.news {
	display: flex;
	flex-wrap: wrap;
	row-gap: 12px;
}
.new-item {
	display: flex;
	box-sizing: border-box;
	column-gap: 8px;
	width: 50%;
	overflow: hidden;
	padding: 0 0.75em;
}
.text-info {
	display: flex;
	flex: 1 1 auto;
	width: 0;
	color: var(--block-color, #000);
	font-size: 14px;
	line-height: 1.5;
	flex-direction: column;
	justify-content: space-between;
}
.new-img {
	height: 50px;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
}
.tag,
.user {
	margin-inline-end: 8px;
}
.date {
	color: var(--gray-color);
}

@media screen and (max-width: 992px) {
	.new-item {
		width: 100%;
	}
}
</style>
