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

	<gal_TagsHeader class="header-card" :info="info"></gal_TagsHeader>

	<gal-card class="sub-tags" :toggle="true" v-if="info.childrenTags?.length">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="objectGroup" size="1em"></gal-icon
			>子标签
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
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import gal_TagsHeader from "../../../components/common/header/viewHeader.vue";
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
</style>
