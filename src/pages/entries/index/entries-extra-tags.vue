<template>
	<gal-card class="extra-card">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon class="icon" icon="tags" size="1em"></gal-icon
					>标签
				</template>
			</gal-card-header>
		</template>
		<div class="content">
			<gal-link-button
				v-for="item in info.tags"
				:key="item.id"
				:to="'/tags/index/' + item.id"
				:text="item.name"
				theme="solid"
			></gal-link-button>
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
