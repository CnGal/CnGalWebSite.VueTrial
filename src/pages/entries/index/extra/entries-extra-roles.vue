<template>
	<gal-card class="roles-card" :toggle="true">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="child" size="1em"></gal-icon>登场角色
		</template>

		<gal-game-card-rows
			class="rows"
			:rows="info.roles"
			:rowHasCellTotal="1"
			:heightOverflowScroll="false"
		></gal-game-card-rows>
	</gal-card>
</template>

<script setup>
const props = defineProps({
	info: {
		type: Object,
		required: true,
	},
});
</script>

<style scoped>
.icon {
	margin-inline-end: 1em;
}

.roles-card.roles-card {
	background-color: transparent;
}
.rows {
	padding: 0;
	padding-block-start: 12px;
	background-color: transparent;
}
.rows :deep(.item) {
	row-gap: 0;
}
.rows :deep(.info) {
	display: none;
}
</style>
