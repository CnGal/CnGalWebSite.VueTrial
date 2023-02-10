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
import { ref, onMounted, nextTick } from "vue";

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
	isShow.value = true;
	nextTick(() => {
		if (props.position.type === "element" && element) {
			const popRect = dialog.value.getBoundingClientRect();
			const rect = element.getBoundingClientRect();
			dialog.value.style.left = element.offsetLeft + "px";
			if (rect.top + popRect.height > window.innerHeight) {
				dialog.value.style.top =
					element.offsetTop - popRect.height - 4 + "px";
			} else {
				dialog.value.style.top =
					element.offsetTop + element.offsetHeight + "px";
			}
			dialog.value.style.minWidth = rect.width + "px";
		} else {
			document.body.style.overflow = "hidden";
		}
	});
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
	} else if (props.position.type === "element") {
		dialog.value.classList.add("element");
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
.dialog {
	z-index: 10;
}
.dialog.direction {
	position: fixed;
	inset: 0;
	display: flex;
}
.dialog.element {
	position: absolute;
	background-color: var(--main-bg-color);
	box-shadow: 0 0 10px 0 #00000077;
	border-radius: 4px;
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
