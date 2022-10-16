<template>
	<div :class="['input-wrap', type + '-input-wrap']">
		<input
			v-bind="$attrs"
			:type="type"
			:class="['input', type]"
			ref="input"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			@keyup.enter="submitEvent"
		/>
		<i class="bottom" aria-hidden="true"></i>
		<gal-icon-button
			v-if="type === 'search'"
			class="icon search-icon"
			icon="search"
			circle
			size="48px"
			v-gal-tooltip="'搜索'"
			@click="submitEvent"
		></gal-icon-button>
	</div>
</template>

<script setup>
import { ref, onMounted, useAttrs } from "vue";

const attrs = useAttrs();

const props = defineProps({
	type: {
		type: String,
		default: "text"
	},
	modelValue: String,
	submitEvent: Function
});

const input = ref();

const submitEvent = (ev) => {
	props.submitEvent(ev);
};
onMounted(() => {
	if (attrs.autofocus) {
		input.value.focus();
	}
});
</script>

<style scoped>
input[type="search" i]::-webkit-search-cancel-button {
	display: none;
}

.input-wrap {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.input {
	height: 32px;
	width: 100%;
	caret-color: var(--main-color);
	font-size: 16px;
	outline: none;
	padding: 0 0.5em;
}
.input:focus {
	border: var(--main-color);
}

.input[simplt] {
	border: none;
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
.input[simplt]:focus + .bottom::after {
	transform: scaleX(1);
}

.search-icon {
	color: var(--main-color);
	font-size: 24px;
}
</style>
