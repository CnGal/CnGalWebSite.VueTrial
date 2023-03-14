<template>
	<gal-card class="main-card">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="newspaper"></gal-icon>相关视频
		</template>
		<gal-no-wrap-game-list
			cardName="galNormalGameCard"
			:list="props.videoRelevances"
			v-if="props.videoRelevances?.length"
			type="video"
			class="video-list"
		></gal-no-wrap-game-list>
	</gal-card>
</template>

<script setup>
const props = defineProps({
	videoRelevances: {
		type: [Object],
		required: true
	}
});
</script>

<style scoped>
.video-list :deep(.name) {
	font-size: 16px;
}
</style>
