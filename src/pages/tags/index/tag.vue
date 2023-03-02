<template>
	<gal-card class="breadcrumb" v-if="info.taglevels?.length">
		<gal-breadcrumb
			:item="
				info.taglevels.map((item, index) => {
					if (index === info.taglevels.length - 1) {
						return {
							value: item.key
						};
					}
					return {
						value: item.key,
						to: '/tags/index/' + item.value
					};
				})
			"
		></gal-breadcrumb>
	</gal-card>

	<galIndexPageViewHeader
		class="header-card"
		:info="info"
		type="tag"
	></galIndexPageViewHeader>

	<gal-card class="sub-tags" :toggle="true" v-if="info.childrenTags?.length">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="objectGroup"></gal-icon>子标签
		</template>
		<div class="sub-tag-wrapper">
			<gal-link
				v-for="tag in info.childrenTags"
				:key="tag.id"
				v-text="tag.name"
				:to="'/tags/index/' + tag.id"
				class="sub-tag"
			></gal-link>
		</div>
	</gal-card>

	<gal-card
		class="sub-entry"
		:toggle="true"
		width="full"
		v-if="info.childrenEntries?.length"
	>
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="objectGroup"></gal-icon>子词条
		</template>
		<gal-list
			class="sub-entry-list"
			:rowHasCellTotal="{
				xxLarge: 6,
				xLarge: 6,
				large: 4,
				medium: 3,
				small: 2
			}"
		>
			<gal-list-item
				v-for="(item, index) in info.childrenEntries.slice(
					(currentPage - 1) * 24,
					currentPage * 24
				)"
				:key="index"
			>
				<galNormalGameCard
					:data="item"
					type="entry"
				></galNormalGameCard>
			</gal-list-item>
		</gal-list>

		<galPagination
			class="pagination"
			v-if="info.childrenEntries.length > 24"
			:total="info.childrenEntries.length"
			v-model:currentPage="currentPage"
			:pageSize="24"
		></galPagination>
	</gal-card>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { getTag } from "../../../api/tagsAPI/index.js";
const route = useRoute();
const id = ref(route.params.id);

const info = ref({});
const getInfo = async () => {
	const { data } = await getTag(id.value);
	info.value = data;
};
getInfo();

const currentPage = ref(1);

// 监听 tags/index/:id  页面的变化
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
.header-card,
.sub-tags {
	margin-block-start: 12px;
}
.sub-tag-wrapper {
	display: flex;
	flex-wrap: wrap;
	row-gap: 1em;
}
.sub-tag {
	width: 22em;
}
.sub-entry {
	--card-body-bg-color: transparent;
	--card-box-shadow: unset;
	--card-header-box-shadow: var(--main-shadow);
	margin-block-start: 12px;
}
.sub-entry-list,
.pagination {
	margin-block-start: 16px;
}

.sub-entry-list {
	--list-row-gap: 8px;
}
</style>
