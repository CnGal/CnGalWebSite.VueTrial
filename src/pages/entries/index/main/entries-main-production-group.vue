<template>
	<gal-card class="production-group" :toggle="true">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="objectGroup" size="1em"></gal-icon
			>相关组织
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
.icon {
	margin-inline-end: 1em;
}

.rows {
	padding: 0;
	padding-block-start: 12px;
	background-color: transparent;
}
</style>
