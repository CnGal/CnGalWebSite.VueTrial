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
				<span class="rows-dot">{{ props.data.user.name }}</span>
			</div>
		</div>
		<div class="socre">
			<div>
				<span>{{ `总评(${props.data.socres.totalSocre})` }}</span>
				<span class="star-wrap">
					<gal-icon
						class="star"
						:icon="
							props.data.socres.totalSocre <= 0
								? 'starOutline'
								: props.data.socres.totalSocre === 1
								? 'starHalf'
								: 'starFill'
						"
					></gal-icon>
					<gal-icon
						class="star"
						:icon="
							props.data.socres.totalSocre <= 2
								? 'starOutline'
								: props.data.socres.totalSocre === 3
								? 'starHalf'
								: 'starFill'
						"
					></gal-icon>
					<gal-icon
						class="star"
						:icon="
							props.data.socres.totalSocre <= 4
								? 'starOutline'
								: props.data.socres.totalSocre === 5
								? 'starHalf'
								: 'starFill'
						"
					></gal-icon>
					<gal-icon
						class="star"
						:icon="
							props.data.socres.totalSocre <= 6
								? 'starOutline'
								: props.data.socres.totalSocre === 7
								? 'starHalf'
								: 'starFill'
						"
					></gal-icon>
					<gal-icon
						class="star"
						:icon="
							props.data.socres.totalSocre <= 8
								? 'starOutline'
								: props.data.socres.totalSocre === 9
								? 'starHalf'
								: 'starFill'
						"
					></gal-icon>
				</span>
			</div>
			<div>
				<span>{{ `音乐${props.data.socres.musicSocre}分` }}</span>
				<span>{{ `，美术${props.data.socres.paintSocre}分` }}</span>
				<span>{{ `，剧本${props.data.socres.scriptSocre}分` }}</span>
				<span>{{ `，演出${props.data.socres.showSocre}分` }}</span>
				<span>{{ `，程序${props.data.socres.systemSocre}分` }}</span>
				<span v-if="props.data.socres.cvSocre >= 0">{{
					`，配音${props.data.socres.cvSocre}分`
				}}</span>
			</div>
		</div>
		<div class="main rows-dot">评语：{{ props.data.playImpressions }}</div>
		<div class="name">《{{ props.data.gameName }}》</div>
		<div class="time">
			{{ dateFormat(props.data.lastEditTime, "YMDhms") }}
		</div>
	</div>
</template>

<script setup>
import { dateFormat } from "@/assets/common/js/formatDate.js";
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
.tag-wrap,
.tag-wrap + .rows-dot {
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

.socre > div:first-child {
	display: flex;
	align-items: center;
	column-gap: 8px;
	font-size: 14px;
}
.socre > div:last-child {
	font-size: 14px;
	color: var(--gray-color);
}

.star-wrap {
	display: inline-flex;
	font-size: 24px;
	color: var(--pink-color);
}

.main {
	--row-dot-line: 4;
	font-size: 14px;
	margin-block-start: 8px;
	line-height: 1.5;
}
.name,
.time {
	font-size: 14px;
	color: var(--gray-color);
	margin-block-start: 16px;
}
</style>
