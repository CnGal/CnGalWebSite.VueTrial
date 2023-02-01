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
			:data-key="
				props.indentKey
					? props.indentKey + '-' + (index + 1)
					: index + 1
			"
			:data-active-key="activeItemKey"
		>
			<div class="tree-item-trigger">
				<gal-icon
					class="tree-item-open-icon"
					v-if="item.children?.length"
					icon="menuDown"
					size="24px"
				></gal-icon>
				<gal-icon
					class="tree-item-close-icon"
					v-if="item.children?.length"
					icon="menuRight"
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
				:indentKey="
					props.indentKey
						? props.indentKey + '-' + (index + 1)
						: index + 1 + ''
				"
				:defaultSelectedKey="props.defaultSelectedKey"
				@nodeClick="childNodeClick"
				@nodeSelected="childNodeSelected"
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
	defaultSelectedKey: {
		type: [Array, String]
	},
	indentKey: {
		// tree 组件内部使用，不要传入
		type: [String, Number]
	}
});

const emits = defineEmits(["nodeClick", "nodeSelected"]);

const treeItem = ref(null);
const activeItemKey = ref(null);
let prevActiveItemTarget;

const changeActiveItem = (target) => {
	if (props.indentKey === undefined) {
		if (prevActiveItemTarget) {
			prevActiveItemTarget.classList.remove("active");
		}
		activeItemKey.value = target.dataset.key;
		prevActiveItemTarget = target;
	}
};
const itemClick = (ev, item, index) => {
	const target = treeItem.value[index];
	if (target.classList.contains("active")) {
		return;
	}
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
			target.classList.add("active");
			changeActiveItem(target);
			emits("nodeSelected", target, item);
		}
	}
	emits("nodeClick", target, item);
};

const childNodeClick = (target, item) => {
	emits("nodeClick", target, item);
};
const childNodeSelected = (target, item) => {
	changeActiveItem(target);
	emits("nodeSelected", target, item);
};

onMounted(() => {
	// 更新默认选中项
	let activeElement;
	let activeItem;
	if (!props.defaultSelectedKey) {
		activeElement = treeItem.value[0];
		activeItem = props.data[0];
	} else {
		let defaultSelectedKey;
		let defaultSelectedKeyArr;
		if (typeof props.defaultSelectedKey === "string") {
			defaultSelectedKey = props.defaultSelectedKey;
			defaultSelectedKeyArr = defaultSelectedKey.split("-");
		} else if (Array.isArray(props.defaultSelectedKey)) {
			defaultSelectedKeyArr = props.defaultSelectedKey;
			defaultSelectedKey = defaultSelectedKeyArr.join("-");
		}

		let indentKeyArr;
		if (props.indentKey === undefined) {
			activeElement = treeItem.value[defaultSelectedKeyArr[0] - 1];
			activeItem = props.data[defaultSelectedKeyArr[0] - 1];
		} else {
			if (!defaultSelectedKey.startsWith(props.indentKey)) {
				return;
			}
			indentKeyArr = props.indentKey.split("-");
			activeElement =
				treeItem.value[defaultSelectedKeyArr[indentKeyArr.length] - 1];
			activeItem =
				props.data[defaultSelectedKeyArr[indentKeyArr.length] - 1];
		}
	}

	if (activeElement.classList.contains("has-children")) {
		activeElement.classList.remove("children-close");
		activeElement.classList.add("children-open");
	} else {
		nextTick(() => {
			if (
				(activeElement.parentElement.classList.contains("tree") &&
					!activeElement.parentElement.classList.contains(
						"tree-children"
					)) ||
				activeElement.parentElement.parentElement.classList.contains(
					"children-open"
				)
			) {
				activeElement.classList.add("active");
				emits("nodeSelected", activeElement, activeItem);
			}
		});
	}
});
</script>

<style scoped>
.tree {
	--tree-item-font-size: 14px;
	--tree-indent: 16px;
	--tree-item-hover-bg-color: #f5f5f5;
	--tree-item-active-bg-color: var(--light-pink-color);
}
.tree {
	width: 100%;
}
.tree:not(.tree-children) {
	box-shadow: var(--main-shadow);
}
.tree-item {
	cursor: pointer;
}

.tree-item-trigger {
	display: flex;
	align-items: center;
	min-height: 48px;
	font-size: var(--tree-item-font-size);
	padding-inline: var(--tree-indent);
}
.tree-item-trigger:hover {
	background-color: var(--tree-item-hover-bg-color);
}
.tree .tree-children .tree-item-trigger {
	padding-inline-start: calc(var(--tree-indent) * 2);
}
.tree-item.active .tree-item-trigger {
	background-color: var(--tree-item-active-bg-color);
	color: var(--main-color);
}

.children-close .tree-children {
	display: none;
}

.children-open .tree-item-close-icon {
	display: none;
}
.children-close .tree-item-open-icon {
	display: none;
}
</style>
