<template>
	<article class="article" @click="linkToArticle" role="link">
		<header>
			<h3 class="head">
				{{ props.data.displayName || props.data.name }}
			</h3>
			<div class="info">
				<span>
					<gal-icon icon="calendarAlt" size="1em"></gal-icon>
					{{
						dateFormat(props.data.lastEditTime)({
							format: "YMD",
							fill: true
						})
					}}
				</span>
				<span>
					<gal-icon icon="user" size="1em"></gal-icon>
					{{ props.data.createUserName }}
				</span>
				<span>
					<gal-icon icon="eye" size="1em"></gal-icon>
					{{ props.data.readerCount }}次阅读
				</span>
			</div>
		</header>
		<main>
			<gal-markdown v-html="props.data.briefIntroduction"></gal-markdown>
		</main>
	</article>
</template>

<script setup>
import { dateFormat } from "../../../assets/common/js/formatDate.js";

import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
	data: {
		type: Object,
		required: true
	}
});

const linkToArticle = () => {
	router.push("/articles/index/" + props.data.id);
};
</script>

<style scoped>
.article {
	cursor: pointer;
}
header {
	text-align: center;
}
.info {
	margin-block-start: 5px;
	margin-block-end: 10px;
	color: var(--gray-color);
	font-size: 14px;
}
.info > span {
	display: inline-flex;
	column-gap: 0.5em;
	margin-inline-end: 1em;
}
</style>
