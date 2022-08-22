<template>
	<ul class="game-card-list">
		<li
			class="game-card-item"
			v-for="(item, index) in props.list"
			:key="index"
		>
			<a
				:href="item.disPlayValue || `/entries/index/${item.id}`"
				:target="item.disPlayValue ? '_blank' : null"
			>
				<img
					loading="lazy"
					class="game-card-img"
					:src="item.image"
					:alt="item.disPlayName"
				/>
				<div class="info">
					<div class="name rows-dot">{{ item.disPlayName }}</div>
					<div class="read-comment">
						<span v-if="~item.readCount" class="read">
							<gal-icon icon="eye" size="14px"></gal-icon
							>{{ item.readCount }}</span
						>

						<span v-if="~item.commentCount" class="comment">
							<gal-icon icon="comments" size="14px"></gal-icon
							>{{ item.commentCount }}</span
						>
					</div>
				</div>
			</a>
		</li>
	</ul>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	list: [Object]
});
</script>

<style scoped>
.game-card-list {
	--row-dot-line: 2;
}
.game-card-list {
	display: flex;
	flex-wrap: wrap;
	column-gap: 16px;
	row-gap: 8px;
}
.game-card-item {
	width: calc((100% - (16px * 5)) / 6);
}
.game-card-img {
	width: 100%;
}
.info {
	color: var(--block-color);
	margin-block-start: 8px;
}
.read-comment {
	display: flex;
	color: var(--gray-color);
	font-size: 14px;
}
.read,
.comment {
	flex: 1;
}

@media screen and (max-width: 1200px) {
	.game-card-item {
		width: calc((100% - (16px * 3)) / 4);
	}
}

@media screen and (max-width: 992px) {
	.game-card-item {
		width: calc((100% - (16px * 2)) / 3);
	}
}
@media screen and (max-width: 768px) {
	.game-card-item {
		width: calc((100% - (16px * 1)) / 2);
	}
}
</style>
