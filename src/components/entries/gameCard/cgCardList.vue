<template>
	<div class="gameCGs-wrap">
		<gal-card
			v-for="item in props.list"
			:key="item.id"
			class="gameCG-container"
		>
			<template v-slot:headerStart>
				<gal-icon class="icon" icon="picture"></gal-icon>&nbsp;&nbsp;{{
					item.name
				}}
				CG预览
			</template>
			<template v-slot:headerEnd>
				<gal-link-button to="/">
					<gal-icon icon="shareAll"></gal-icon>查看详情
				</gal-link-button>
			</template>
			<gal-cg-card :data="item"></gal-cg-card>
		</gal-card>
	</div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	list: {
		type: [Object],
		required: true
	}
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
