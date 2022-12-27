<template>
	<router-link
		:to="
			(type === 'article'
				? '/articles/index/'
				: type === 'entry'
				? '/entries/index/'
				: type === 'lottery'
				? '/lottery/index/'
				: type === 'vote'
				? '/vote/index/'
				: '#') + props.data.id
		"
		class="game-card"
	>
		<img
			loading="lazy"
			class="game-card-img"
			:src="props.data.mainImage || props.data.mainPicture"
			:alt="props.data.name"
		/>
		<div class="info">
			<h5 class="name rows-dot">
				<gal-tag
					v-if="props.type === 'lottery' || props.type === 'vote'"
					class="tag"
					v-text="
						new Date(props.data.startTime).getTime() < Date.now()
							? '未开始'
							: new Date(props.data.endTime).getTime() >=
							  Date.now()
							? '正在进行'
							: '已结束'
					"
					:bgColor="
						new Date(props.data.startTime).getTime() < Date.now()
							? 'primary'
							: new Date(props.data.endTime).getTime() >=
							  Date.now()
							? 'success'
							: 'danger'
					"
				></gal-tag>
				{{ props.data.name }}
			</h5>
			<div class="brief-introduction rows-dot">
				{{ props.data.briefIntroduction }}
			</div>
		</div>
		<slot name="sub"></slot>
	</router-link>
</template>

<script setup>
const props = defineProps({
	type: {
		type: String,
		default: "entry"
	},
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

.tag {
	font-size: 14px;
	font-weight: normal;
}

@media screen and (max-width: 768px) {
	.game-card {
		background-color: var(--main-bg-color);
	}
}
</style>
