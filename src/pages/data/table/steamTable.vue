<template>
	<gal-table :data="props.data" stripe>
		<gal-table-column
			prop="entryId"
			label="词条ID"
			width="80"
			fixed="left"
		/>
		<gal-table-column prop="name" label="游戏名称" min-width="200" />
		<gal-table-column prop="steamId" label="SteamID" min-width="200" />
		<gal-table-column prop="originalPrice" label="原价￥" min-width="200">
			<template #default="scope">
				{{ (scope.row.originalPrice / 100).toFixed(2) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="priceNow" label="现价￥" min-width="200">
			<template #default="scope">
				{{ (scope.row.priceNow / 100).toFixed(2) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="cutNow" label="当前折扣%" min-width="200" />
		<gal-table-column
			prop="priceLowest"
			label="历史最低价￥"
			min-width="200"
		>
			<template #default="scope">
				{{ (scope.row.priceLowest / 100).toFixed(2) }}
			</template>
		</gal-table-column>
		<gal-table-column
			prop="cutLowest"
			label="历史最高折扣%"
			min-width="200"
		/>
		<gal-table-column
			prop="evaluationCount"
			label="评测数"
			min-width="200"
		/>
		<gal-table-column
			prop="recommendationRate"
			label="好评率"
			min-width="200"
		/>
		<gal-table-column label="操作" width="80" fixed="right">
			<template #default="scope">
				<gal-link-button :to="`/entries/index/${scope.row.entryId}`"
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
