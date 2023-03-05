<template>
	<div
		class="input-wrap search-input-wrap"
		:class="{
			'is-simply': $attrs.simply === ''
		}"
	>
		<input
			v-bind="$attrs"
			type="search"
			class="input"
			ref="input"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			@keyup.enter="submitEvent"
			@focus="focusEvent"
			@blur="blurEvent"
		/>
		<i class="bottom" aria-hidden="true" v-show="$attrs.simply === ''"></i>
		<label
			ref="label"
			:class="['label', labelIsTop ? 'top' : 'center']"
			v-if="props.label"
			v-text="props.label"
		></label>

		<gal-icon-button
			class="icon search-icon"
			icon="search"
			circle
			v-gal-tooltip="'搜索'"
			@click="submitEvent"
		></gal-icon-button>
	</div>
</template>

<script setup>
import { ref, onMounted, useAttrs, watch } from "vue";
import { useStore } from "@/store/index.js";

const store = useStore();
const attrs = useAttrs();

const props = defineProps({
	label: {
		type: String,
		default: ""
	},
	modelValue: String
});

const emit = defineEmits(["submitEvent"]);

const input = ref();
const label = ref();

const labelIsTop = ref(false);

const submitEvent = (ev) => {
	emit("submitEvent", ev);
};
const focusEvent = () => {
	labelIsTop.value = true;
};
const blurEvent = () => {
	if (!props.modelValue) {
		labelIsTop.value = false;
	}
};

watch(
	() => props.modelValue,
	(val) => {
		if (val) {
			labelIsTop.value = true;
		}
	}
);
onMounted(() => {
	if (attrs.autofocus) {
		input.value.focus();
	}

	if (props.label) {
		const id = store.setElID(input.value).getAttribute("id");
		label.value.setAttribute("for", id);
	}
});
</script>

<style scoped>
input[type="search" i]::-webkit-search-cancel-button {
	display: none;
}

.input-wrap {
	--search-input-wrap-border-color: var(--gray-color);
	--search-input-wrap-height: 32px;
	--search-icon-size: var(--search-input-wrap-height);

	--search-input-font-size: 16px;
	--search-font-color: var(--main-font-color);
	--search-caret-color: var(--main-color);

	--search-bottom-border-color: var(--gray-color);
	--search-bottom-border-color-focus: var(--main-color);

	--search-label-font-size: 16px;
	--search-label-font-size-focus: 12px;
	--search-label-color: var(--gray-color);
	--search-label-color-focus: var(--main-color);
}
.theme-dark .input-wrap {
	--search-bottom-border-color: var(--main-font-color);
	--search-bottom-border-color-focus: var(--light-pink-color);

	--search-caret-color: var(--light-pink-color);

	--search-label-color-focus: var(--light-pink-color);
}
.input-wrap.is-simply {
	--search-input-wrap-border-color: transparent;
}
.input-wrap {
	box-sizing: border-box;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	border: 1px solid var(--search-input-wrap-border-color);
}
.input {
	height: var(--search-input-wrap-height);
	width: 100%;
	color: var(--search-font-color);
	caret-color: var(--search-caret-color);
	font-size: var(--search-input-font-size);
	outline: none;
	border: none;
	background-color: transparent;
	padding-inline-start: 4px;
}
.input::placeholder {
	color: var(--search-font-color);
	font-size: var(--search-input-font-size);
}

.bottom {
	position: absolute;
	inset: 0 var(--search-icon-size) 0 0;
	pointer-events: none;
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
	background-color: var(--search-bottom-border-color);
}
.bottom::after {
	height: 2px;
	width: 100%;
	background-color: var(--search-bottom-border-color-focus);
	transform: scaleX(0);
	transition: transform 0.3s;
}
.input:focus + .bottom::after {
	transform: scaleX(1);
}

.search-icon {
	--icon-button-size: var(--search-icon-size);
	font-size: 24px;
}
.theme-dark .search-icon {
	--button-bg-color: transparent;
}

.label {
	position: absolute;
	left: 0;
	top: 0;
	font-size: var(--search-label-font-size);
	color: var(--search-label-color);
	transition: all 0.3s;
}
.label.top {
	top: -1em;
	font-size: var(--search-label-font-size-focus);
}
.input:focus ~ .label {
	color: var(--search-label-color-focus);
}
</style>
