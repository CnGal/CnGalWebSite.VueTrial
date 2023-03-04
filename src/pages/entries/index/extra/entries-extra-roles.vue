<template>
	<gal-card class="roles-card" :toggle="true" width="full" transparent>
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="child"></gal-icon>登场角色
		</template>

		<gal-game-card-rows
			class="rows"
			:rows="info.roles"
			:hideTypeTag="true"
			:rowHasCellTotal="1"
			:heightOverflowScroll="false"
		></gal-game-card-rows>
	</gal-card>
</template>

<script setup>
const props = defineProps({
	info: {
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
