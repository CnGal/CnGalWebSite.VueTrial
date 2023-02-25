<template>
	<div class="test-box" :class="[props.direction]">
		<div>
			<slot></slot>
		</div>
		<pre>
				<slot name="code"></slot>
		</pre>
	</div>
</template>

<script setup>
const props = defineProps({
	msg: {
		type: String,
		default: ""
	},
	direction: {
		type: String,
		default: "inline"
	}
});
</script>

<style scoped>
.test-box {
	display: flex;
	align-items: center;
	min-height: 100px;
	border-block-end: thin dotted #ccc;
}
.test-box > :is(div, pre) {
	min-height: 100px;
	flex: 1;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
}
.test-box > pre {
	border-inline-end: thin dotted #000;
}

.test-box.block {
	display: block;
}
.test-box.block > div:nth-child(1) {
	border-inline-end: none;
	border-block-end: thin dotted #000;
}
</style>
