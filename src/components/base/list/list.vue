<template>
	<ul ref="list" class="list">
		<slot></slot>
	</ul>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
	rowHasCellTotal: {
		type: [Object, Number],
		default: {
			xxLarge: 6,
			xLarge: 4,
			large: 3,
			medium: 2,
			small: 1
		}
	},
	heightOverflowScroll: {
		type: Boolean,
		default: true
	}
});

const list = ref();
const changeWidth = () => {
	const getColCount = () => {
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
			return xxLarge;
		} else if (pageWidth > 1200) {
			return xLarge;
		} else if (pageWidth > 992) {
			return large;
		} else if (pageWidth > 768) {
			return medium;
		} else {
			return small;
		}
	};
	list.value.style.setProperty("--col-count", getColCount());
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
.list {
	--col-count: 4;
	--list-column-gap: 16px;
}
.list {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(var(--col-count), 1fr);
	grid-column-gap: var(--list-column-gap);
}
</style>
