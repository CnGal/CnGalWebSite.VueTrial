<template>
	<span ref="tag" :class="['tag', props.bgColor]">
		<slot></slot>
	</span>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	bgColor: {
		type: String
	}
});
</script>

<style scoped>
.tag {
	display: inline-flex;
	padding: 1px 8px;
	align-items: center;
	justify-content: center;
	column-gap: 5px;
	background-color: var(--main-color);
	color: #fff;
	border-radius: 5px;
}
.theme-dark .tag {
	background-color: #808080;
}

.tag[circle] {
	border-radius: 1em;
}

.tag[simple="true"] {
	background-color: unset;
	border: thin solid var(--main-color);
	color: var(--main-color);
}

.primary {
	background-color: #009ef7;
}
.success {
	background-color: #50cd89;
}
.warning {
	background-color: #ffc700;
}
.danger {
	background-color: #f1416c;
}
</style>
