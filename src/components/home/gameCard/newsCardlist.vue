<template>
	<ul class="news">
		<li class="new-item" v-for="(item, index) in props.list" :key="index">
			<gal-news-card :newsInfo="item"></gal-news-card>
		</li>
	</ul>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	list: {
		type: [Object],
		required: true
	}
});
</script>

<style scoped>
.news {
	display: flex;
	flex-wrap: wrap;
}
.new-item {
	box-sizing: border-box;
	width: 50%;
}

@media screen and (max-width: 992px) {
	.new-item {
		width: 100%;
	}
}
@media screen and (max-width: 768px) {
	.news {
		row-gap: 12px;
	}
}
</style>
