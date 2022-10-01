<template>
	<div class="alert-box" :class="[props.type]">
		<gal-icon
			class="icon"
			:icon="iconNames[props.type]"
			size="24px"
		></gal-icon>
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps({
	type: {
		type: String,
		default: "warning",
	},
});
const iconNames = {
	warning: "alertOutline",
	error: "alertCircleOutline",
};
</script>

<style scoped>
.alert-box {
	--warning-color: #fb8c00;
	--error-color: #ff5252;
}
.alert-box {
	border-inline-start: 8px solid;
	font-size: 16px;
	display: flex;
	align-items: flex-start;
	padding: 16px;
	column-gap: 8px;
}
.icon {
	flex: none;
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
