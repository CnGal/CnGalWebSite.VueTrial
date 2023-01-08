<template>
	<gal-card class="card" :toggle="true">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="gamepad"></gal-icon>相关文章
		</template>

		<gal-game-card-rows
			class="rows"
			type="article"
			:rows="props.articleRelevances"
			:rowHasCellTotal="1"
			:heightOverflowScroll="false"
		></gal-game-card-rows>
	</gal-card>
</template>

<script setup>
const props = defineProps({
	articleRelevances: {
		type: [Object],
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
