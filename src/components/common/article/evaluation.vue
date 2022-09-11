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

.theme-dark .markdown-body {
	/* 从 github-markdown.css 的 prefers-color-scheme: dark中复制 */
	color-scheme: dark;
	--color-prettylights-syntax-comment: #8b949e;
	--color-prettylights-syntax-constant: #79c0ff;
	--color-prettylights-syntax-entity: #d2a8ff;
	--color-prettylights-syntax-storage-modifier-import: #c9d1d9;
	--color-prettylights-syntax-entity-tag: #7ee787;
	--color-prettylights-syntax-keyword: #ff7b72;
	--color-prettylights-syntax-string: #a5d6ff;
	--color-prettylights-syntax-variable: #ffa657;
	--color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
	--color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
	--color-prettylights-syntax-invalid-illegal-bg: #8e1519;
	--color-prettylights-syntax-carriage-return-text: #f0f6fc;
	--color-prettylights-syntax-carriage-return-bg: #b62324;
	--color-prettylights-syntax-string-regexp: #7ee787;
	--color-prettylights-syntax-markup-list: #f2cc60;
	--color-prettylights-syntax-markup-heading: #1f6feb;
	--color-prettylights-syntax-markup-italic: #c9d1d9;
	--color-prettylights-syntax-markup-bold: #c9d1d9;
	--color-prettylights-syntax-markup-deleted-text: #ffdcd7;
	--color-prettylights-syntax-markup-deleted-bg: #67060c;
	--color-prettylights-syntax-markup-inserted-text: #aff5b4;
	--color-prettylights-syntax-markup-inserted-bg: #033a16;
	--color-prettylights-syntax-markup-changed-text: #ffdfb6;
	--color-prettylights-syntax-markup-changed-bg: #5a1e02;
	--color-prettylights-syntax-markup-ignored-text: #c9d1d9;
	--color-prettylights-syntax-markup-ignored-bg: #1158c7;
	--color-prettylights-syntax-meta-diff-range: #d2a8ff;
	--color-prettylights-syntax-brackethighlighter-angle: #8b949e;
	--color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;
	--color-prettylights-syntax-constant-other-reference-link: #a5d6ff;
	--color-fg-default: #c9d1d9;
	--color-fg-muted: #8b949e;
	--color-fg-subtle: #484f58;
	--color-canvas-default: var(--main-bg-color);
	--color-canvas-subtle: #161b22;
	--color-border-default: #30363d;
	--color-border-muted: #21262d;
	--color-neutral-muted: rgba(110, 118, 129, 0.4);
	--color-accent-fg: #58a6ff;
	--color-accent-emphasis: #1f6feb;
	--color-attention-subtle: rgba(187, 128, 9, 0.15);
	--color-danger-fg: #f85149;
}

html:not(.theme-dark) .markdown-body :deep(a) {
	color: var(--main-color);
}
</style>
