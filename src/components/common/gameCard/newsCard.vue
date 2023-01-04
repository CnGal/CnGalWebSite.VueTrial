<template>
	<div class="new-card">
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
				<gal-tag class="tag">{{ props.newsInfo.type }}</gal-tag>
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
import { formatDateWithHowLong } from "../../../assets/common/js/formatDate.js";

const props = defineProps({
	newsInfo: {
		type: Object,
		required: true
	}
});
</script>

<style scoped>
.new-card {
	display: flex;
	box-sizing: border-box;
	column-gap: 8px;
	overflow: hidden;
	padding: 0.5em 0.75em;
	background-color: var(--main-bg-color);
}
.text-info {
	display: flex;
	flex: 1 1 auto;
	width: 0;
	color: var(--main-font-color);
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
	.new-card {
		box-shadow: var(--main-shadow);
		border-radius: var(--main-border-radius);
	}
}
</style>
