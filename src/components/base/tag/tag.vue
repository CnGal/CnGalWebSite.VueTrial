<template>
	<span ref="tag" :class="['tag', props.type, 'theme-' + props.theme]">
		<slot></slot>
	</span>
</template>

<script setup>
const props = defineProps({
	type: {
		type: String,
		default: "normal"
	},
	theme: {
		type: String,
		default: "solid"
	}
});
</script>

<style scoped>
.tag {
	--tag-main-color: var(--main-color);
	--tag-color: #fff;
	--tag-border-radius: 5px;
	--tag-padding: 1px 8px;
}
.theme-dark .tag {
	--tag-main-color: #808080;
}
.tag.primary {
	--tag-main-color: #009ef7;
}
.tag.success {
	--tag-main-color: #50cd89;
}
.tag.warning {
	--tag-main-color: #ffc700;
}
.tag.danger {
	--tag-main-color: #f1416c;
}
.tag.info {
	--tag-main-color: #777777;
}

.tag {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	column-gap: 5px;
	padding: var(--tag-padding);
	color: var(--tag-color);
	border-radius: var(--tag-border-radius);
	background-color: var(--tag-main-color);
}
.tag.theme-outline {
	background-color: unset;
	border: thin solid var(--tag-main-color);
	color: var(--tag-main-color);
}
</style>
