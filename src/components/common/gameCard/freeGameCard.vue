<template>
	<a :href="`/entries/index/${props.cardInfo.id}`" class="game-card">
		<img
			loading="lazy"
			class="game-card-img"
			:src="props.cardInfo.mainImage"
			:alt="props.cardInfo.name"
		/>
		<div class="info">
			<h5 class="name rows-dot">
				{{ props.cardInfo.name }}
			</h5>
			<div class="brief-introduction rows-dot">
				{{ props.cardInfo.briefIntroduction }}
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
	--row-dot-line: 4;
}
.name {
	--row-dot-line: 2;
}
.game-card {
	border-radius: var(--main-border-radius);
	display: block;
	height: 100%;
	overflow: hidden;
	box-shadow: var(--main-shadow);
}
.game-card-img {
	width: 100%;
	aspect-ratio: 460 / 215;
	object-fit: cover;
}
.info {
	padding: 1em;
}
.name {
	color: var(--block-color);
	font-size: 20px;
}
.brief-introduction {
	font-size: 14px;
	color: var(--block-color);
}

@media screen and (max-width: 768px) {
}
</style>
