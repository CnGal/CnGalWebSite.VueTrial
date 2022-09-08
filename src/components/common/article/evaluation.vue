<template>
	<article class="gal-article">
		<header>
			<h3 class="heading">
				{{ props.data.displayName || props.data.name }}
			</h3>
			<div class="info">
				<span>
					<gal-icon icon="calendarAlt" size="1em"></gal-icon>
					{{ formatDateWithYMD(props.data.lastEditTime) }}
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
		<main
			class="markdown-body"
			v-html="props.data.briefIntroduction"
		></main>
	</article>
</template>

<script setup>
import "github-markdown-css";
import { formatDateWithYMD } from "../../../assets/common/js/formatDate";

const props = defineProps({
	data: {
		type: Object,
		required: true
	}
});
</script>

<style scoped>
.heading {
	text-align: center;
}
.info {
	margin-block-start: 5px;
	margin-block-end: 10px;
	text-align: center;
	color: var(--gray-color);
	font-size: 14px;
}
.info > span {
	margin-inline-end: 1em;
}

.markdown-body :deep(a) {
	word-break: break-all;
	color: var(--main-color);
}
</style>
