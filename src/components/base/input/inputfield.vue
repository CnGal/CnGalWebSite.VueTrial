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
			@focus="focusEvent"
			@blur="blurEvent"
		/>
		<i class="bottom" aria-hidden="true"></i>
		<label
			ref="label"
			:class="['label', labelIsTop ? 'top' : 'center']"
			v-if="props.label"
			v-text="props.label"
		></label>

		<gal-icon-button
			v-if="type === 'password' && !showPasswordContent"
			class="icon password-icon"
			icon="eyeOff"
			@click="changePasswordContentVisible(true)"
		></gal-icon-button>
		<gal-icon-button
			v-if="type === 'password' && showPasswordContent"
			class="icon password-icon"
			icon="eye"
			@click="changePasswordContentVisible(false)"
		></gal-icon-button>
	</div>
</template>

<script setup>
import { ref, onMounted, useAttrs, watch } from "vue";
import { useStore } from "@/store/index.js";

const store = useStore();
const attrs = useAttrs();

const props = defineProps({
	type: {
		type: String,
		default: "text"
	},
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
	if (props.modelValue === "") {
		labelIsTop.value = false;
	}
};

const showPasswordContent = ref(false);

const changePasswordContentVisible = (visible) => {
	showPasswordContent.value = visible;
	input.value.type = visible ? "text" : "password";
	input.value.focus();
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
.input-wrap {
	box-sizing: border-box;
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

.icon {
	--icon-button-size: 48px;
}
.password-icon {
	--button-hover-bg-color: transparent;
}

.label {
	position: absolute;
	left: 0;
	top: 0;
	font-size: 16px;
	color: var(--gray-color);
	transition: all 0.3s;
}
.label.top {
	top: -1em;
	font-size: 12px;
}
.input:focus ~ .label {
	color: var(--main-color);
}

.password-icon {
	color: var(--gray-color);
	font-size: 24px;
}
.input:focus ~ .password-icon {
	color: var(--main-color);
}
</style>
