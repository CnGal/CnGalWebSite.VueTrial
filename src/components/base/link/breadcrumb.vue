<template>
	<ol class="breadcrumb-nav">
		<li
			v-for="(item, index) in props.item"
			:key="index"
			class="breadcrumb-item"
			:data-separator="props.separator"
		>
			<gal-link
				v-if="item.to"
				:to="item.to"
				v-text="item.value"
			></gal-link>
			<span v-else v-text="item.value"></span>
			<span class="breadcrumb-separator" v-text="props.separator"></span>
		</li>
	</ol>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	item: {
		type: [Object]
	},
	separator: {
		type: String,
		default: "/"
	}
});
</script>

<style>
.breadcrumb-nav {
	--separator-color: var(--gray-color);
}
.breadcrumb-nav {
	display: flex;
}
.breadcrumb-item {
	color: var(--gray-color);
	padding-inline: 1em;
}
.breadcrumb-item:first-child {
	padding-inline-start: 0;
}
.breadcrumb-separator {
	color: var(--separator-color);
	display: inline-block;
	transform: translateX(1em);
}
.breadcrumb-item:last-child .breadcrumb-separator {
	display: none;
}
</style>
