<template>
	<a :href="link" v-if="isExternal" class="link">
		<slot></slot>
	</a>
	<router-link v-else :to="link" class="link">
		<slot></slot>
	</router-link>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	href: {
		type: String
	},
	to: {
		type: String
	}
});

const isExternal = ref(false);
const link = ref("");

// 根据 href 或 to 的内容判断是否为外部链接
if (props.href) {
	isExternal.value = true;
	link.value = props.href;
} else if (props.to) {
	if (props.to.startsWith("http") && !props.to.includes("cngal.org")) {
		isExternal.value = true;
	} else {
		isExternal.value = false;
	}
	link.value = props.to;
} else {
	isExternal.value = true;
	link.value = "#";
}
</script>

<style>
.link {
	--link-color: var(--main-color);
	--link-font-size: 14px;
}
.theme-dark .link {
	--link-color: var(--main-font-color);
}
@media screen and (max-width: 768px) {
	.link {
		--link-font-size: 12px;
	}
}

.link {
	color: var(--link-color);
	font-size: var(--link-font-size);
}
</style>
