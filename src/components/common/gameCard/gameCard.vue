<template>
	<a
		:href="
			props.cardInfo.disPlayValue || `/entries/index/${props.cardInfo.id}`
		"
		:target="props.cardInfo.disPlayValue ? '_blank' : null"
		class="game-card"
	>
		<img
			loading="lazy"
			class="game-card-img"
			:src="props.cardInfo.image"
			:alt="props.cardInfo.disPlayName"
		/>
		<div class="info">
			<div class="name rows-dot">{{ props.cardInfo.disPlayName }}</div>
			<div class="read-comment">
				<span v-if="~props.cardInfo.readCount" class="read">
					<gal-icon icon="eye" size="14px"></gal-icon
					>{{ props.cardInfo.readCount }}</span
				>

				<span v-if="~props.cardInfo.commentCount" class="comment">
					<gal-icon icon="comments" size="14px"></gal-icon
					>{{ props.cardInfo.commentCount }}</span
				>
			</div>
		</div>
	</a>
</template>

<script setup>
const props = defineProps({
	cardInfo: {
		type: Object,
		required: true
	}
});
</script>

<style scoped>
.game-card {
	box-shadow: var(--main-shadow);
	border-radius: var(--main-border-radius);
	display: block;
	overflow: hidden;
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
</style>
