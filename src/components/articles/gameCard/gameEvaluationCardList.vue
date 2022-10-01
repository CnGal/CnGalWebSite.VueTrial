<template>
	<div class="evaluation-wrap">
		<gal-card v-for="item in props.list" :key="item.id" class="container">
			<template v-slot:headerStart>
				<gal-icon class="icon headerIcon" icon="star"></gal-icon
				>{{ item.name }} 游戏评测
			</template>
			<template v-slot:headerEnd>
				<gal-link-button class="link-button" to="/">
					<gal-icon icon="shareAll"></gal-icon>查看详情
				</gal-link-button>
			</template>
			<galArticlesGameEvaluationCard
				:data="item"
			></galArticlesGameEvaluationCard>
		</gal-card>
	</div>
</template>

<script setup>
const props = defineProps({
	list: {
		type: [Object],
		required: true,
	},
});
</script>

<style scoped>
.evaluation-wrap {
	display: flex;
	column-gap: 16px;
}
.container {
	flex: 1;
}
.headerIcon {
	margin-inline-end: 1em;
}
.link-button {
	flex: none;
}

@media screen and (max-width: 992px) {
	.evaluation-wrap {
		flex-wrap: wrap;
		row-gap: 16px;
	}
	.container {
		flex: 1 0 100%;
	}
}
</style>
