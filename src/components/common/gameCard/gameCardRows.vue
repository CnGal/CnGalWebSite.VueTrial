<template>
	<div
		class="container"
		ref="rows"
		:class="{
			mobile: isMobile,
			canScroll: props.heightOverflowScroll
		}"
	>
		<gal-link
			v-for="row in props.rows"
			:key="row.id"
			:to="
				(type === 'article'
					? '/articles/index/'
					: type === 'entry'
					? '/entries/index/'
					: '/tag/index/') + row.id
			"
			:class="{
				item: true,
				'user-item':
					props.type === 'entry' &&
					(row.type === stateStore.entryType.role ||
						row.type === stateStore.entryType.staff)
			}"
		>
			<img :src="row.mainImage" :alt="row.name" class="img" />
			<div class="content">
				<div class="name">
					<gal-tag class="tags tags-title" v-if="!props.hideTypeTag">
						{{ tagText(row.type) }}
					</gal-tag>
					<h5>{{ row.name }}</h5>
				</div>
				<div class="introduction rows-dot">
					{{ row.briefIntroduction }}
				</div>
				<div v-if="row?.addInfors?.length" class="addInfors">
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
			<div
				class="info"
				v-if="
					props.type === 'article' ||
					(props.type === 'entry' &&
						row.type === stateStore.entryType.game)
				"
			>
				<span>
					<gal-icon icon="calendarAlt" size="14px"></gal-icon>&nbsp;
					{{ dateFormat(row.publishTime || row.lastEditTime, "YMD") }}
				</span>

				<span>
					<gal-icon icon="comments" size="14px"></gal-icon>&nbsp;{{
						row.commentCount
					}}条评论</span
				>
				<span>
					<gal-icon icon="eye" size="14px"></gal-icon>&nbsp;{{
						row.readerCount
					}}次阅读</span
				>
				<span v-if="row.thumbsUpCount !== undefined">
					<gal-icon icon="thumbsUp" size="14px"></gal-icon>&nbsp;{{
						row.thumbsUpCount
					}}人点赞</span
				>
				<span v-if="row.createUserName">
					<gal-icon icon="user" size="14px"></gal-icon>&nbsp;{{
						row.createUserName
					}}</span
				>
			</div>
		</gal-link>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { dateFormat } from "@/assets/common/js/formatDate.js";
import { useStore } from "@/store/index.js";
import { useStateTypeStore } from "@/store/statetype.js";
const store = useStore();
const stateStore = useStateTypeStore();
const isMobile = store.isMobile;

const props = defineProps({
	type: {
		type: String,
		default: "entry"
	},
	hideTypeTag: {
		type: Boolean,
		default: false
	},
	rows: {
		type: [Object],
		required: true
	},
	rowHasCellTotal: {
		type: [Object, Number],
		default: {
			xLarge: 3,
			large: 2,
			medium: 2,
			small: 1
		}
	},
	heightOverflowScroll: {
		type: Boolean,
		default: true
	}
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
						small: props.rowHasCellTotal
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

const tagText = (type) => {
	if (props.type === "entry") {
		switch (type) {
			case stateStore.entryType.game:
				return "游戏";
			case stateStore.entryType.role:
				return "角色";
			case stateStore.entryType.productionGroup:
				return "组织";
			case stateStore.entryType.staff:
				return "Staff";
		}
	} else if (props.type === "article") {
		switch (type) {
			case stateStore.articleType.tought:
				return "感想";
			case stateStore.articleType.strategy:
				return "攻略";
			case stateStore.articleType.interview:
				return "访谈";
			case stateStore.articleType.news:
				return "动态";
			case stateStore.articleType.evaluation:
				return "评测";
			case stateStore.articleType.peripheral:
				return "周边";
			case stateStore.articleType.notice:
				return "公告";
			case stateStore.articleType.none:
				return "杂谈";
			case stateStore.articleType.fan:
				return "二创";
		}
	} else if (props.type === "tag") {
		return "标签";
	} else if (props.type === "periphery") {
		return "周边";
	} else if (props.type === "video") {
		return type;
	} else {
		return type || "未知";
	}
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
	--row-dot-line: 3;
	--column-gap: 16px;
	--row-item-bg-color: var(--main-bg-color);
}
.container.mobile,
.user-item {
	--row-dot-line: 2;
}
.container {
	display: flex;
	flex-wrap: wrap;
	column-gap: var(--column-gap);
	row-gap: 12px;
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
	background-color: var(--row-item-bg-color);
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
}
.img {
	grid-area: img;
	width: 250px;
	object-fit: cover;
}
.user-item .img {
	width: auto;
	height: 116px;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
}

.content {
	grid-area: content;
}
.name {
	display: flex;
	column-gap: 1em;
	align-items: baseline;
}
.name h5 {
	font-size: 20px;
}

.introduction {
	word-break: break-all;
	font-size: 14px;
}

.addInfors {
	display: flex;
}
.addInfors-item {
	flex: 1;
	margin-block-start: 8px;
	display: inline-flex;
	flex-wrap: wrap;
	align-items: center;
	column-gap: 8px;
	row-gap: 8px;
}
.tags {
	--link-button-padding: 1px 8px;
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
		padding: 0;
	}
	.user-item .img {
		height: 80px;
	}
}
</style>
