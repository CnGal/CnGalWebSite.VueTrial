<template>
	<div class="about-wrapper">
		<gal-card class="nav-card" width="full">
			<gal-tree
				class="tree"
				v-if="documents?.length"
				:data="documents"
			></gal-tree>
		</gal-card>
	</div>
</template>

<script setup>
import { ref } from "vue";

import { getDocuments } from "../../api/homeAPI/index.js";

let documents = ref([]);
(async () => {
	const data = await getDocuments();
	documents.value = data.data;
})();
</script>

<style scoped>
.about-wrapper {
	display: flex;
}
.nav-card {
	--card-body-bg-color: var(--main-bg-color);
	margin-right: 20px;
}
.nav-card .tree {
	width: 300px;
}
</style>
