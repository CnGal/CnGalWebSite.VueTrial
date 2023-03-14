<template>
	<gal-card width="full" class="card" level="box">
		<gal-link
			:to="
				(type === 'article'
					? '/articles/index/'
					: type === 'entry'
					? '/entries/index/'
					: type === 'lottery'
					? '/lotteries/index/'
					: type === 'vote'
					? '/vote/index/'
					: type === 'video'
					? '/videos/index/'
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
							new Date(props.data.startTime).getTime() <
							Date.now()
								? '未开始'
								: new Date(props.data.endTime).getTime() >=
								  Date.now()
								? '正在进行'
								: '已结束'
						"
						:bgColor="
							new Date(props.data.startTime).getTime() <
							Date.now()
								? 'primary'
								: new Date(props.data.endTime).getTime() >=
								  Date.now()
								? 'success'
								: 'danger'
						"
					></gal-tag>
					<gal-tag
						v-if="props.type === 'video'"
						class="tag"
						v-text="props.data.type"
					></gal-tag>
					{{ props.data.name }}
				</h5>
				<div class="brief-introduction rows-dot">
					{{ props.data.briefIntroduction }}
				</div>
			</div>
			<slot name="sub"></slot>
		</gal-link>
	</gal-card>
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
.card {
	padding: 0;
}
.game-card {
	display: block;
	height: 100%;
	overflow: hidden;
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
	word-break: break-all;
}

.tag {
	font-size: 14px;
	font-weight: normal;
}
</style>
