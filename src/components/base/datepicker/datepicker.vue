<template>
	<el-config-provider :locale="zhCn">
		<div
			ref="datepickerWrapper"
			:class="{ simplt: isSimplt, 'datepicker-wrapper': true }"
		>
			<el-date-picker
				v-bind="$attrs"
				@focus="focusEvent"
				@blur="blurEvent"
				@visible-change="visibleChangeEvent"
			></el-date-picker>
			<i v-if="isSimplt" class="bottom" aria-hidden="true"></i>
		</div>
	</el-config-provider>
</template>

<script setup>
import "element-plus/es/components/date-picker/style/css";
import zhCn from "element-plus/dist/locale/zh-cn.min.mjs";
import { ElDatePicker, ElConfigProvider } from "element-plus";
import { ref, useAttrs } from "vue";

const isSimplt = ref(false);
const attrs = useAttrs();
if (attrs.simplt !== undefined) {
	isSimplt.value = true;
}

const datepickerWrapper = ref(null);
const focusEvent = (ev) => {
	datepickerWrapper.value.classList.add("gal-state-focus");
};
const blurEvent = (ev) => {
	datepickerWrapper.value.classList.remove("gal-state-focus");
};
const visibleChangeEvent = (visibility) => {
	if (visibility) {
		datepickerWrapper.value.classList.add("gal-state-focus");
	} else {
		datepickerWrapper.value.classList.remove("gal-state-focus");
	}
};
</script>

<style>
.el-date-editor {
	--el-input-border-color: var(--main-color);
	--el-input-hover-border-color: var(--main-color);
	--el-input-focus-border-color: var(--main-color);
}
.el-range__icon {
	--el-text-color-placeholder: var(--main-color);
}
.el-date-picker,
.el-date-range-picker {
	--el-datepicker-active-color: var(--main-color);
	--el-datepicker-hover-text-color: var(--main-color);
}
.el-date-table td.today .el-date-table-cell__text,
.el-month-table td.today .cell {
	color: var(--main-color);
}
.datepicker-wrapper.simplt .el-input__wrapper {
	box-shadow: none;
}
.datepicker-wrapper.simplt.gal-state-focus .el-input__prefix {
	--el-input-icon-color: var(--main-color);
}
</style>

<style scoped>
.datepicker-wrapper {
	position: relative;
}

.bottom {
	position: absolute;
	inset: 0;
	pointer-events: none;
}
.search-input-wrap .bottom {
	inset: 0 48px 0 0;
}
.bottom::before,
.bottom::after {
	content: "";
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
}
.bottom::before {
	height: 1px;
	width: 100%;
	background-color: var(--gray-color);
}
.bottom::after {
	height: 2px;
	width: 100%;
	background-color: var(--main-color);
	transform: scaleX(0);
	transition: transform 0.3s;
}
.datepicker-wrapper.simplt.gal-state-focus .bottom::after {
	transform: scaleX(1);
}
</style>
