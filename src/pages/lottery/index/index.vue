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
		<template v-slot:extra>
			<gal-card class="info">
				<template v-slot:headerStart>
					<gal-icon class="icon" icon="objectGroup"></gal-icon
					>抽奖信息
				</template>
				<div>
					{{
						new Date(info.beginTime).getTime() > Date.now()
							? "未开始"
							: new Date(info.endTime).getTime() >= Date.now()
							? "正在进行"
							: "已结束"
					}}
				</div>
				<div>参与人数:{{ info.count }}</div>
				<div>开始时间:{{ dateFormat(info.beginTime, "YMDhm") }}</div>
				<div>结束时间:{{ dateFormat(info.endTime, "YMDhm") }}</div>
			</gal-card>

			<gal-card class="button">
				<gal-button class="button-content">未参与</gal-button>
			</gal-card>

			<gal-card class="awards" width="full">
				<template v-slot:headerStart>
					<gal-icon class="icon" icon="objectGroup"></gal-icon
					>中奖用户
				</template>

				<gal-card
					class="award"
					width="full"
					v-for="item in info.awards"
					:key="item.id"
				>
					<template v-slot:headerStart>
						<gal-icon class="icon" icon="objectGroup"></gal-icon
						>{{ item.name }}
					</template>
					<div
						class="user"
						v-for="user in item.users"
						:key="user.userId"
					>
						<img
							class="user-image"
							:src="user.image"
							:alt="user.userName"
						/>
						<div>
							<div>
								<galTag
									v-for="(rank, index) in user.ranks.filter(
										(item) => item.type === 0
									)"
									:key="index"
									class="tag"
									:bgColor="
										rank.css.replace('bg-', '') || 'info'
									"
								>
									{{ rank.text }}
								</galTag>
								<span>{{ user.userName }}</span>
							</div>
							{{ user.personalSignature }}
						</div>
					</div>
				</gal-card>
			</gal-card>
		</template>
	</galIndexPageViewBody>
</template>

<script setup>
import { ref, watch } from "vue";
import { getLotteryViewByID } from "@/api/lotteryAPI/index.js";
import { useRoute } from "vue-router";
import { useStateTypeStore } from "@/store/statetype.js";
import { dateFormat } from "@/assets/common/js/formatDate";
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

.button-content {
	width: 100%;
	border: none;
	background-color: var(--main-color);
	opacity: 0.7;
	aspect-ratio: 1;
	border-radius: 50%;
	margin-block: 12px;
	color: var(--white-color);
	font-size: 24px;
}

.award {
	--card-header-font-size: 14px;
}

.user {
	display: flex;
	column-gap: 8px;
	font-size: 14px;
	margin-block-end: 8px;
}
.user-image {
	width: 50px;
	height: 50px;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
}
.tag {
	margin-inline-end: 8px;
	margin-block-end: 8px;
}
</style>
