<template>
	<gal-card class="extra-card">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="tags" size="1em"></gal-icon>标签
		</template>
		<div class="content">
			<gal-link-button
				v-for="item in info.tags"
				:key="item.id"
				:to="'/tags/index/' + item.id"
				theme="solid"
			>
				{{ item.name }}
			</gal-link-button>
		</div>
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
.content {
	display: flex;
	padding: 1em;
	padding-block-start: 0;
	flex-wrap: wrap;
	column-gap: 8px;
	row-gap: 8px;
}
.icon {
	margin-inline-end: 1em;
}
</style>
