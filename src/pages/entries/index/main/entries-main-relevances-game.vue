<template>
	<gal-card class="roles-card" :toggle="true">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="gamepad" size="1em"></gal-icon>相关游戏
		</template>

		<gal-game-card-rows
			class="rows"
			:rows="entryRelevances"
			:rowHasCellTotal="1"
			:heightOverflowScroll="false"
		></gal-game-card-rows>
	</gal-card>
</template>

<script setup>
const props = defineProps({
	entryRelevances: {
		type: Object,
		required: true,
	},
});
</script>

<style scoped>
.icon {
	margin-inline-end: 1em;
}

.rows {
	padding: 0;
	padding-block-start: 12px;
	background-color: transparent;
}
.rows :deep(.img) {
	width: 250px;
	aspect-ratio: unset;
	border-radius: 0;
}
</style>
