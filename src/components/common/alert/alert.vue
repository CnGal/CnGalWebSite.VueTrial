<template>
	<div class="alert-box" :class="[props.type]">
		<gal-icon
			class="icon"
			:icon="iconNames[props.type] || 'alertOutline'"
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
	border-left: 8px solid;
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
	border-color: #fb8c00;
}
.alert-box.warning .icon {
	color: #fb8c00;
}

.alert-box.error {
	border-color: #ff5252;
}
.alert-box.error .icon {
	color: #ff5252;
}
</style>
