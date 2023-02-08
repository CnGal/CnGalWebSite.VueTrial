<template>
	<gal-table :data="props.data" stripe>
		<gal-table-column prop="gameId" label="ID" width="80" fixed="left" />
		<gal-table-column prop="gameName" label="游戏名" min-width="200" />
		<gal-table-column
			prop="allTotalSocre"
			label="总分(所有)"
			min-width="200"
		>
			<template #default="scope">
				{{ scope.row.allTotalSocre.toFixed(5) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="allCVSocre" label="配音" min-width="200">
			<template #default="scope">
				{{ scope.row.allCVSocre.toFixed(5) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="allSystemSocre" label="程序" min-width="200">
			<template #default="scope">
				{{ scope.row.allSystemSocre.toFixed(5) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="allShowSocre" label="演出" min-width="200">
			<template #default="scope">
				{{ scope.row.allShowSocre.toFixed(5) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="allPaintSocre" label="美术" min-width="200">
			<template #default="scope">
				{{ scope.row.allPaintSocre.toFixed(5) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="allScriptSocre" label="剧本" min-width="200">
			<template #default="scope">
				{{ scope.row.allScriptSocre.toFixed(5) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="allMusicSocre" label="音乐" min-width="200">
			<template #default="scope">
				{{ scope.row.allMusicSocre.toFixed(5) }}
			</template>
		</gal-table-column>
		<gal-table-column
			prop="filterTotalSocre"
			label="总分(过滤后)"
			min-width="200"
		>
			<template #default="scope">
				{{ scope.row.filterTotalSocre.toFixed(5) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="filterCVSocre" label="配音" min-width="200">
			<template #default="scope">
				{{ scope.row.filterCVSocre.toFixed(5) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="filterSystemSocre" label="程序" min-width="200">
			<template #default="scope">
				{{ scope.row.filterSystemSocre.toFixed(5) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="filterShowSocre" label="演出" min-width="200">
			<template #default="scope">
				{{ scope.row.filterShowSocre.toFixed(5) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="filterPaintSocre" label="美术" min-width="200">
			<template #default="scope">
				{{ scope.row.filterPaintSocre.toFixed(5) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="filterScriptSocre" label="剧本" min-width="200">
			<template #default="scope">
				{{ scope.row.filterScriptSocre.toFixed(5) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="filterMusicSocre" label="音乐" min-width="200">
			<template #default="scope">
				{{ scope.row.filterMusicSocre.toFixed(5) }}
			</template>
		</gal-table-column>
		<gal-table-column label="操作" width="80" fixed="right">
			<template #default="scope">
				<gal-link-button :to="`/entries/index/${scope.row.gameId}`"
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
