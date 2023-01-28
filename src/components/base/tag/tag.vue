<template>
	<span ref="tag" :class="['tag', props.bgColor]">
		<slot></slot>
	</span>
</template>

<script setup>
const props = defineProps({
	bgColor: {
		type: String,
		default: "normal"
	}
});
</script>

<style scoped>
.tag {
	display: inline-flex;
	padding: 1px 8px;
	align-items: center;
	justify-content: center;
	column-gap: 5px;
	color: #fff;
	border-radius: 5px;
}

.tag[circle] {
	border-radius: 1em;
}

.tag[simple="true"] {
	background-color: unset;
	border: thin solid var(--main-color);
	color: var(--main-color);
}

.normal {
	background-color: var(--main-color);
}
.theme-dark .normal {
	background-color: #808080;
}
.primary {
	background-color: #009ef7;
}
.success {
	background-color: #50cd89;
}
.warning {
	background-color: #ffc700;
}
.danger {
	background-color: #f1416c;
}
</style>
