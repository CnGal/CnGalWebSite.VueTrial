<template>
	<el-collapse-item>
		<template #title>
			<slot name="title"></slot>
		</template>
		<slot></slot>
	</el-collapse-item>
</template>

<script setup>
import "element-plus/es/components/collapse-item/style/css";
import { ElCollapseItem } from "element-plus";

console.log(111);
</script>

<style></style>
