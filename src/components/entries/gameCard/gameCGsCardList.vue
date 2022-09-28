<template>
	<div class="gameCGs-wrap">
		<gal-card
			v-for="item in props.list"
			:key="item.id"
			class="gameCG-container"
		>
			<template v-slot:headerStart>
				<gal-icon class="icon" icon="picture" size="1em"></gal-icon
				>&nbsp;&nbsp;{{ item.name }} CG预览
			</template>
			<template v-slot:headerEnd>
				<gal-link-button
					to="/"
					:text="'查看详情'"
					:icon="'shareAll'"
				></gal-link-button>
			</template>
			<galEntriesGameCGsCard :data="item"></galEntriesGameCGsCard>
		</gal-card>
	</div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	list: {
		type: [Object],
		required: true,
	},
});
</script>

<style scoped>
.gameCGs-wrap {
	display: flex;
	column-gap: 16px;
}
.gameCG-container {
	flex: 1;
	background-color: var(--main-bg-color);
}

@media screen and (max-width: 992px) {
	.gameCGs-wrap {
		flex-wrap: wrap;
		row-gap: 16px;
	}
	.gameCG-container {
		flex: 1 0 100%;
	}
}
</style>
