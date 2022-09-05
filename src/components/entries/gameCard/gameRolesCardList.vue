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
						>&nbsp;&nbsp;{{ activeList.name }} 角色预览
					</template>
					<template v-slot:end>
						<gal-link-button
							class="link-button"
							:text="'查看详情'"
							:icon="'shareAll'"
						></gal-link-button>
					</template>
				</gal-card-header>
				<gal-entries-game-roles-card
					:list="activeList"
				></gal-entries-game-roles-card>
				<gal-no-wrap-game-list
					cardName="galEntriesGameRolesPreview"
					v-if="!isMobile"
					:list="gameRoles"
				></gal-no-wrap-game-list>
				<button
					v-else
					class="refresh-btn"
					@click="
						changeActive(
							getRandom(0, allGameRoles.length - 1),
							false
						)
					"
				>
					<gal-icon
						icon="refresh"
						class="icon"
						size="12px"
					></gal-icon>
					换一个游戏
				</button>
			</template>
		</gal-card>
	</div>
</template>

<script setup>
import { ref, provide, computed } from "vue";
import { getGameRoles } from "../../../api/entriesAPI/index.js";
import {
	getNonRepeatRandomList,
	getRandom
} from "../../../assets/common/js/random.js";

import { useStore } from "../../../store/index.js";
const store = useStore();
const isMobile = store.isMobile;

const normalShowCardCount = isMobile ? 2 : 12;

// 获取游戏以及角色
const gameRoles = ref([]);
const allGameRoles = ref([]);

let { data } = await getGameRoles();
gameRoles.value = getNonRepeatRandomList(data, normalShowCardCount);
allGameRoles.value = data;
data = undefined;

const changeActive = (newActive, isID) => {
	if (isID) {
		activeIndex.value = allGameRoles.value.findIndex(
			(item) => item.id === newActive
		);
	} else {
		activeIndex.value = newActive;
	}
};

const activeIndex = ref(0);
changeActive(gameRoles.value[0].id, true);
const activeList = computed(() => allGameRoles.value[activeIndex.value]);

provide("active", activeList);
provide("changeActive", changeActive);
</script>

<style scoped>
.refresh-btn {
	display: block;
	font-size: 12px;
	border: none;
	border-radius: 1em;
	background-color: var(--pink-color);
	color: var(--white-color);
	margin: 0 auto;
}
.icon {
	margin-inline-end: 8px;
}
.link-button {
	flex: 0 0 auto;
}
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
