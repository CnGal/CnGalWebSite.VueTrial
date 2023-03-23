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
	},
	height: {
		type: String,
		default: "100px"
	}
});
</script>

<style scoped>
.test-box {
	display: flex;
	align-items: center;
	min-height: v-bind(height);
}
.test-box > :is(div, pre) {
	min-height: v-bind(height);
	flex: 1;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
}
.test-box > pre {
	border-inline-start: thin dotted #000;
	overflow: auto;
	max-width: calc(100vw - 232px);
}

.test-box.block {
	display: block;
}
.test-box.block > div {
	display: block;
}
.test-box.block > :is(div, pre) {
	border-inline-start: none;
	justify-content: flex-start;
	text-align: unset;
}
</style>
