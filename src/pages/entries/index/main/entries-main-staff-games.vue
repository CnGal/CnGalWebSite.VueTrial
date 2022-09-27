<template>
	<gal-card class="staff-games">
		<template v-slot:header>
			<gal-card-header :toggle="true" :toggleChange="toggleChange">
				<template v-slot:start>
					<gal-icon class="icon" icon="send2" size="1em"></gal-icon
					>参与作品
				</template>
			</gal-card-header>
		</template>

		<gal-game-card-rows
			v-show="contentIsShow"
			class="content"
			:rows="staffGames"
			:rowHasCellTotal="1"
			:heightOverflowScroll="false"
		></gal-game-card-rows>
	</gal-card>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
	staffGames: {
		type: [Object],
		required: true,
	},
});

const contentIsShow = ref(true);
const toggleChange = (isShow) => {
	contentIsShow.value = isShow;
};
</script>

<style scoped>
.icon {
	margin-inline-end: 1em;
}
.content {
	padding: 0;
	padding-block-start: 12px;
	background-color: transparent;
}
.content :deep(.img) {
	height: 116px;
	aspect-ratio: 250 / 117;
	border-radius: unset;
}
</style>
