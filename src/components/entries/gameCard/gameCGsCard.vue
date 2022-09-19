<template>
	<img
		class="cg-show"
		:src="
			props.data.pictures &&
			(props.data.pictures[active].image ||
				props.data.pictures[active].url)
		"
		:alt="
			(props.data.pictures && props.data.pictures[active].note) ||
			props.data.name + 'CG'
		"
		@click="showDialog"
	/>
	<gal-no-wrap-game-list
		class="cg-preview"
		cardName="galGamePreview"
		:list="
			(props.data.pictures &&
				props.data.pictures.map((item, index) => {
					item.index = index;
					return item;
				})) ||
			[]
		"
	></gal-no-wrap-game-list>

	<div class="cg-dialog" ref="cgDialog" tabindex="0" v-show="cgDialogShow">
		<div class="img-content">
			<img
				class="cg-dialog-show"
				:src="
					props.data.pictures &&
					(props.data.pictures[active].image ||
						props.data.pictures[active].url)
				"
				:alt="
					(props.data.pictures && props.data.pictures[active].note) ||
					props.data.name + 'CG'
				"
			/>
		</div>
		<gal-icon
			class="close"
			icon="close"
			size="48px"
			@click="hideDialog"
			v-gal-tooltip="'关闭'"
		></gal-icon>
		<gal-icon
			class="prevImg"
			icon="left"
			v-gal-tooltip.top="'上一张'"
			size="48px"
			@click="prevImg"
		></gal-icon>
		<gal-icon
			class="nextImg"
			icon="right"
			v-gal-tooltip.top="'下一张'"
			size="48px"
			@click="nextImg"
		></gal-icon>
		<span class="page">{{
			active + 1 + " / " + props.data.pictures.length
		}}</span>
	</div>
</template>

<script setup>
import { ref, provide, computed, nextTick } from "vue";

const props = defineProps({
	data: {
		type: Object,
		required: true,
	},
});

const active = ref(0);

const changeActive = (newActive) => {
	active.value = newActive;
};

const cgDialog = ref();
let cgDialogShow = ref(false);

const keyEvent = (ev) => {
	console.log(ev);
	if (ev.keyCode === 39) {
		// ArrowRight
		nextImg();
	} else if (ev.keyCode === 37) {
		// ArrowLeft
		prevImg();
	} else if (ev.keyCode === 27) {
		// Esc
		hideDialog();
	}
};
const showDialog = () => {
	cgDialogShow.value = true;
	document.body.style.overflow = "hidden";

	cgDialog.value.addEventListener("keyup", keyEvent);
	nextTick(() => {
		cgDialog.value.focus();
	});
};
const hideDialog = () => {
	cgDialogShow.value = false;
	document.body.style.overflow = "";
	cgDialog.value.removeEventListener("keyup", keyEvent);
};
const scrollToTop = () => {
	cgDialog.value.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
};

const nextImg = () => {
	active.value =
		active.value === props.data.pictures.length - 1 ? 0 : active.value + 1;
	scrollToTop();
};
const prevImg = () => {
	active.value =
		active.value === 0 ? props.data.pictures.length - 1 : active.value - 1;
	scrollToTop();
};

const activeData = computed(() => {
	return {
		active: active.value,
		type: "index",
	};
});
provide("active", activeData);
provide("changeActive", changeActive);
</script>

<style scoped>
.cg-show {
	width: 100%;
	box-sizing: border-box;
	padding: 0 12px;
	aspect-ratio: 1920 / 1080;
	object-fit: cover;
	cursor: pointer;
}
.cg-preview {
	margin-block-start: 16px;
}

.cg-dialog {
	position: fixed;
	inset: 0;
	z-index: 10;
	background-color: #000a;
	display: flex;
	height: 100vh;
	overflow: auto;
}
.img-content {
	margin: auto;
	width: min(80vw, 1200px);
	padding-block-start: 12px;
	padding-block-end: 24px;
}
.img-content img {
	width: 100%;
}
.close,
.prevImg,
.nextImg,
.page {
	position: fixed;
	color: var(--main-color);
}
.close {
	top: 12px;
	right: 12px;
}
.prevImg {
	left: 12px;
	top: calc(50% - 24px);
}
.nextImg {
	right: 12px;
	top: calc(50% - 24px);
}
.page {
	top: 12px;
	left: 12px;
	font-size: 24px;
	font-weight: 700;
}
</style>
