<template>
	<el-collapse>
		<slot></slot>
	</el-collapse>
</template>

<script setup>
import "element-plus/es/components/collapse/style/css";
import { ElCollapse } from "element-plus";
</script>

<style>
.el-collapse {
	--el-collapse-header-height: auto;
}

.el-collapse-item__header {
	padding: 16px 24px;
}
.el-collapse-item__content {
	padding: 0 24px 16px;
}

.el-collapse-item__header.focusing:focus:not(:hover) {
	color: #000;
}
</style>
