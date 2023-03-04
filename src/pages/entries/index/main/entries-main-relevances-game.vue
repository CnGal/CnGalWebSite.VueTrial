<template>
	<gal-card class="roles-card" :toggle="true" width="full" transparent>
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="gamepad"></gal-icon>相关游戏
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
		required: true
	}
});
</script>

<style scoped>
.rows {
	padding-block-start: 12px;
}
</style>
