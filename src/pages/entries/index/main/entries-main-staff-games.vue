<template>
	<gal-card class="staff-games" :toggle="true">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="send2"></gal-icon>参与作品
		</template>

		<gal-game-card-rows
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
		required: true
	}
});
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
