<template>
	<div class="test-box">
		<div>
			<slot></slot>
		</div>
		<div v-text="props.msg"></div>
	</div>
</template>

<script setup>
const props = defineProps({
	msg: {
		type: String,
		default: ""
	}
});
</script>

<style scoped>
.test-box {
	display: flex;
	align-items: center;
	height: 100px;
	border-block-end: thin dotted #ccc;
}
.test-box > div {
	flex: 1;
	text-align: center;
}
.test-box > div:nth-child(1) {
	border-inline-end: thin dotted #000;
}
</style>
