<template>
	<gal-table :data="props.data" stripe>
		<gal-table-column prop="realId" label="ID" width="80" fixed="left" />
		<gal-table-column prop="issueTime" label="发行时间" width="110">
			<template #default="scope">
				{{ dateFormat(scope.row.issueTime, "YMD") }}
			</template>
		</gal-table-column>
		<gal-table-column prop="name" label="名称" min-width="200" />
		<gal-table-column prop="productionGroup" label="制作组" width="200" />
		<gal-table-column prop="original" label="原作" min-width="200" />
		<gal-table-column prop="gamePlatforms" label="游戏平台" width="200" />
		<gal-table-column prop="engine" label="引擎" min-width="200" />
		<gal-table-column prop="publisher" label="发行商" min-width="200" />
		<gal-table-column prop="gameNickname" label="游戏别称" width="200" />
		<gal-table-column prop="tags" label="标签" min-width="200" />
		<gal-table-column prop="issueMethod" label="发行方式" min-width="200" />
		<gal-table-column prop="officialWebsite" label="官网" min-width="200" />
		<gal-table-column prop="steamId" label="Steam平台ID" width="150" />
		<gal-table-column prop="qQgroupGame" label="QQ群" width="120" />
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
import { dateFormat } from "@/assets/common/js/formatDate.js";
const props = defineProps({
	data: {
		type: [Object],
		required: true
	}
});
</script>

<style scoped></style>
