<template>
	<gal_EntriesHeader :info="info"></gal_EntriesHeader>
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
				<gal-markdown
					:style="{ padding: '16px', 'padding-top': 0 }"
					:data="info.mainPage"
				></gal-markdown>
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
					info.information.some((i) => i.modifier === '基本信息')
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
					v-for="(item, index) in info.information
						.find((i) => i.modifier === '基本信息')
						.informations.filter((i) => i.displayName !== '官网') ||
					[]"
					:key="index"
				>
					<gal-icon
						class="icon"
						:icon="infomationIcons(item)"
						size="1em"
					></gal-icon>
					<span>{{ showInformationKeyText(item.displayName) }}:</span
					>&nbsp;&nbsp;
					<span>{{ item.displayValue }}</span>
				</div>
			</gal-card>
			<gal-card
				class="extra-card"
				v-if="
					info.information &&
					info.information.some(
						(i) =>
							i.modifier === '相关网站' ||
							i.informations.some((j) => j.displayName === '官网')
					)
				"
			>
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
					v-for="(item, index) in [
						...info.information.find(
							(i) => i.modifier === '相关网站'
						)?.informations,
						...info.information
							.find((i) => i.modifier === '基本信息')
							?.informations?.filter(
								(i) => i.displayName === '官网'
							)
					]"
					:key="index"
					class="single-row-dot"
				>
					<gal-icon
						class="icon"
						:icon="infomationIcons(item)"
						size="1em"
					></gal-icon>
					<span>{{ showInformationKeyText(item.displayName) }}:</span
					>&nbsp;&nbsp;
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
			<gal-card class="extra-card" v-if="info.staffs?.length">
				<template v-slot:header>
					<gal-card-header>
						<template v-slot:start>
							<gal-icon
								class="icon"
								icon="sitemap"
								size="1em"
							></gal-icon
							>&nbsp;&nbsp;Staff
						</template>
					</gal-card-header>
				</template>
				<div>
					<div
						v-for="(item, index) in info.staffs[0].staffList"
						:key="index"
					>
						<gal-tag>{{ item.modifier }}</gal-tag>
						<gal-link-button
							class="publishers-item"
							v-for="item in item.names"
							:key="item.id"
							:to="item.id ? '/entries/index/' + item.id : '#'"
							:text="item.displayName"
							:style="{ display: 'inline-flex' }"
						></gal-link-button>
					</div>
				</div>
			</gal-card>
			<gal-card class="extra-card" v-if="info.roles?.length">
				<template v-slot:header>
					<gal-card-header>
						<template v-slot:start>
							<gal-icon
								class="icon"
								icon="child"
								size="1em"
							></gal-icon
							>&nbsp;&nbsp;登场角色
						</template>
					</gal-card-header>
				</template>
				<div>
					<gal-entries-game-roles-card
						:roles="info.roles"
						:rowHasCellTotal="1"
					></gal-entries-game-roles-card>
				</div>
			</gal-card>
			<gal-card class="extra-card" v-if="info.otherRelevances?.length">
				<template v-slot:header>
					<gal-card-header>
						<template v-slot:start>
							<gal-icon
								class="icon"
								icon="link"
								size="1em"
							></gal-icon
							>&nbsp;&nbsp;外部链接
						</template>
					</gal-card-header>
				</template>
				<div>
					<gal-alert type="warning"
						>以下为外部链接，与本站没有任何从属关系，本站亦不对其安全性负责</gal-alert
					>
					<div
						v-for="item in info.otherRelevances"
						:key="item.id"
						class="otherRelevances"
					>
						<img
							src="/images/otherRelevances/Bangumi.png"
							:alt="item.displayName"
						/>
						<h5>{{ item.displayName }}</h5>
					</div>
				</div>
			</gal-card>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import gal_EntriesHeader from "./entries-header.vue";
import { getEntryViewByID } from "../../../api/entriesAPI/index.js";
import { getSteamInforByID } from "../../../api/steamAPI/index.js";
import { useRoute } from "vue-router";
const route = useRoute();
const id = ref(route.params.id);

const infomationIcons = (infomation) => {
	const icons = {
		游戏平台: "gamepad",
		QQ群: "qqFill",
		别称: "idCard",
		发行时间: "calendarPlus",
		发行方式: "bullhorn",
		官网: "coffee",
		微博: "weibo",
		爱发电: "externalLinkSquareAlt",
		TapTap: "externalLinkSquareAlt",
		steam: "externalLinkSquareAlt",
		bilibili: "externalLinkSquareAlt",
		下载地址: "externalLinkSquareAlt",
		引擎: "anchor"
	};
	return icons[infomation.displayName];
};
const showInformationKeyText = (text) => {
	return text;
};

const info = ref({});
const steamInfo = ref({});
const getInfo = async () => {
	const { data } = await getEntryViewByID(id.value);
	info.value = data;

	// 如果有 steamId 就 获取steam信息
	if (data.steamId) {
		const { data: steamData } = await getSteamInforByID(data.steamId);
		steamInfo.value = steamData;
	}
};
getInfo();

// 监听 entries/index/:id  页面的变化
watch(
	() => route.params,
	(newURL) => {
		id.value = newURL.id;
		getInfo();
	}
);
</script>

<style scoped>
a,
.icon {
	color: var(--main-color);
}

.main-body {
	display: flex;
	column-gap: 24px;
	margin-block-start: 12px;
}
.main-extra {
	width: min(calc((100% - 16px) / 3 * 1), 400px);
}
.main-main {
	flex: calc((100% - 16px) / 3 * 2);
}
.extra-card {
	background-color: var(--main-bg-color);
	font-size: 14px;
	margin-block-start: 12px;
}
.main-card {
	margin-block-start: 12px;
}
.otherRelevances {
	display: inline-flex;
	align-items: center;
	column-gap: 1em;
	padding: 12px;
}
.otherRelevances img {
	height: 116px;
	object-fit: cover;
	aspect-ratio: 1 / 1;
}
.otherRelevances h5 {
	font-size: 20px;
}

@media screen and (max-width: 1200px) {
	.main-extra {
		order: 0;
	}
}
</style>
