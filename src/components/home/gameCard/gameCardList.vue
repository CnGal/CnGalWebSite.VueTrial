<template>
	<ul class="card-list" ref="list">
		<li class="card-item" v-for="item in props.list" :key="item.id">
			<component
				:is="props.cardName"
				:data="item"
				:type="props.type"
			></component>
		</li>
	</ul>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
	type: {
		type: String
	},
	cardName: {
		type: String,
		required: true
	},
	list: {
		type: [Object],
		required: true
	},
	rowHasCellTotal: {
		type: [Object, Number],
		default: {
			xLarge: 6,
			large: 4,
			medium: 3,
			small: 2
		}
	}
});

const list = ref(null);
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
	list.value.style.setProperty("--cell-width", getCellWidth());
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
.card-list {
	--row-dot-line: 2;
	--column-gap: 16px;
	--row-gap: 12px;
}
.card-list {
	display: flex;
	flex-wrap: wrap;
	column-gap: var(--column-gap);
	row-gap: var(--row-gap);
}
.card-item {
	width: var(--cell-width);
}
</style>
