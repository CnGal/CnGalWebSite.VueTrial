<template>
	<li class="comment-item">
		<gal-card level="box">
			<a class="comment-header">
				<img
					class="user-image"
					:src="props.comment.userImage"
					:alt="props.comment.userName"
				/>
				<div>
					<div>
						<galTag
							v-for="(item, index) in props.comment.ranks.filter(
								(tag) => tag.type === 0
							)"
							:key="index"
							class="tag"
							:bgColor="item.css.replace('bg-', '')"
						>
							{{ item.text }}
						</galTag>
						<span>{{ props.comment.userName }}</span>
					</div>
					{{
						dateFormat(props.comment.commentTime)({
							format: "YMDhm",
							i18n: "zh"
						})
					}}
				</div>
				<div
					v-if="props.comment.ranks.some((tag) => tag.type === 1)"
					:style="{ 'margin-inline-start': 'auto' }"
				>
					<img
						class="tag-image"
						:src="item.image"
						:alt="item.text"
						v-for="(item, index) in props.comment.ranks.filter(
							(tag) => tag.type === 1
						)"
						:key="index"
					/>
				</div>
			</a>
			<galMarkdown v-html="props.comment.text" transparent></galMarkdown>

			<galCommentsList
				v-if="props.comment.inverseParentCodeNavigation.length"
				:comments="props.comment.inverseParentCodeNavigation"
			></galCommentsList>
		</gal-card>
	</li>
</template>

<script setup>
import { ref } from "vue";
import { dateFormat } from "@/assets/common/js/formatDate.js";

const props = defineProps({
	comment: {
		type: Object,
		required: true
	}
});
</script>

<style scoped>
.comment-header {
	display: flex;
	column-gap: 8px;
	font-size: 14px;
	margin-block-end: 8px;
}
.user-image {
	width: 50px;
	height: 50px;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
}
.tag {
	margin-inline-end: 8px;
	margin-block-end: 8px;
}
.tag-image {
	width: 50px;
	height: 50px;
	aspect-ratio: 1 / 1;
}

.markdown-body {
	--markdown-padding: 0;
}
</style>
