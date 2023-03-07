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
	isModal: {
		type: Boolean,
		default: false
	}
});

const dialog = ref(null);
const isShow = ref(false);
const show = (option = { type: "direction", value: "center" }) => {
	isShow.value = true;
	nextTick(() => {
		if (option.type === "direction") {
			dialog.value.classList.add(...option.value.split(" "), "direction");
			document.body.style.overflow = "hidden";
		} else if (option.type === "element") {
			dialog.value.classList.add("element");
			const popRect = dialog.value.getBoundingClientRect();
			const element = option.value;
			const rect = element.getBoundingClientRect();

			if (rect.left + popRect.width > window.innerWidth) {
				dialog.value.style.right = "8px";
			} else {
				dialog.value.style.left = element.offsetLeft + "px";
			}

			if (rect.top + popRect.height > window.innerHeight) {
				dialog.value.style.top =
					element.offsetTop - popRect.height - 4 + "px";
			} else {
				dialog.value.style.top =
					element.offsetTop + element.offsetHeight + "px";
			}
			dialog.value.style.minWidth = rect.width + "px";
		}
	});
};

const hide = () => {
	isShow.value = false;
	dialog.value.className = "dialog";
	dialog.value.style = "";
	document.body.style.overflow = "";
};

defineExpose({
	show,
	hide
});
</script>

<style scoped>
.dialog {
	--dialog-color: var(--main-font-color);
	--dialog-bg-color: var(--main-bg-color);
	--dialog-overlay-bg-color: #21212177;
}
.theme-dark .dialog {
	--dialog-overlay-bg-color: #cccccc77;
}

.dialog {
	z-index: 10;
	color: var(--dialog-color);
}

.dialog-content {
	background-color: var(--dialog-bg-color);
}

.dialog.direction {
	position: fixed;
	inset: 0;
	display: flex;
}

.dialog.direction.top.left {
	justify-content: flex-start;
	align-items: flex-start;
}
.dialog.direction.top.center {
	justify-content: center;
	align-items: flex-start;
}
.dialog.direction.top.right {
	justify-content: flex-end;
	align-items: flex-start;
}
.dialog.direction.center.left {
	justify-content: flex-start;
	align-items: center;
}
.dialog.direction.center {
	justify-content: center;
	align-items: center;
}
.dialog.direction.center.right {
	justify-content: flex-end;
	align-items: center;
}
.dialog.direction.bottom.left {
	justify-content: flex-start;
	align-items: flex-end;
}
.dialog.direction.bottom.center {
	justify-content: center;
	align-items: flex-end;
}
.dialog.direction.bottom.right {
	justify-content: flex-end;
	align-items: flex-end;
}

.dialog.element {
	position: absolute;
	box-shadow: 0 0 10px 0 #00000077;
	border-radius: 4px;
}

.overlay {
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: -1;
	background-color: var(--dialog-overlay-bg-color);
}
</style>
