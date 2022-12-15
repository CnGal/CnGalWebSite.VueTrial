<template>
	<gal-button
		class="dropdown-trigger"
		ref="dropdownTrigger"
		v-bind="$attrs"
		@click="clickEvent"
	>
		<span class="dropdown-trigger-text">{{ triggerText }}</span>
		<gal-icon icon="menuDown" class="dropdown-trigger-icon"></gal-icon>
		<i class="bottom" aria-hidden="true"></i>
	</gal-button>
	<gal-dialog
		class="dropdown-popover"
		ref="dropdownPopover"
		:position="{
			type: 'element'
		}"
		@click="dialogClickEvent"
	>
		<slot></slot>
	</gal-dialog>
</template>

<script setup>
import { ref, onMounted, useAttrs, watch, useSlots, onUnmounted } from "vue";

const props = defineProps({
	width: {
		type: String
	}
});
const emit = defineEmits(["itemSelect"]);

const options = useSlots().default();
const dropdownTrigger = ref(null);
const dropdownPopover = ref(null);
const isOpening = ref(false);
const triggerText = ref("");

options.forEach((option) => {
	if (option.props?.selected) {
		triggerText.value = option.children.default()[0].children;
	}
});
const documentClickEvent = (ev) => {
	if (!isOpening.value) {
		return;
	}
	if (!dropdownTrigger.value?.$el.contains(ev.target)) {
		dropdownPopover.value.hide();
		document.removeEventListener("click", documentClickEvent);
		isOpening.value = false;
	}
};
const clickEvent = () => {
	if (isOpening.value) {
		return;
	}
	dropdownPopover.value.show(dropdownTrigger.value.$el);
	isOpening.value = true;
	document.addEventListener("click", documentClickEvent);
};
const dialogClickEvent = (ev) => {
	const el = ev.target;
	if (!el.classList.contains("dropdown-select-item")) {
		emit("itemSelect", el);

		el.parentElement
			.querySelectorAll(".dropdown-select-item")
			.forEach((item) => {
				item.classList.remove("dropdown-select-item");
			});
		el.classList.add("dropdown-select-item");
		triggerText.value = el.innerText;
		dropdownPopover.value.hide();
		document.removeEventListener("click", documentClickEvent);
		isOpening.value = false;
	}
	ev.stopPropagation();
};

onMounted(() => {
	if (props.width) {
		dropdownTrigger.value.$el.style.setProperty(
			"--dropdown-trigger-width",
			props.width
		);
	}
});
onUnmounted(() => {
	document.removeEventListener("click", documentClickEvent);
});
</script>

<style scoped>
.dropdown-trigger {
	--button-hover-bg-color: var(--main-bg-color);
	border: none;
	position: relative;
	width: var(--dropdown-trigger-width);
	display: flex;
	padding-inline: 0;
}
.dropdown-trigger-text {
	flex: 1;
}
.dropdown-trigger-icon {
	width: 24px;
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
.dropdown-trigger:focus .bottom::after {
	transform: scaleX(1);
}
.dropdown-trigger:focus .dropdown-trigger-icon {
	color: var(--main-color);
}
</style>
