<template>
	<div class="container">
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
					<component
						:is="props.cardName"
						:data="item"
						:type="props.type"
					></component>
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
import { ref, onMounted, onUnmounted, nextTick, watch } from "vue";
const props = defineProps({
	type: {
		type: String,
		default: "entry"
	},
	list: {
		type: [Object],
		required: true
	},
	cardName: {
		type: String,
		required: true
	},
	rowHasCellTotal: {
		type: [Object, Number],
		default: {
			xxLarge: 4,
			xLarge: 4,
			large: 3,
			medium: 2,
			small: 1
		}
	}
});

const nowTranslate = ref(0);
const cannotPrevList = ref(true);
const cannotNextList = ref(false);

const cardList = ref(null);
const cardItem = ref(null);
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

const buttonShow = ref(false);
const changeWidth = () => {
	nextTick(() => {
		let cellWidth;
		const itemCount = props.list?.length || 4;
		const pageWidth = window.innerWidth;
		const { xxLarge, xLarge, large, medium, small } =
			typeof props.rowHasCellTotal === "number"
				? {
						xxLarge: props.rowHasCellTotal,
						xLarge: props.rowHasCellTotal,
						large: props.rowHasCellTotal,
						medium: props.rowHasCellTotal,
						small: props.rowHasCellTotal
				  }
				: props.rowHasCellTotal;

		if (pageWidth > 1400) {
			buttonShow.value = itemCount >= xxLarge;
			cellWidth = `calc((100% - (var(--column-gap) * ${
				xxLarge - 1
			})) / ${xxLarge})`;
		} else if (pageWidth > 1200) {
			buttonShow.value = itemCount >= xLarge;
			cellWidth = `calc((100% - (var(--column-gap) * ${
				xLarge - 1
			})) / ${xLarge})`;
		} else if (pageWidth > 992) {
			buttonShow.value = itemCount >= large;
			cellWidth = `calc((100% - (var(--column-gap) * ${
				large - 1
			})) / ${large})`;
		} else if (pageWidth > 768) {
			buttonShow.value = itemCount >= medium;
			cellWidth = `calc((100% - (var(--column-gap) * ${
				medium - 1
			})) / ${medium})`;
		} else {
			buttonShow.value = itemCount >= small;
			cellWidth = `calc((100% - (var(--column-gap) * ${
				small - 1
			})) / ${small})`;
		}
		cardList.value.style.setProperty("--cell-width", cellWidth);
	});
};

onMounted(() => {
	changeWidth();
	window.addEventListener("resize", changeWidth);
});

onUnmounted(() => {
	window.removeEventListener("resize", changeWidth);
});

watch(
	() => props.list,
	() => {
		nowTranslate.value = 0;
		cannotPrevList.value = true;
		cannotNextList.value = false;
		cardList.value.style.transform = `translateX(0)`;
	}
);
</script>

<style scoped>
.container {
	--column-gap: 16px;
	--cell-width: 30%;
}
.container {
	display: flex;
}
.prev,
.next {
	width: 52px;
	border: none;
	color: var(--gray-color);
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
	flex: none;
	width: var(--cell-width);
}
</style>
