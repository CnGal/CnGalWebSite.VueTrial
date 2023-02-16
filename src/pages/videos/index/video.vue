<template>
	<galIndexPageViewHeader :info="info" type="video"></galIndexPageViewHeader>

	<galIndexPageViewBody>
		<template v-slot:main>
			<gal-card class="main-card" v-if="info.pictures?.length">
				<template v-slot:headerStart>
					<gal-icon class="icon" icon="picture"></gal-icon
					>&nbsp;&nbsp;预览图
				</template>
				<gal-cg-card :data="info.pictures[0]"></gal-cg-card>
			</gal-card>

			<gal-card class="main-card" v-if="info.mainPage">
				<template v-slot:headerStart>
					<gal-icon class="icon" icon="homeFill"></gal-icon
					>&nbsp;&nbsp;介绍
				</template>
				<gal-markdown v-html="info.mainPage"></gal-markdown>
			</gal-card>

			<gal-card
				class="main-card"
				:toggle="true"
				width="full"
				v-if="info.relatedEntries?.length"
			>
				<template v-slot:headerStart>
					<gal-icon class="icon" icon="gamepad"></gal-icon>相关词条
				</template>

				<gal-game-card-rows
					class="rows"
					:rows="info.relatedEntries"
					:rowHasCellTotal="1"
					:heightOverflowScroll="false"
				></gal-game-card-rows>
			</gal-card>

			<galConmmentsList
				class="main-card"
				:id="id"
				:type="stateStore.commentType.CommentVideo"
			></galConmmentsList>
		</template>
		<template v-slot:extra>
			<gal_VideoExtraUser
				class="extra-card"
				v-if="info.userInfor"
				:information="info.userInfor"
			></gal_VideoExtraUser>

			<galIndexPageExtraInformation
				:information="[
					{
						informations: [
							{
								displayName: info.type
							},
							{
								displayName: info.isCreatedByCurrentUser
									? '原创'
									: '转载'
							},
							{
								displayName: '浏览数',
								displayValue: info.readerCount
							},
							{
								displayName: '时长',
								displayValue: info.duration
							},
							{
								displayName: '原作者',
								displayValue: info.originalAuthor
							},
							{
								displayName: '发布时间',
								displayValue: dateFormat(
									info.pubishTime,
									'YMDhms'
								)
							}
						],
						modifier: '基本信息'
					}
				]"
			></galIndexPageExtraInformation>

			<galIndexPageExtraOtherRelevances
				class="extra-card"
				v-if="info.relatedOutlinks?.length"
				:otherRelevances="info.relatedOutlinks"
			></galIndexPageExtraOtherRelevances>
		</template>
	</galIndexPageViewBody>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { getVideoByID } from "@/api/videoAPI/index.js";
import gal_VideoExtraUser from "./extra/video-extra-user.vue";
import { dateFormat } from "@/assets/common/js/formatDate.js";
import { useStateTypeStore } from "@/store/statetype.js";
import { useRoute } from "vue-router";
const route = useRoute();
const stateStore = useStateTypeStore();
const id = ref(route.params.id);

const info = ref({});
const getInfo = async () => {
	const { data } = await getVideoByID(id.value);
	info.value = data;
	changePageTiele();
};
getInfo();

// 监听 videos/index/:id  页面的变化
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
const changePageTiele = () => {
	document.title = info.value.displayName + " - CnGal 中文GalGame资料站";
};
</script>

<style scoped>
.main-card,
.extra-card,
.rows {
	margin-block-start: 12px;
}
</style>
