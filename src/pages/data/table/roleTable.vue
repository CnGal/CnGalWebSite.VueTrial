<template>
	<gal-table :data="props.data" stripe>
		<gal-table-column prop="realId" label="ID" width="80" fixed="left" />
		<gal-table-column prop="name" label="名称" min-width="120" />
		<gal-table-column prop="gameName" label="登场游戏" min-width="200" />
		<gal-table-column prop="cv" label="声优" min-width="200" />
		<gal-table-column prop="anotherNameRole" label="别称" min-width="200" />
		<gal-table-column label="性别" width="80">
			<template #default="scope">
				{{ ["保密", "男", "女"][scope.row.gender] }}
			</template>
		</gal-table-column>
		<gal-table-column prop="birthday" label="生日" width="100">
			<template #default="scope">
				{{ dateFormat(scope.row.birthday, "YM") }}
			</template>
		</gal-table-column>
		<gal-table-column prop="haircolor" label="发色" width="100" />
		<gal-table-column prop="pupilcolor" label="瞳色" width="100" />
		<gal-table-column prop="figureData" label="身材数据" min-width="200" />
		<gal-table-column
			prop="figureSubjective"
			label="身材(主观)"
			min-width="200"
		/>
		<gal-table-column
			prop="clothesAccessories"
			label="服饰"
			min-width="200"
		/>
		<gal-table-column prop="character" label="性格" min-width="200" />
		<gal-table-column
			prop="roleIdentity"
			label="角色身份"
			min-width="200"
		/>
		<gal-table-column prop="bloodType" label="血型" width="80" />
		<gal-table-column prop="roleHeight" label="身高" width="100" />
		<gal-table-column prop="roleAge" label="年龄" width="100" />
		<gal-table-column prop="roleTaste" label="兴趣" min-width="200" />
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
