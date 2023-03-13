<template>
	<gal-card
		level="box"
		width="full"
		:transparent="store.isSmallPage ? undefined : true"
	>
		<gal-link
			:to="props.data.url"
			:target="props.data.isOutlink ? '_blank' : null"
			class="game-card"
		>
			<img
				loading="lazy"
				encoding="async"
				class="game-card-img"
				:src="props.data.image"
				:alt="props.data.name"
			/>
			<div class="info">
				<div class="name rows-dot">{{ props.data.name }}</div>
			</div>
			<div
				v-if="~props.data.readCount && ~props.data.commentCount"
				class="read-comment"
			>
				<span v-if="~props.data.readCount" class="read">
					<gal-icon icon="eye" size="14px"></gal-icon>&nbsp;{{
						props.data.readCount
					}}</span
				>

				<span v-if="~props.data.commentCount" class="comment">
					<gal-icon icon="comments" size="14px"></gal-icon>&nbsp;{{
						props.data.commentCount
					}}</span
				>
			</div>
		</gal-link>
	</gal-card>
</template>

<script setup>
import { useStore } from "@/store/index.js";
const store = useStore();

const props = defineProps({
	data: {
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
	color: var(--main-font-color);
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
	display: flex;
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
		inset: 0;
		aspect-ratio: 460 / 215;
		color: var(--white-color);
		align-items: flex-end;
		background: linear-gradient(
			transparent calc(100% - 30px),
			#00000080 calc(100% - 30px),
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
