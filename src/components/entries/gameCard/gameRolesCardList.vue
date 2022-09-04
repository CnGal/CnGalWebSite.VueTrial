<template>
	<div class="container">
		<gal-card>
			<template v-slot:header>
				<gal-card-header>
					<template v-slot:start>
						<gal-icon
							class="icon"
							icon="users"
							size="1em"
						></gal-icon
						>&nbsp;&nbsp;{{ activeList.data?.name }} 角色预览
					</template>
					<template v-slot:end>
						<gal-link-button
							:text="'查看详情'"
							:icon="'shareAll'"
						></gal-link-button>
					</template>
				</gal-card-header>
				<gal-entries-game-roles-card
					:list="activeList.data"
				></gal-entries-game-roles-card>
				<gal-no-wrap-game-list
					cardName="galEntriesGameRolesPreview"
					v-if="!isMobile"
					:list="props.list"
				></gal-no-wrap-game-list>
				<gal-refresh-game-card-list
					v-else
					cardName="galEntriesGameRolesPreview"
					:list="allList"
					refreshText="换一个游戏"
				></gal-refresh-game-card-list>
			</template>
		</gal-card>
	</div>
</template>

<script setup>
import { ref, provide, reactive, watch } from "vue";

import { useStore } from "../../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

const props = defineProps({
	list: {
		type: [Object],
		required: true
	},
	allList: {
		type: [Object],
		required: true
	}
});

let active = ref(0);
const activeList = reactive({ data: null });

watch(
	() => props.list,
	(count) => {
		active.value = count[0].id;
	}
);
watch(active, (count) => {
	activeList.data = props.list.find((item) => item.id === count);
});

const changeActive = (newActive) => {
	active.value = newActive;
};

provide("active", active);
provide("changeActive", changeActive);
</script>

<style scoped>
.container :deep(.card-item) {
	flex: 0 0 calc((100% - (var(--column-gap) * 5)) / 6);
}
@media screen and (max-width: 1400px) {
	.container :deep(.card-item) {
		flex: 0 0 calc((100% - (var(--column-gap) * 3)) / 4);
	}
}
@media screen and (max-width: 1200px) {
	.container :deep(.card-item) {
		flex: 0 0 calc((100% - (var(--column-gap) * 2)) / 3);
	}
}
</style>
