<template>
	<gal-card>
		<div class="main-header">
			<img :src="info.mainPicture || info.thumbnail" :alt="info.name" />
			<div class="main-info">
				<h1>{{ info.name }}</h1>
				<div class="staff">
					<div
						class="production-group"
						v-if="info.productionGroups?.length"
					>
						<gal-tag class="production-title">制作组</gal-tag>
						<gal-link-button
							class="production-item"
							v-for="item in info.productionGroups"
							:key="item.id"
							:to="'/entries/index/' + item.id"
							:text="item.displayName"
						></gal-link-button>
					</div>
					<div
						class="publishers-group"
						v-if="info.publishers?.length"
					>
						<gal-tag class="publishers-title">发行商</gal-tag>
						<gal-link-button
							class="publishers-item"
							v-for="item in info.publishers"
							:key="item.id"
							:to="'/entries/index/' + item.id"
							:text="item.displayName"
						></gal-link-button>
					</div>
				</div>
				<p class="brief-introduction">{{ info.briefIntroduction }}</p>
				<div class="icon-wrap"></div>
			</div>
		</div>
	</gal-card>
	<div class="main-body">
		<div class="main-main">
			<gal-card class="main-card" v-if="info.pictures?.length">
				<template v-slot:header>
					<gal-card-header>
						<template v-slot:start>
							<gal-icon
								class="icon"
								icon="picture"
								size="1em"
							></gal-icon
							>&nbsp;&nbsp;相册
						</template>
					</gal-card-header>
				</template>
				<galEntriesGameCGsCard
					:data="info.pictures[0]"
				></galEntriesGameCGsCard>
			</gal-card>
			<gal-card class="main-card" v-if="info.staffGames?.length">
				<template v-slot:header>
					<gal-card-header>
						<template v-slot:start>
							<gal-icon
								class="icon"
								icon="send2"
								size="1em"
							></gal-icon
							>&nbsp;&nbsp;参与作品
						</template>
					</gal-card-header>
				</template>
			</gal-card>
			<gal-card class="main-card" v-if="info.mainPage">
				<template v-slot:header>
					<gal-card-header>
						<template v-slot:start>
							<gal-icon
								class="icon"
								icon="homeFill"
								size="1em"
							></gal-icon
							>&nbsp;&nbsp;介绍
						</template>
					</gal-card-header>
				</template>
				<gal-markdown :data="info.mainPage"></gal-markdown>
			</gal-card>
		</div>
		<div class="main-extra">
			<gal-card class="extra-card" v-if="info.type === 0">
				<template v-slot:header>
					<gal-card-header>
						<template v-slot:start>
							<gal-icon
								class="icon"
								icon="star"
								size="1em"
							></gal-icon
							>&nbsp;&nbsp;游玩记录
						</template>
						<template v-slot:end>
							<gal-link-button
								to="/"
								class="link-button"
								text="查看详情"
								icon="shareAll"
							></gal-link-button>
						</template>
					</gal-card-header>
					<div :style="{ 'text-align': 'center' }">暂无记录</div>
					<gal-link-button
						icon="login"
						text="登入后添加游玩记录"
						to="/"
					></gal-link-button>
				</template>
			</gal-card>
			<gal-card class="extra-card" v-if="info.steamId">
				<template v-slot:header>
					<gal-card-header>
						<template v-slot:start>
							<gal-icon
								class="icon"
								icon="steam"
								size="1em"
							></gal-icon
							>&nbsp;&nbsp;steam信息
						</template>
					</gal-card-header>
					<div v-if="!steamInfo.entry">
						<gal-icon
							class="icon"
							icon="calendarPlus"
							size="1em"
						></gal-icon>
						未发售
					</div>
					<div class="single-row-dot">
						<gal-icon
							class="icon"
							icon="homeFill"
							size="1em"
						></gal-icon>
						商店页面：<a
							:href="
								'https://store.steampowered.com/app/' +
								info.steamId
							"
							target="_blank"
							>{{
								"https://store.steampowered.com/app/" +
								info.steamId
							}}</a
						>
					</div>
				</template>
			</gal-card>
			<gal-card
				class="extra-card"
				v-if="
					info.information &&
					info.information[0].modifier !== '相关网站'
				"
			>
				<template v-slot:header>
					<gal-card-header>
						<template v-slot:start>
							<gal-icon
								class="icon"
								icon="info"
								size="1em"
							></gal-icon
							>&nbsp;&nbsp;基础信息
						</template>
					</gal-card-header>
				</template>
				<div
					v-for="(item, index) in (info.information &&
						info.information[0].informations.filter(
							(i) => i.displayName !== '官网'
						)) ||
					[]"
					:key="index"
				>
					<gal-icon
						class="icon"
						:icon="infomationIcons(item.displayName)"
						size="1em"
					></gal-icon>
					<span>{{ item.displayName }}:</span>&nbsp;&nbsp;
					<span>{{ item.displayValue }}</span>
				</div>
			</gal-card>
			<gal-card class="extra-card">
				<template v-slot:header>
					<gal-card-header>
						<template v-slot:start>
							<gal-icon
								class="icon"
								icon="link"
								size="1em"
							></gal-icon
							>&nbsp;&nbsp;相关网站
						</template>
					</gal-card-header>
				</template>
				<div
					v-for="(item, index) in (info.information &&
						info.information[0].informations.filter((i) =>
							['官网', '微博', '爱发电'].includes(i.displayName)
						)) ||
					[]"
					:key="index"
				>
					<gal-icon
						class="icon"
						:icon="infomationIcons(item.displayName)"
						size="1em"
					></gal-icon>
					<span>{{ item.displayName }}:</span>&nbsp;&nbsp;
					<a :href="item.displayValue" target="_blank">{{
						item.displayValue
					}}</a>
				</div>
			</gal-card>
			<gal-card class="extra-card" v-if="info.tags?.length">
				<template v-slot:header>
					<gal-card-header>
						<template v-slot:start>
							<gal-icon
								class="icon"
								icon="tags"
								size="1em"
							></gal-icon
							>&nbsp;&nbsp;标签
						</template>
					</gal-card-header>
				</template>
				<div>
					<gal-tag v-for="item in info.tags" :key="item.id">{{
						item.name
					}}</gal-tag>
				</div>
			</gal-card>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { getEntryViewByID } from "../../../api/entriesAPI/index.js";
