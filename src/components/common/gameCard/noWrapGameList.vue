<template>
	<div class="card-wrap">
		<gal-button
			v-if="buttonShow"
			class="prev"
			@click="prevList"
			:disabled="cannotPrevList"
		>
			<gal-icon icon="left" size="24px"></gal-icon>
		</gal-button>
		<div class="card-list-wrap">
			<ul class="card-list" ref="cardList">
				<li
					v-for="(item, index) in props.list"
					:key="index"
					class="card-item"
					ref="cardItem"
				>
					<component :is="props.cardName" :data="item"></component>
				</li>
			</ul>
		</div>
		<gal-button
			v-if="buttonShow"
			class="next"
			@click="nextList"
			:disabled="cannotNextList"
		>
			<gal-icon icon="right" size="24px"></gal-icon>
		</gal-button>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
	list: {
		type: [Object],
		required: true
	},
	cardName: {
		type: String,
		required: true
	}
});

const nowTranslate = ref(0);
const cannotPrevList = ref(true);
const cannotNextList = ref(false);

const cardList = ref();
const cardItem = ref();
const nextList = () => {
	const cardListWidth = cardList.value.getBoundingClientRect().width;
	const cardItemWidth = cardItem.value[0].getBoundingClientRect().width;
	const showCellCount = Math.floor(cardListWidth / cardItemWidth);
	nowTranslate.value += showCellCount;
	cannotPrevList.value = false;
	if (nowTranslate.value >= props.list.length - showCellCount) {
		cannotNextList.value = true;
		nowTranslate.value = props.list.length - showCellCount;
	}
	cardList.value.style.transform = `translateX(calc(${
		-1 * cardItemWidth * nowTranslate.value + "px"
	} - ${16 * nowTranslate.value}px))`;
};
const prevList = () => {
	const cardListWidth = cardList.value.getBoundingClientRect().width;
	const cardItemWidth = cardItem.value[0].getBoundingClientRect().width;
	const showCellCount = Math.floor(cardListWidth / cardItemWidth);
	nowTranslate.value -= showCellCount;
	cannotNextList.value = false;
	if (nowTranslate.value <= 0) {
		cannotPrevList.value = true;
		nowTranslate.value = 0;
	}
	cardList.value.style.transform = `translateX(calc(${
		-1 * cardItemWidth * nowTranslate.value + "px"
	} - ${16 * nowTranslate.value}px))`;
};

const buttonShow = ref(true);
const canScroll = () => {
	if (cardItem.value.length > 4) {
		buttonShow.value = true;
		return;
	}
	let widthCount = 0;
	cardItem.value.forEach((item) => {
		widthCount += item.getBoundingClientRect().width;
	});
	if (widthCount <= cardList.value.getBoundingClientRect().width) {
		buttonShow.value = false;
	}
};

onMounted(() => {
	canScroll();
});
</script>

<style scoped>
.card-wrap {
	--column-gap: 16px;
}
.card-wrap {
	display: flex;
	padding: 1em;
	padding-block-start: 0;
	background-color: var(--card-bg-color);
}
.prev,
.next {
	border: none;
	width: 52px;
	color: var(--gray-color);
	cursor: pointer;
}
.prev:disabled,
.next:disabled {
	cursor: auto;
}
.card-list-wrap {
	flex: 1;
	overflow: hidden;
}
.card-list {
	display: flex;
	column-gap: var(--column-gap);
}
.card-item {
	flex: 0 0 calc((100% - (var(--column-gap) * 3)) / 4);
}

@media screen and (max-width: 1200px) {
	.card-item {
		flex: 0 0 calc((100% - (var(--column-gap) * 2)) / 3);
	}
}

@media screen and (max-width: 992px) {
	.card-item {
		flex: 0 0 calc((100% - (var(--column-gap) * 1)) / 2);
	}
}
@media screen and (max-width: 768px) {
	.card-item {
		flex: 0 0 calc((100% - (var(--column-gap) * 0)) / 1);
	}
}
</style>
