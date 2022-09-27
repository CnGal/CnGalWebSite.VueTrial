<template>
	<gal-card class="roles-card">
		<template v-slot:header>
			<gal-card-header :toggle="true" :toggleChange="toggleChange">
				<template v-slot:start>
					<gal-icon class="icon" icon="child" size="1em"></gal-icon
					>登场角色
				</template>
			</gal-card-header>
		</template>

		<gal-game-card-rows
			v-show="contentIsShow"
			class="roles-content"
			:rows="info.roles"
			:rowHasCellTotal="1"
			:heightOverflowScroll="false"
		></gal-game-card-rows>
	</gal-card>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
	info: {
		type: Object,
		required: true,
	},
});

const contentIsShow = ref(true);
const toggleChange = (isShow) => {
	contentIsShow.value = isShow;
};
</script>

<style scoped>
.content {
	display: flex;
	padding: 1em;
	padding-block-start: 0;
	flex-wrap: wrap;
	column-gap: 8px;
	row-gap: 8px;
}
.icon {
	margin-inline-end: 1em;
}

.roles-card.roles-card {
	background-color: transparent;
}
.roles-content {
	padding: 0;
	padding-block-start: 12px;
	background-color: transparent;
}

.roles-content :deep(.item) {
	row-gap: 0;
}
.roles-content :deep(.info) {
	display: none;
}
</style>
