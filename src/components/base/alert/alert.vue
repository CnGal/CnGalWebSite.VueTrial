<template>
	<div class="alert-box" :class="[props.type]">
		<gal-icon class="icon" :icon="iconNames[props.type]"></gal-icon>
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps({
	type: {
		type: String,
		default: "warning"
	}
});
const iconNames = {
	warning: "alertOutline",
	error: "alertCircleOutline"
};
</script>

<style scoped>
.alert-box {
	--warning-color: #fb8c00;
	--error-color: #ff5252;

	--alert-width: 100%;
	--alert-padding: 16px;
	--alert-col-gap: 8px;

	--alert-text-font-size: 16px;
	--alert-icon-font-size: 24px;
	--alert-bg-color: var(--main-bg-color);
	--alert-box-shadow: var(--main-shadow);
}
.alert-box {
	display: flex;
	align-items: flex-start;
	box-sizing: border-box;
	border-inline-start: 8px solid;
	width: var(--alert-width);
	font-size: var(--alert-text-font-size);
	padding: var(--alert-padding);
	column-gap: var(--alert-col-gap);
	background-color: var(--alert-bg-color);
	box-shadow: var(--alert-box-shadow);
}
.icon {
	flex: none;
	font-size: var(--alert-icon-font-size);
}
.alert-box.warning {
	border-color: var(--warning-color);
}
.alert-box.warning .icon {
	color: var(--warning-color);
}

.alert-box.error {
	border-color: var(--error-color);
}
.alert-box.error .icon {
	color: var(--error-color);
}
</style>
