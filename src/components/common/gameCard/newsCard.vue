<template>
	<div class="news-card">
		<router-link :to="`/entries/index/${props.newsInfo.groupId}`">
			<img
				class="new-img"
				loading="lazy"
				:src="props.newsInfo.image"
				:alt="props.newsInfo.title"
			/>
		</router-link>
		<a :href="props.newsInfo.link" class="text-info" target="_blank">
			<div>
				<gal-tag
					class="tag"
					:text="props.newsInfo.type"
					:bgColor="'var(--main-color)'"
					:color="'#fff'"
				></gal-tag>
				<span class="user">{{ props.newsInfo.title }}</span>
				<span class="date">{{
					formatDateWithHowLong(props.newsInfo.time)
				}}</span>
			</div>
			<div class="new-text single-row-dot">
				<span>{{ props.newsInfo.text }}</span>
			</div>
		</a>
	</div>
</template>

<script setup>
// 引入 formatDate 格式化日期
import { formatDateWithHowLong } from "../../../assets/common/js/formatDate.js";

const props = defineProps({
	newsInfo: {
		type: Object,
		required: true
	}
});
</script>

<style scoped>
.news-card {
	display: flex;
	box-sizing: border-box;
	column-gap: 8px;
	overflow: hidden;
	padding: 0.5em 0.75em;
	background-color: var(--white-color);
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

@media screen and (max-width: 768px) {
	.news-card {
		box-shadow: var(--main-shadow);
		border-radius: var(--main-border-radius);
	}
}
</style>
