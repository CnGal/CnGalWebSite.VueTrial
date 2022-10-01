<template>
	<div
		class="container"
		ref="rows"
		:class="{ mobile: isMobile, canScroll: props.heightOverflowScroll }"
	>
		<router-link
			v-for="row in props.rows"
			:key="row.id"
			:to="'/entries/index/' + row.id"
			class="item"
		>
			<img :src="row.mainImage" :alt="row.name" class="img" />
			<div class="content">
				<h5 class="name">{{ row.name }}</h5>
				<div
					class="introduction rows-dot"
					:style="{
						'--row-dot-line': row.addInfors.length ? 3 : undefined,
					}"
				>
					{{ row.briefIntroduction }}
				</div>
				<div v-if="row.addInfors.length">
					<div
						v-for="(addInfor, index) in row.addInfors"
						:key="index"
						class="addInfors-item"
					>
						<gal-tag class="tags tags-title">{{
							addInfor.modifier
						}}</gal-tag>
						<gal-link-button
							class="tags"
							v-for="item in addInfor.contents"
							:key="item.id"
							:to="'/entries/index/' + item.id"
							theme="outline"
						>
							{{ item.displayName }}
						</gal-link-button>
					</div>
				</div>
			</div>
			<div class="info">
				<span>
					<gal-icon icon="calendarAlt" size="1em"></gal-icon>&nbsp;
					{{ formatDate(row.publishTime, "YMD") }}
				</span>

				<span class="comment">
					<gal-icon icon="comments" size="14px"></gal-icon>&nbsp;{{
						row.commentCount
					}}条评论</span
				>
				<span class="read">
					<gal-icon icon="eye" size="14px"></gal-icon>&nbsp;{{
						row.readerCount
					}}次阅读</span
				>
			</div>
		</router-link>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { formatDate } from "../../../assets/common/js/formatDate";
import { useStore } from "../../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

const props = defineProps({
	rows: {
		type: [Object],
		required: true,
	},
	rowHasCellTotal: {
		type: [Object, Number],
		default: {
			xLarge: 3,
			large: 2,
			medium: 2,
			small: 1,
		},
	},
	heightOverflowScroll: {
		type: Boolean,
		default: true,
	},
});

const rows = ref();
const changeWidth = () => {
	const getCellWidth = () => {
		const pageWidth = window.innerWidth;
		const { xLarge, large, medium, small } =
			typeof props.rowHasCellTotal === "number"
				? {
						xLarge: props.rowHasCellTotal,
						large: props.rowHasCellTotal,
						medium: props.rowHasCellTotal,
						small: props.rowHasCellTotal,
				  }
				: props.rowHasCellTotal;

		if (pageWidth > 1200) {
			return `calc((100% - (var(--column-gap) * ${
				xLarge - 1
			})) / ${xLarge})`;
		} else if (pageWidth > 992) {
			return `calc((100% - (var(--column-gap) * ${
				large - 1
			})) / ${large})`;
		} else if (pageWidth > 768) {
			return `calc((100% - (var(--column-gap) * ${
				medium - 1
			})) / ${medium})`;
		} else {
			return `calc((100% - (var(--column-gap) * ${
				small - 1
			})) / ${small})`;
		}
	};
	rows.value.style.setProperty("--cell-width", getCellWidth());
};

onMounted(() => {
	changeWidth();
	window.addEventListener("resize", changeWidth);
});
onUnmounted(() => {
	window.removeEventListener("resize", changeWidth);
});
</script>

<style scoped>
.container {
	--row-dot-line: 4;
	--column-gap: 16px;
}
.container.mobile {
	--row-dot-line: 2;
}
.container {
	padding: 12px;
	display: flex;
	flex-wrap: wrap;
	column-gap: var(--column-gap);
	row-gap: 12px;
	background-color: var(--main-bg-color);
	color: var(--main-font-color);
}
.container.canScroll {
	overflow: hidden;
	max-height: 480px;
}
.container.canScroll:hover {
	overflow: auto;
}
.item {
	width: var(--cell-width);
	display: grid;
	background-color: var(--main-bg-color);
	color: var(--main-font-color);
	box-shadow: var(--main-shadow);
	box-sizing: border-box;
	padding: 1em;
	padding-block-end: 12px;
	position: relative;
	grid-template:
		"img content" auto
		"info info" auto
		/ auto 1fr;
	column-gap: 1em;
	row-gap: 12px;
}
.img {
	grid-area: img;
	height: 116px;
	object-fit: cover;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
}
.content {
	grid-area: content;
}
.name {
	font-size: 20px;
}
.introduction {
	font-size: 14px;
}

.addInfors-item {
	margin-block-start: 8px;
	display: inline-flex;
	flex-wrap: wrap;
	align-items: center;
	column-gap: 8px;
	row-gap: 8px;
}
.tags {
	font-size: 14px;
	display: inline-block;
	flex: 0 0 auto;
}

.info {
	grid-area: info;
	color: var(--gray-color);
	font-size: 14px;
}
.info > span {
	margin-inline-end: 1em;
	display: inline-flex;
}

@media screen and (max-width: 768px) {
	.container {
		background-color: transparent;
		padding: 0;
	}
	.img {
		height: 80px;
	}
}
</style>
