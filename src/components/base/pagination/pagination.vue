<template>
	<nav ref="pagination" v-if="!isSinglePage">
		<ul class="pagination">
			<li class="item">
				<galButton
					class="button arrow-button"
					@click="currentPageChange(currentPage - 1)"
					:disabled="currentPage === 1"
					><gal-icon icon="left" size="24px"></gal-icon
				></galButton>
			</li>
			<li v-for="item in list" :key="item.id" class="item">
				<galButton
					:class="['button', item.class, { current: item.current }]"
					@click="item.click"
					>{{ item.value }}</galButton
				>
			</li>
			<li class="item">
				<galButton
					class="button arrow-button"
					@click="currentPageChange(currentPage + 1)"
					:disabled="currentPage === pageCount"
					><gal-icon icon="right" size="24px"></gal-icon
				></galButton>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { ref, onMounted, watch, nextTick, onUnmounted } from "vue";

const liWidth = 40;
const gap = 8;

const props = defineProps({
	total: {
		type: Number,
		require: true
	},
	pageSize: {
		type: Number,
		default: 10
	},
	currentPage: Number
});
const emit = defineEmits(["update:currentPage", "currentChange"]);

const pagination = ref();
let list = ref([]);
const isSinglePage = ref(false);
const pageCount = ref(0);

//  通过 v-modal:currentPage 修改 currentPage 数据，并在修改时暴露出 currentChange 事件
const currentPageChange = (pageValue) => {
	emit("update:currentPage", pageValue);
	emit("currentChange", pageValue);
};

const initItem = () => {
	list.value = [];
	pageCount.value = Math.ceil(props.total / props.pageSize);

	// 当页数小于等于1时，隐藏组件
	if (pageCount.value <= 1) {
		isSinglePage.value = true;
		return;
	} else {
		isSinglePage.value = false;
	}

	nextTick(() => {
		// 通过组件宽度计算出最多显示多少个页码
		const paginationWidth = pagination.value.getBoundingClientRect().width;
		const maxItemCount = Math.floor(paginationWidth / (liWidth + gap)) - 2;
		const hasMore = pageCount.value > maxItemCount;

		if (!hasMore) {
			// 总数小于最大显示数时，显示所有页码
			for (let i = 1; i <= pageCount.value; i++) {
				list.value.push({
					id: i,
					value: i,
					current: i === props.currentPage,
					click: () => {
						currentPageChange(i);
					}
				});
			}
			pagination.value.classList.add("no-more");
		} else {
			// 总数超过最大显示数时的处理
			pagination.value.classList.add("has-more");
			let currentArea;
			if (props.currentPage < Math.floor(maxItemCount / 2) - 1) {
				currentArea = "start";
			} else if (
				props.currentPage >
				pageCount.value - maxItemCount / 2 + 1
			) {
				currentArea = "end";
			} else {
				currentArea = "middle";
			}

			if (currentArea === "start" || currentArea === "end") {
				for (let i = 1; i <= maxItemCount; i++) {
					if (i < Math.floor(maxItemCount / 2)) {
						list.value.push({
							id: i,
							value: i,
							current: i === props.currentPage,
							click: () => {
								currentPageChange(i);
							}
						});
					} else if (i === Math.floor(maxItemCount / 2)) {
						list.value.push({
							id: 100000,
							value: "...",
							class: "more"
						});
					} else {
						const value = pageCount.value - maxItemCount + i;
						list.value.push({
							id: value,
							value: value,
							current: value === props.currentPage,
							click: () => {
								currentPageChange(value);
							}
						});
					}
				}
			} else if (currentArea === "middle") {
				list.value.push({
					id: 1,
					value: 1,
					click: () => {
						currentPageChange(1);
					}
				});

				for (let i = 2; i <= maxItemCount; i++) {
					if (i === 2) {
						list.value.push({
							id: 100000,
							value: "...",
							class: "more"
						});
					} else if (i === maxItemCount) {
						list.value.push({
							id: 100001,
							value: "...",
							class: "more"
						});
					} else {
						const value =
							props.currentPage -
							Math.floor(maxItemCount / 2) +
							i;
						list.value.push({
							id: value,
							value: value,
							current: value === props.currentPage,
							click: () => {
								currentPageChange(value);
							}
						});
					}
				}
				list.value.push({
					id: pageCount.value,
					value: pageCount.value,
					click: () => {
						currentPageChange(pageCount.value);
					}
				});
			}
		}
	});
};

const refresh = () => {
	initItem();
};
// 暴露出 refresh 方法，用于外部调用
defineExpose({
	refresh
});

// 页面总数或当前页码变化时，重新计算页码
watch(
	() => props.currentPage,
	() => {
		initItem();
	}
);
watch(
	() => props.total,
	() => {
		initItem();
	}
);

onMounted(() => {
	initItem();
	window.addEventListener("resize", initItem);
});
onUnmounted(() => {
	window.removeEventListener("resize", initItem);
});
</script>

<style scoped>
.pagination {
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.no-more .pagination {
	justify-content: start;
	column-gap: 8px;
}
.item {
	width: 40px;
	height: 32px;
}
.button {
	width: 100%;
	height: 100%;
	border: none;
	font-size: 16px;
	border-radius: 4px;
	box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
		0 1px 5px 0 rgb(0 0 0 / 12%);
}
.more {
	box-shadow: none;
	background-color: transparent;
	font-weight: 700;
	cursor: auto;
}
.current {
	background-color: var(--main-color);
	color: #fff;
}
.current:hover {
	background-color: var(--main-color);
	color: #fff;
}
.arrow-button {
	padding: unset;
}
</style>
