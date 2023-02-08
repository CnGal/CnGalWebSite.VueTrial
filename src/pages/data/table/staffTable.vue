<template>
	<gal-table :data="props.data" stripe>
		<gal-table-column prop="realId" label="ID" width="80" />
		<gal-table-column prop="gameName" label="游戏名称" min-width="200" />
		<gal-table-column prop="subcategory" label="分组" min-width="200" />
		<gal-table-column
			prop="positionOfficial"
			label="官方职位"
			min-width="200"
		/>
		<gal-table-column
			prop="nicknameOfficial"
			label="官方称呼"
			min-width="200"
		/>
		<gal-table-column
			prop="positionGeneral"
			label="通用职位"
			min-width="200"
		>
			<template #default="scope">
				{{
					stateStore.positionGeneralType[
						stateStore.positionGeneralTypeMap[
							scope.row.positionGeneral
						]
					]
				}}
			</template>
		</gal-table-column>
		<gal-table-column
			prop="subordinateOrganization"
			label="隶属组织"
			min-width="200"
		/>
	</gal-table>
</template>

<script setup>
import { useStateTypeStore } from "@/store/statetype.js";
const stateStore = useStateTypeStore();
const props = defineProps({
	data: {
		type: [Object],
		required: true
	}
});
</script>

<style scoped></style>
