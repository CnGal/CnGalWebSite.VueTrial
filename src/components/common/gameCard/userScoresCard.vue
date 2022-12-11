<template>
	<div class="new-card">
		<div class="card-header">
			<img
				class="user-image"
				:src="props.data.user.photoPath"
				:alt="props.data.user.name"
			/>
			<div>
				<div class="tag-wrap rows-dot">
					<galTag
						v-for="(item, index) in props.data.user.ranks"
						:key="index"
						class="tag"
						:bgColor="item.css.replace('bg-', '')"
						:style="item.styles"
					>
						{{ item.text }}
					</galTag>
				</div>
				<span>{{ props.data.user.name }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
// 引入 formatDate 格式化日期
import { formatDateWithHowLong } from "@/assets/common/js/formatDate.js";
const props = defineProps({
	data: {
		type: Object,
		required: true
	}
});
</script>

<style scoped>
.card-header {
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
.tag-wrap {
	--row-dot-line: 1;
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
</style>
