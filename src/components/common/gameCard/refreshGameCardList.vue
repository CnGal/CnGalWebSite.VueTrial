<template>
	<div class="card-wrap">
		<ul class="card-list" ref="cardList">
			<li
				v-for="(item, index) in props.data"
				:key="index"
				class="card-item"
				ref="cardItem"
			>
				<component :is="props.cardName" :data="item"></component>
			</li>
		</ul>
		<button
			v-if="props.refreshText"
			class="refresh-btn"
			@click="props?.changeData"
		>
			<gal-icon icon="refresh" class="icon" size="12px"></gal-icon>
			{{ props.refreshText }}
		</button>
	</div>
</template>

<script setup>
const props = defineProps({
	data: {
		type: [Object],
		required: true
	},
	cardName: {
		type: String,
		required: true
	},
	refreshText: {
		type: String
	},
	changeData: {
		type: Function,
		default: Function.prototype
	}
});
</script>

<style scoped>
.card-item {
	margin-block-end: 12px;
}
.refresh-btn {
	display: block;
	font-size: 12px;
	border: none;
	border-radius: 1em;
	background-color: var(--main-color);
	color: var(--white-color);
	margin: 0 auto;
}
.theme-dark .refresh-btn {
	background-color: var(--main-bg-color);
}
.icon {
	margin-inline-end: 8px;
}
</style>