import { getSteamInforByID } from "../../../api/steamAPI/index.js";
import { useRoute } from "vue-router";
const route = useRoute();
const id = ref(route.params.id);

const infomationIcons = (name) => {
	const icons = {
		游戏平台: "gamepad",
		QQ群: "qqFill",
		别称: "idCard",
		发行时间: "calendarPlus",
		官网: "coffee",
		微博: "weibo",
		爱发电: "externalLinkSquareAlt"
	};
	return icons[name];
};

const info = ref({});
const steamInfo = ref({});
(async () => {
	const { data } = await getEntryViewByID(id.value);
	info.value = data;

	// 如果有 steamId 就 获取steam信息
	if (data.steamId) {
		const { data: steamData } = await getSteamInforByID(data.steamId);
		steamInfo.value = steamData;
	}
})();
</script>

<style scoped>
a,
.icon {
	color: var(--main-color);
}
.main-header {
	display: flex;
	padding: 16px;
	background-color: var(--main-bg-color);
	column-gap: 16px;
}
.production-title,
.production-item,
.publishers-title,
.publishers-item {
	font-size: 12px;
}
.production-group,
.publishers-group {
	display: inline-flex;
	align-items: center;
	width: 50%;
}
.brief-introduction {
	font-size: 14px;
}

@media screen and (max-width: 1200px) {
	.production-group,
	.publishers-group {
		width: 100%;
	}
}

.main-body {
	display: flex;
	column-gap: 24px;
	margin-block-start: 12px;
}
.main-extra {
	width: calc((100% - 16px) / 3 * 1);
	order: 2;
}
.main-main {
	width: calc((100% - 16px) / 3 * 2);
	order: 1;
}
.extra-card {
	background-color: var(--main-bg-color);
	font-size: 14px;
	margin-block-start: 12px;
}
.main-card {
	margin-block-start: 12px;
}

@media screen and (max-width: 1200px) {
	.main-extra {
		order: 0;
	}
}
</style>
