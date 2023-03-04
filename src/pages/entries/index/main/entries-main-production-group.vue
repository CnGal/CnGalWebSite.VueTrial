<template>
	<gal-card class="production-group" :toggle="true" width="full" transparent>
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="objectGroup"></gal-icon>相关组织
		</template>

		<gal-game-card-rows
			class="rows"
			:rows="entryRelevances"
			:hideTypeTag="true"
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
	margin-block-start: 12px;
}
</style>
