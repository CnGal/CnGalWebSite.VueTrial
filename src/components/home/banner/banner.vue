<template>
	<div class="banner-inner">
		<div
			class="banner-item"
			v-for="(item, index) in bannerList"
			ref="bannerListEl"
			:class="{
				'banner-active': active === index
			}"
			:key="index"
		>
			<a :href="item.link">
				<img class="banner-img" :src="item.image" :alt="item.note" />
			</a>
		</div>
		<div class="banner-kanban">
			<img src="/images/logo.png" alt="" />
		</div>
		<gal-icon-button
			v-if="!isMobile"
			@click="prevImg"
			class="prevImg"
			:icon="'left'"
			circle
			:tooltipText="'上一张'"
			:bgColor="'#333'"
			:bgHoverColor="'#666'"
		></gal-icon-button>
		<gal-icon-button
			v-if="!isMobile"
			@click="nextImg"
			class="nextImg"
			:icon="'right'"
			circle
			:tooltipText="'下一张'"
			:bgColor="'#333'"
			:bgHoverColor="'#666'"
		></gal-icon-button>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getHomeCarouselsView } from "../../../api/homeAPI/index.js";

import { useStore } from "../../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

const getRandom = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

let bannerList = ref([]);
const getBannerList = async () => {
	const { data } = await getHomeCarouselsView();
	let list = [];
	if (data.length <= 6) {
		list = data;
	} else {
		// 选取列表中前三项，以及在其它项中随机选取三项
		let set = new Set([0, 1, 2]);
		while (set.size < 6) {
			set.add(getRandom(3, data.length));
		}
		set.forEach((value) => {
			list.push(data[value]);
		});
	}
	bannerList.value = list;
};
getBannerList();

const active = ref(0);
const nextActive = ref(1);
const bannerListEl = ref();

let timer, autoAnimation;

const refreshTimeout = () => {
	clearTimeout(timer);
	timer = setTimeout(autoAnimation, 6000);
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
const nextImg = (ev) => {
	if (!activating) {
		activating = true;
		nextActive.value =
			active.value + 1 >= bannerList.value.length ? 0 : active.value + 1;
		bannerAnimation("right-animation");
	}
};

const prevImg = (ev) => {
	if (!activating) {
		activating = true;
		nextActive.value =
			active.value - 1 < 0
				? bannerList.value.length - 1
				: active.value - 1;
		bannerAnimation("left-animation");
	}
};

let activating = false;

onMounted(() => {
	autoAnimation = () => {
		activating = true;
		nextActive.value =
			active.value + 1 >= bannerList.value.length ? 0 : active.value + 1;
		bannerAnimation("right-animation");
	};
	timer = setTimeout(autoAnimation, 5000);
});
</script>

<style scoped>
.banner-inner {
	display: flex;
	overflow: hidden;
	position: relative;
}
.banner-inner::before {
	content: "";
	flex: 1 0 var(--main-width);
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
	object-fit: cover;
}
:deep(.nextImg),
:deep(.prevImg) {
	position: absolute;
	top: calc(50% - 15px);
	left: 90%;
	z-index: 3;
	color: #fff;
	opacity: 0.6;
}
:deep(.prevImg) {
	left: 10%;
}

.banner-kanban {
	position: absolute;
	width: 30px;
	height: 30px;
	z-index: 8;
	top: calc(50% - 15px);
	left: 100%;
}
.banner-kanban img {
	width: 100%;
}

.banner-next-active.right-animation {
	opacity: 1;
	z-index: 3;
	animation: right-animation1 1s linear;
}
.banner-next-active.right-animation ~ .banner-kanban {
	animation: right-animation1a 1s linear;
}
@keyframes right-animation1 {
	0% {
		clip-path: polygon(110% 0, 100% 50%, 110% 100%, 210% 100%, 210% 0);
	}
	100% {
		clip-path: polygon(0 0, -10% 50%, 0 100%, 100% 100%, 100% 0);
	}
}
@keyframes right-animation1a {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(-1.1 * var(--main-width)));
	}
}

.banner-next-active.left-animation {
	opacity: 1;
	z-index: 3;
	animation: left-animation1 1s linear;
}
.banner-next-active.left-animation ~ .banner-kanban {
	left: -30px;
	animation: left-animation1a 1s linear;
}
@keyframes left-animation1 {
	0% {
		clip-path: polygon(-10% 0, 0 50%, -10% 100%, -110% 100%, -110% 0);
	}
	100% {
		clip-path: polygon(100% 0, 110% 50%, 100% 100%, 0 100%, 0 0);
	}
}
@keyframes left-animation1a {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(1.1 * var(--main-width)));
	}
}
</style>
