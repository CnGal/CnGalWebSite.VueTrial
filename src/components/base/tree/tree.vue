<template>
	<div class="tree">
		<div
			v-for="(item, index) in props.data"
			:key="item.id"
			ref="treeItem"
			:class="{
				'has-children': item.children?.length,
				'children-close': item.children?.length,
				'tree-item': true
			}"
			@click.stop="itemClick($event, item, index)"
		>
			<div class="tree-item-trigger">
				<gal-icon
					v-if="item.children?.length"
					icon="menuDown"
					size="24px"
				></gal-icon>
				<div class="tree-item__title single-row-dot">
					<span>{{ item.title }}</span>
				</div>
			</div>
			<gal-tree
				v-if="item.children?.length"
				:data="item.children"
				class="tree-children"
			></gal-tree>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const props = defineProps({
	data: {
		type: Array,
		required: true
	},
	topItemOpenWhenLoad: {
		type: Boolean,
		default: true
	}
});

const treeItem = ref(null);

const itemClick = (ev, item, index) => {
	const target = treeItem.value[index];
	if (target.classList.contains("tree-item")) {
		if (target.classList.contains("has-children")) {
			if (target.classList.contains("children-close")) {
				target.classList.remove("children-close");
				target.classList.add("children-open");
			} else {
				target.classList.remove("children-open");
				target.classList.add("children-close");
			}
		} else {
			treeItem.value.forEach((item) => {
				item.classList.remove("active");
			});
			target.classList.add("active");
		}
	}
};

onMounted(() => {
	if (props.topItemOpenWhenLoad) {
		const firstElement = treeItem.value[0];
		if (firstElement.classList.contains("has-children")) {
			firstElement.classList.remove("children-close");
			firstElement.classList.add("children-open");
		} else {
			nextTick(() => {
				if (
					(firstElement.parentElement.classList.contains("tree") &&
						!firstElement.parentElement.classList.contains(
							"tree-children"
						)) ||
					firstElement.parentElement.parentElement.classList.contains(
						"children-open"
					)
				) {
					firstElement.classList.add("active");
				}
			});
		}
	}
});
</script>

<style scoped>
.tree {
	--tree-item-font-size: 14px;
	--tree-indent: 16px;
}
.tree {
	width: 100%;
}
.tree-item-trigger {
	display: flex;
	align-items: center;
	min-height: 48px;
	font-size: var(--tree-item-font-size);
	padding-inline: var(--tree-indent);
}
.tree .tree-children .tree-item-trigger {
	padding-inline-start: calc(var(--tree-indent) * 2);
}
.tree-item.active .tree-item-trigger {
	background-color: var(--light-pink-color);
	color: var(--main-color);
}

.children-close .tree-children {
	display: none;
}
</style>
