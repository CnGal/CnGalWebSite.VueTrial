<template>
	<div class="container" ref="roles" :class="{ mobile: isMobile }">
		<div v-for="item in props.roles" :key="item.id" class="item">
			<img :src="item.mainImage" :alt="item.name" class="img" />
			<div>
				<h5 class="name">{{ item.name }}</h5>
				<div class="introduction rows-dot">
					{{ item.briefIntroduction }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useStore } from "../../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

const props = defineProps({
	roles: {
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
	}
});

const roles = ref();
const changeWidth = () => {
	const getCellWidth = () => {
		const pageWidth = window.innerWidth;
		const { xLarge, large, medium, small } =
			typeof props.rowHasCellTotal === "number"
				? {
						xLarge: props.rowHasCellTotal,
						large: props.rowHasCellTotal,
						xLmediumarge: props.rowHasCellTotal,
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
	roles.value.style.setProperty("--cell-width", getCellWidth());
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
	overflow: hidden;
	max-height: 480px;
}
.container:hover {
	overflow: auto;
}
.item {
	width: var(--cell-width);
	display: flex;
	background-color: var(--main-bg-color);
	box-shadow: var(--main-shadow);
	box-sizing: border-box;
	padding: 1em;
}
.img {
	height: 116px;
	object-fit: cover;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
	margin-inline-end: 1em;
}
.name {
	font-size: 20px;
}
.introduction {
	font-size: 14px;
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
