<template>
	<el-checkbox></el-checkbox>
</template>

<script setup>
import "element-plus/es/components/checkbox/style/css";
import { ElCheckbox } from "element-plus";
</script>

<style>
.el-checkbox {
    --el-checkbox-input-height: 24px;
    --el-checkbox-input-width: 24px;

    --el-checkbox-checked-bg-color: var(--main-color);
    --el-checkbox-checked-input-border-color: var(--main-color);
    --el-checkbox-input-border-color-hover: var(--main-color);

    --el-checkbox-font-size: 16px;
}
.el-checkbox__inner::after {
    width: 6px;
    height: 14px;
    border-width: 2px;
    left: 6px;
}
.el-checkbox__input.is-checked+.el-checkbox__label {
    color: var(--grey-color);

}

</style>
