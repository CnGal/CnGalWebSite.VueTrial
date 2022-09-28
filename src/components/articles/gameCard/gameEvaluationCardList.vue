<template>
	<div class="evaluation-wrap">
		<gal-card
			v-for="item in props.list"
			:key="item.id"
			class="evaluation-container"
		>
			<template v-slot:headerStart>
				<gal-icon class="icon" icon="star" size="1em"></gal-icon
				>&nbsp;&nbsp;{{ item.name }} 游戏评测
			</template>
			<template v-slot:headerend>
				<gal-link-button
					to="/"
					:text="'查看详情'"
					:icon="'shareAll'"
				></gal-link-button>
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
.evaluation-container {
	flex: 1;
}

@media screen and (max-width: 992px) {
	.evaluation-wrap {
		flex-wrap: wrap;
		row-gap: 16px;
	}
	.evaluation-container {
		flex: 1 0 100%;
	}
}
</style>
