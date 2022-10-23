<template>
	<el-date-picker></el-date-picker>
</template>

<script setup>
import "element-plus/es/components/date-picker/style/css";
import { ElDatePicker } from "element-plus";
</script>

<style>
.el-date-editor {
	--el-input-border-color: var(--main-color);
	--el-input-hover-border-color: var(--main-color);
}
.el-range__icon {
	--el-text-color-placeholder: var(--main-color);
}
.el-date-range-picker {
	--el-datepicker-active-color: var(--main-color);
	--el-datepicker-hover-text-color: var(--main-color);
}
.el-date-table td.today .el-date-table-cell__text {
	color: var(--main-color);
}
</style>
