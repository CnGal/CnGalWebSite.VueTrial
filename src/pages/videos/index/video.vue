<template>
	<galIndexPageViewHeader :info="info" type="video"></galIndexPageViewHeader>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { getVideoByID } from "@/api/videoAPI/index.js";
import { useRoute } from "vue-router";
const route = useRoute();
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

<style scoped></style>
