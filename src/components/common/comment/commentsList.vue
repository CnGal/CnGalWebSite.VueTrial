<template>
	<ul class="comment-list">
		<galConmmentItem
			class="comment-item"
			:comment="item"
			v-for="item in props.comments"
			:key="item.id"
		></galConmmentItem>
	</ul>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	comments: {
		type: [Object],
		required: true
	}
});
</script>

<style scoped>
.comment-item {
	margin-block-start: 12px;
}
</style>
