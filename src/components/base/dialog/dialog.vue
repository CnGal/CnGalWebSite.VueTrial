<template>
	<teleport :to="'body'">
		<div class="dialog" ref="dialog" v-show="isShow" v-bind="$attrs">
			<div v-if="isModal" class="overlay" @click="hide"></div>
			<div class="dialog-content" ref="content">
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
const content = ref(null);

const isShow = ref(false);
const show = (option = { type: "direction", value: "center" }) => {
	isShow.value = true;
	nextTick(() => {
		if (option.type === "direction") {
			dialog.value.classList.add(...option.value.split(" "), "direction");
			document.body.style.overflow = "hidden";
		} else if (option.type === "element") {
			content.value.classList.add("element");

			if (option.fixed) {
				content.value.classList.add("fixed");
			}

			const popRect = content.value.getBoundingClientRect();
			const element = option.value;
			const rect = element.getBoundingClientRect();

			if (rect.left + popRect.width > window.innerWidth) {
				content.value.style.right = "8px";
			} else {
				content.value.style.left = element.offsetLeft + "px";
			}

			if (rect.top + popRect.height > window.innerHeight) {
				content.value.style.top =
					element.offsetTop - popRect.height - 4 + "px";
			} else {
				content.value.style.top =
					(element.offsetTop || rect.top) +
					element.offsetHeight +
					"px";
			}
			content.value.style.minWidth = rect.width + "px";
		}
	});
};

const hide = () => {
	isShow.value = false;
	content.value.className = "dialog-content";
	dialog.value.className = "dialog";
	content.value.style = "";
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
	position: absolute;
	top: 0;
	left: 0;
	right: 9999px;
	bottom: 9999px;
}

.dialog-content {
	color: var(--dialog-color);
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

.dialog-content.element {
	position: absolute;
	box-shadow: 0 0 10px 0 #00000077;
	border-radius: 4px;
}
.dialog-content.element.fixed {
	position: fixed;
}

.overlay {
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: -1;
	background-color: var(--dialog-overlay-bg-color);
}
</style>
