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

			<gal_EntriesMainNews
				class="extra-card"
				v-if="info.newsOfEntry?.length"
				:info="info"
			></gal_EntriesMainNews>
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
			<gal_EntriesExtraSteam
				class="extra-card"
				v-if="info.steamId"
				:steamId="info.steamId"
			></gal_EntriesExtraSteam>

			<gal_EntriesExtraInformation
				:info="info"
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
</style>
