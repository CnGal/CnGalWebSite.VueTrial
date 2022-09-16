<template>
	<div class="alert-box" :class="[props.type]">
		<gal-icon class="icon" icon="alertOutline" size="24px"></gal-icon>
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
</script>

<style scoped>
.alert-box {
	border-left: 8px solid;
	font-size: 16px;
	display: flex;
	align-items: flex-start;
	padding: 0.5em;
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
</style>
