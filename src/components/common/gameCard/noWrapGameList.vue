<template>
	<div class="card-wrap">
		<div class="prev">
			<gal-icon icon="left" size="24px"></gal-icon>
		</div>
		<ul class="card-list">
			<li v-for="(item, index) in props.list" :key="index">
				{{ item.displayName }}
			</li>
		</ul>
		<div class="next">
			<gal-icon icon="right" size="24px"></gal-icon>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	list: {
		type: [Object],
		required: true
	}
});
</script>

<style scoped>
.card-wrap {
	display: flex;
}
.prev,
.next {
	display: flex;
	flex: 0 1 52px;
	align-items: center;
	justify-content: center;
	color: var(--gray-color);
}
.card-list {
	flex: 1;
}
</style>
