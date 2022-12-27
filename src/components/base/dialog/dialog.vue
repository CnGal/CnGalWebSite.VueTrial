<template>
	<teleport :to="'body'">
		<div class="dialog" ref="dialog" v-show="isShow" v-bind="$attrs">
			<div v-if="isModal" class="overlay" @click="hide"></div>
			<div class="dialog-content">
				<slot></slot>
			</div>
		</div>
	</teleport>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
	position: {
		type: [Object, String],
		default: {
			type: "direction",
			value: "center"
		}
	},
	isModal: {
		type: Boolean,
		default: false
	}
});

const dialog = ref(null);
const isShow = ref(false);
const show = (element) => {
	if (props.position.type === "element" && element) {
		dialog.value.style.position = "absolute";
		dialog.value.style.left = element.offsetLeft + "px";
		dialog.value.style.top =
			element.offsetTop + element.offsetHeight + "px";
		dialog.value.style.width = element.offsetWidth + "px";
		dialog.value.style.height = "auto";
		dialog.value.style.zIndex = 10;
		dialog.value.style.color = "var(--main-font-color)";
		dialog.value.style.backgroundColor = "var(--main-bg-color)";
		dialog.value.style.boxShadow = "0 0 10px 0 #00000077";
		dialog.value.style.borderRadius = "4px";
	} else {
		document.body.style.overflow = "hidden";
	}
	isShow.value = true;
};
const hide = () => {
	isShow.value = false;
	document.body.style.overflow = "";
};

onMounted(() => {
	if (typeof props.position === "string") {
		dialog.value.classList.add(props.position, "direction");
	} else if (props.position.type === "direction") {
		dialog.value.classList.add(props.position.value, "direction");
	}
});

defineExpose({
	show,
	hide
});
</script>

<style scoped>
.dialog {
	color: var(--main-font-color);
}
.dialog.direction {
	position: fixed;
	inset: 0;
	z-index: 10;
	display: flex;
}
.dialog.center {
	justify-content: center;
	align-items: center;
}
.dialog-content {
	background-color: var(--main-bg-color);
}
.overlay {
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: -1;
	background-color: #21212177;
}
.theme-dark .overlay {
	background-color: #cccccc77;
}
</style>
