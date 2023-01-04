<template>
	<gal_TagsHeader :info="info"></gal_TagsHeader>
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
	}
);
</script>

<style scoped></style>
