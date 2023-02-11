<template>
	<gal-table :data="props.data" stripe>
		<gal-table-column prop="realId" label="ID" width="80" fixed="left" />
		<gal-table-column prop="name" label="名称" min-width="200" />
		<gal-table-column prop="anotherName" label="别称" min-width="200" />
		<gal-table-column prop="bilibili" label="B站" min-width="200" />
		<gal-table-column prop="microBlog" label="微博" min-width="200" />
		<gal-table-column label="操作" width="80" fixed="right">
			<template #default="scope">
				<gal-link-button :to="`/entries/index/${scope.row.realId}`"
					>查看</gal-link-button
				>
			</template>
		</gal-table-column>
	</gal-table>
</template>

<script setup>
const props = defineProps({
	data: {
		type: [Object],
		required: true
	}
});
</script>

<style scoped></style>
