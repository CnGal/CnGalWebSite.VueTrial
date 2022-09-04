<template>
	<div class="container" :class="{ mobile: isMobile }">
		<div v-for="item in props.list?.roles" :key="item.id" class="item">
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
import { ref } from "vue";
import { useStore } from "../../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

const props = defineProps({
	list: {
		type: [Object],
		required: true
	}
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
	background-color: var(--card-bg-color);
	overflow: hidden;
	max-height: 480px;
}
.container:hover {
	overflow: auto;
}
.item {
	width: calc((100% - (var(--column-gap) * 2)) / 3);
	display: flex;
	background-color: var(--card-bg-color);
	box-shadow: var(--main-shadow);
	box-sizing: border-box;
	padding: 1em;
}
.img {
	width: 116px;
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

@media screen and (max-width: 1200px) {
	.item {
		width: calc((100% - (var(--column-gap) * 1)) / 2);
	}
}
@media screen and (max-width: 768px) {
	.item {
		width: 100%;
	}
	.img {
		width: 80px;
	}
}
</style>
