<template>
	<div class="container">
		<div
			class="banner-item"
			v-for="(item, index) in bannerList"
			ref="bannerListEl"
			:class="{
				'banner-active': active === index
			}"
			:key="index"
			:aria-hidden="active === index ? false : true"
		>
			<a
				:href="item.link"
				target="_blank"
				:tabindex="active === index ? 0 : -1"
				@focus="stopAnimation"
				@blur="startAnimation"
				@keyup="keyboardHandler"
			>
				<img
					class="banner-img"
					loading="lazy"
					:src="item.image"
					:alt="item.note"
				/>
			</a>
		</div>
		<div class="transition-img" aria-hidden="true">
			<img src="/images/logo.png" alt="转场图片" />
		</div>
		<gal-icon-button
			v-if="!isMobile"
			@click="prevImg"
			class="prevImg"
			icon="left"
			circle
			v-gal-tooltip="'上一张'"
			tabindex="-1"
		></gal-icon-button>
		<gal-icon-button
			v-if="!isMobile"
			@click="nextImg"
			class="nextImg"
			icon="right"
			circle
			v-gal-tooltip="'下一张'"
			tabindex="-1"
		></gal-icon-button>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { getHomeCarouselsView } from "../../../api/homeAPI/index.js";
import { nonRepeatRandomList } from "../../../assets/common/js/random.js";

import { useStore } from "../../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

// 获取 banner 列表
let bannerList = ref([]);
const getBannerList = async () => {
	const { data } = await getHomeCarouselsView();
	let list = [];
	if (data.length <= 6) {
		list = data;
	} else {
		// 选取列表中前三项，以及在其它项中随机选取三项
		const set = nonRepeatRandomList(3, data.length - 1, 6, [0, 1, 2]);
		set.forEach((value) => {
			list.push(data[value]);
		});
	}
	bannerList.value = list;
};
getBannerList();

const active = ref(0); // 当前展示
const nextActive = ref(1); // 预计下一张展示
const bannerListEl = ref();

let timer, autoAnimation;
let activating = false;

const stopAnimation = () => {
	clearTimeout(timer);
};
const startAnimation = () => {
	timer = setTimeout(autoAnimation, 6000);
};

const refreshTimeout = () => {
	stopAnimation();
	startAnimation();
};

const bannerAnimation = (className) => {
	const nextEl = bannerListEl.value[nextActive.value];
	nextEl.classList.add("banner-next-active");
	nextEl.classList.add(className);

	nextEl.addEventListener(
		"animationend",
		() => {
			bannerListEl.value[active.value].classList.remove("banner-active");
			active.value = nextActive.value;
			nextEl.classList.remove(className, "banner-next-active");

			activating = false;
			refreshTimeout();
		},
		{
			once: true
		}
	);
};
const nextImg = () => {
	if (!activating) {
		activating = true;
		nextActive.value =
			active.value + 1 >= bannerList.value.length ? 0 : active.value + 1;
		bannerAnimation("right-left-animation");
	}
};

const prevImg = () => {
	if (!activating) {
		activating = true;
		nextActive.value =
			active.value - 1 < 0
				? bannerList.value.length - 1
				: active.value - 1;
		bannerAnimation("left-right-animation");
	}
};

const keyboardHandler = (ev) => {
	switch (ev.key) {
		case "ArrowRight":
			nextImg();
			break;
		case "ArrowLeft":
			prevImg();
			break;
		default:
			break;
	}
};

onMounted(() => {
	autoAnimation = () => {
		activating = false;
		nextImg();
	};
	timer = setTimeout(autoAnimation, 5000);
});

onUnmounted(() => {
	// 在组件卸载时清理掉正在运行的定时器
	stopAnimation();
});
</script>

<style scoped>
.container {
	display: flex;
	overflow: hidden;
	position: relative;
}
/* 这里是占位框 为了更方便的将所有的 item 叠放在一起 */
.container::before {
	content: "";
	flex: 1 0 var(--main-width);
}
.container:focus-within {
	outline: thin dotted #c9d1d9;
	outline-offset: 1px;
}
.banner-item {
	flex: 1 0 var(--main-width);
	margin-inline-start: calc(-1 * var(--main-width));
	z-index: -1;
	opacity: 0;
}
.banner-active {
	opacity: 1;
	z-index: 2;
}

.banner-img {
	width: 100%;
	aspect-ratio: 1024 / 200;
	object-fit: cover;
}
.nextImg,
.prevImg {
	position: absolute;
	top: calc(50% - 15px);
	left: 90%;
	z-index: 3;
	color: #fff;
	opacity: 0.6;
	width: 32px;
	font-size: 24px;
	background-color: #333;
}
.prevImg {
	left: 10%;
}
.nextImg:hover,
.prevImg:hover {
	background-color: #414141;
}

.transition-img {
	position: absolute;
	width: 30px;
	height: 30px;
	z-index: 8;
	top: calc(50% - 15px);
	left: 100%;
}
.transition-img img {
	width: 100%;
}

.banner-next-active.right-left-animation {
	opacity: 1;
	z-index: 3;
	animation: right-left-animation 1s linear;
}
.banner-next-active.right-left-animation ~ .transition-img {
	animation: right-left-animation-sub 1s linear;
}
@keyframes right-left-animation {
	0% {
		clip-path: polygon(110% 0, 100% 50%, 110% 100%, 210% 100%, 210% 0);
	}
	100% {
		clip-path: polygon(0 0, -10% 50%, 0 100%, 100% 100%, 100% 0);
	}
}
@keyframes right-left-animation-sub {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(-1.1 * var(--main-width)));
	}
}

.banner-next-active.left-right-animation {
	opacity: 1;
	z-index: 3;
	animation: left-right-animation 1s linear;
}
.banner-next-active.left-right-animation ~ .transition-img {
	left: -30px;
	animation: left-right-animation-sub 1s linear;
}
@keyframes left-right-animation {
	0% {
		clip-path: polygon(-10% 0, 0 50%, -10% 100%, -110% 100%, -110% 0);
	}
	100% {
		clip-path: polygon(100% 0, 110% 50%, 100% 100%, 0 100%, 0 0);
	}
}
@keyframes left-right-animation-sub {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(1.1 * var(--main-width)));
	}
}
</style>
