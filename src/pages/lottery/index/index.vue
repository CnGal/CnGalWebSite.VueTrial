<template>
	<galIndexPageViewBody class="body">
		<template v-slot:main>
			<div class="header">
				<img
					v-if="info.mainPicture"
					:src="info.mainPicture"
					:alt="info.displayName + '头图'"
				/>
				<div>
					<h1>{{ info.displayName }}</h1>
					<p>{{ info.briefIntroduction }}</p>
				</div>
			</div>

			<gal-card class="main-card" v-if="info.mainPage">
				<template v-slot:headerStart>
					<gal-icon class="icon" icon="homeFill"></gal-icon
					>&nbsp;&nbsp;介绍
				</template>
				<gal-markdown v-html="info.mainPage"></gal-markdown>
			</gal-card>

			<gal-card class="main-card" width="full" v-if="info.awards?.length">
				<template v-slot:headerStart>
					<gal-icon class="icon" icon="homeFill"></gal-icon
					>&nbsp;&nbsp;奖品
				</template>
				<gal-list
					class="awards-list"
					:rowHasCellTotal="{
						xxLarge: 4,
						xLarge: 3,
						large: 3,
						medium: 2,
						small: 2
					}"
				>
					<gal-list-item
						v-for="item in info.awards"
						:key="item.id"
						class="awards-item"
					>
						<img :src="item.image" :alt="item.name" />
						<gal-link
							v-if="item.link"
							:href="item.link"
							class="name"
							>{{ item.name }}</gal-link
						>
						<div v-else class="name">{{ item.name }}</div>
						<div class="sponsor">赞助商： {{ item.sponsor }}</div>
					</gal-list-item>
				</gal-list>
			</gal-card>

			<galConmmentsContent
				class="comments-card"
				:id="id"
				:type="stateStore.commentType.commentLottery"
			></galConmmentsContent>
		</template>
		<template v-slot:extra> extra </template>
	</galIndexPageViewBody>
</template>

<script setup>
import { ref, watch } from "vue";
import { getLotteryViewByID } from "@/api/lotteryAPI/index.js";
import { useRoute } from "vue-router";
import { useStateTypeStore } from "@/store/statetype.js";
const route = useRoute();
const stateStore = useStateTypeStore();

const id = ref(route.params.id);

const info = ref({});
const getInfo = async () => {
	const { data } = await getLotteryViewByID(id.value);
	console.log(data);
	info.value = data;
};
getInfo();

// 监听 lotteries/index/:id  页面的变化
watch(
	() => route.params,
	(newURL) => {
		if (!newURL.id) {
			return;
		}
		id.value = newURL.id;
		getInfo();
	}
);
</script>

<style scoped>
.body {
	--index-page-extra-width: clamp(220px, calc((100% - 16px) / 3), 300px);
}
.header > img {
	width: 100%;
}
.header > div {
	padding: 12px;
}
.header h1 {
	font-size: 28px;
	text-align: center;
}
.header p {
	font-size: 14px;
}

.awards-list {
	--list-column-gap: 24px;
}
.awards-item > img {
	width: 100%;
}
.awards-item > .name {
	font-size: 14px;
}
</style>
