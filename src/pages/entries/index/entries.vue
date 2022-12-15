<template>
	<gal-alert class="alert" type="error" v-if="info.type === 3"
		>这个词条可能涉及到现实人物，请勿过分较真，也请谨慎编辑，仔细斟酌词句</gal-alert
	>
	<gal_EntriesHeader :info="info"></gal_EntriesHeader>
	<div class="main-body">
		<div class="main-main">
			<gal-card class="main-card" v-if="info.pictures?.length">
				<template v-slot:headerStart>
					<gal-icon class="icon" icon="picture" size="1em"></gal-icon
					>&nbsp;&nbsp;相册
				</template>
				<galEntriesGameCGsCard
					:data="info.pictures[0]"
				></galEntriesGameCGsCard>
			</gal-card>

			<gal-card class="main-card" v-if="info.mainPage">
				<template v-slot:headerStart>
					<gal-icon class="icon" icon="homeFill" size="1em"></gal-icon
					>&nbsp;&nbsp;介绍
				</template>
				<gal-markdown
					:style="{ padding: '16px', 'padding-top': 0 }"
					v-html="info.mainPage"
				></gal-markdown>
			</gal-card>

			<gal_EntriesMainNews
				class="extra-card"
				v-if="info.newsOfEntry?.length"
				:info="info"
			></gal_EntriesMainNews>

			<gal_EntriesMainStaffGames
				class="main-card"
				v-if="info.staffGames?.length"
				:staffGames="info.staffGames"
			></gal_EntriesMainStaffGames>

			<gal_EntriesMainEelevancesGame
				class="main-card"
				v-if="
					info.entryRelevances?.length &&
					info.entryRelevances.some((i) => i.type === 0)
				"
				:entryRelevances="
					info.entryRelevances.filter((i) => i.type === 0)
				"
			></gal_EntriesMainEelevancesGame>

			<gal_EntriesMainProductionGroup
				class="main-card"
				v-if="
					info.entryRelevances?.length &&
					info.entryRelevances.some((i) => i.type === 2)
				"
				:entryRelevances="
					info.entryRelevances.filter((i) => i.type === 2)
				"
			></gal_EntriesMainProductionGroup>

			<gal_EntriesMainEelevancesArticle
				class="main-card"
				v-if="info.articleRelevances?.length"
				:articleRelevances="info.articleRelevances"
			></gal_EntriesMainEelevancesArticle>

			<gal_EntriesMainComments
				class="main-card"
				:id="id"
			></gal_EntriesMainComments>
		</div>
		<div class="main-extra">
			<gal-card class="extra-card" v-if="info.type === 0">
				<template v-slot:headerStart>
					<gal-icon class="icon" icon="star" size="1em"></gal-icon
					>&nbsp;&nbsp;游玩记录
				</template>
				<template v-slot:headerEnd>
					<gal-link-button to="/" class="link-button">
						<gal-icon icon="shareAll"></gal-icon>查看详情
					</gal-link-button>
				</template>
				<div :style="{ 'text-align': 'center' }">暂无记录</div>
				<gal-link-button to="/" :style="{ display: 'flex' }">
					<gal-icon icon="login"></gal-icon>登入后添加游玩记录
				</gal-link-button>
			</gal-card>
			<gal_EntriesExtraSteam
				class="extra-card"
				v-if="info.steamId"
				:steamId="info.steamId"
			></gal_EntriesExtraSteam>

			<gal_EntriesExtraInformation
				:information="info.information || []"
			></gal_EntriesExtraInformation>

			<gal_EntriesExtraTags
				:info="info"
				class="extra-card"
				v-if="info.tags?.length"
			></gal_EntriesExtraTags>

			<gal_EntriesExtraStaffs
				:info="info"
				class="extra-card"
				v-if="info.staffs?.length"
			></gal_EntriesExtraStaffs>

			<gal_EntriesExtraRoles
				:info="info"
				class="extra-card"
				v-if="info.roles?.length"
			></gal_EntriesExtraRoles>

			<gal_EntriesExtraOtherRelevances
				:info="info"
				class="extra-card"
				v-if="info.otherRelevances?.length"
			></gal_EntriesExtraOtherRelevances>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";
import gal_EntriesHeader from "./entries-header.vue";
import gal_EntriesExtraSteam from "./extra/entries-extra-steam.vue";
import gal_EntriesExtraInformation from "./extra/entries-extra-information.vue";
import gal_EntriesExtraTags from "./extra/entries-extra-tags.vue";
import gal_EntriesExtraOtherRelevances from "./extra/entries-extra-otherRelevances.vue";
import gal_EntriesExtraRoles from "./extra/entries-extra-roles.vue";
import gal_EntriesExtraStaffs from "./extra/entries-extra-staffs.vue";

import gal_EntriesMainNews from "./main/entries-main-news.vue";
import gal_EntriesMainProductionGroup from "./main/entries-main-production-group.vue";
import gal_EntriesMainStaffGames from "./main/entries-main-staff-games.vue";
import gal_EntriesMainEelevancesGame from "./main/entries-main-relevances-game.vue";
import gal_EntriesMainEelevancesArticle from "./main/entries-main-relevances-article.vue";
import gal_EntriesMainComments from "./main/entries-main-comments.vue";

import { getEntryViewByID } from "../../../api/entriesAPI/index.js";

import { useRoute } from "vue-router";
const route = useRoute();
const id = ref(route.params.id);

const info = ref({});
const getInfo = async () => {
	const { data } = await getEntryViewByID(id.value);
	info.value = data;
};
getInfo();

// 监听 entries/index/:id  页面的变化
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
a,
.icon {
	color: var(--main-color);
}
.theme-dark a,
.theme-dark .icon {
	color: var(--main-font-color);
}

.main-body {
	display: flex;
	column-gap: 24px;
	margin-block-start: 12px;
	color: var(--main-font-color);
}
.main-extra {
	width: clamp(320px, calc((100% - 16px) / 3 * 1), 400px);
}
.main-main {
	flex: 1;
}
.extra-card {
	background-color: var(--main-bg-color);
	font-size: 14px;
	margin-block-start: 12px;
}
.main-card {
	margin-block-start: 12px;
}

@media screen and (max-width: 992px) {
	.main-body {
		flex-direction: column-reverse;
	}
	.main-extra {
		width: 100%;
	}
}

.alert {
	background-color: var(--main-bg-color);
	margin-block-end: 16px;
}
</style>
