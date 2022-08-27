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
		</div>
		<div
			v-if="~props.cardInfo.readCount && ~props.cardInfo.commentCount"
			class="read-comment"
		>
			<span v-if="~props.cardInfo.readCount" class="read">
				<gal-icon icon="eye" size="14px"></gal-icon
				>{{ props.cardInfo.readCount }}</span
			>

			<span v-if="~props.cardInfo.commentCount" class="comment">
				<gal-icon icon="comments" size="14px"></gal-icon
				>{{ props.cardInfo.commentCount }}</span
			>
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
	border-radius: var(--main-border-radius);
	display: block;
	height: 100%;
	overflow: hidden;
	position: relative;
}
.game-card-img {
	width: 100%;
	aspect-ratio: 460 / 215;
	object-fit: cover;
}
.name {
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

@media screen and (max-width: 768px) {
	.game-card {
		box-shadow: var(--main-shadow);
	}
	.info {
		padding: 0 0.4em 0.4em;
	}
	.read-comment {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		aspect-ratio: 460 / 215;
		color: var(--white-color);
		align-items: flex-end;
		background: linear-gradient(
			transparent 70%,
			#00000080 70%,
			#00000080 100%
		);
	}
	.read,
	.comment {
		padding-inline-start: 0.4em;
		padding-bottom: 3px;
	}
}
</style>
