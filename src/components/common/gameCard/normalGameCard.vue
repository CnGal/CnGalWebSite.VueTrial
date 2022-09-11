<template>
	<a :href="`/entries/index/${props.data.id}`" class="game-card">
		<img
			loading="lazy"
			class="game-card-img"
			:src="props.data.mainImage"
			:alt="props.data.name"
		/>
		<div class="info">
			<h5 class="name rows-dot">
				{{ props.data.name }}
			</h5>
			<div class="brief-introduction rows-dot">
				{{ props.data.briefIntroduction }}
			</div>
		</div>
		<slot name="sub"></slot>
	</a>
</template>

<script setup>
const props = defineProps({
	data: {
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
	color: var(--main-font-color);
}
.name {
	font-size: 20px;
}
.brief-introduction {
	font-size: 14px;
}

@media screen and (max-width: 768px) {
	.game-card {
		background-color: var(--main-bg-color);
	}
}
</style>
