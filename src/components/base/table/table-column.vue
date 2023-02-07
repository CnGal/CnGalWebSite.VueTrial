<template>
	<el-table-column>
		<template #default="scope" v-if="$slots.default">
			<slot :row="scope.row"></slot>
		</template>
	</el-table-column>
</template>

<script setup>
import "element-plus/es/components/table-column/style/css";
import { ElTableColumn } from "element-plus";
</script>

<style></style>
