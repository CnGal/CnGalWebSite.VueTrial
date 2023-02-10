<template>
	<gal-table :data="props.data" stripe>
		<gal-table-column
			prop="entryId"
			label="词条ID"
			width="80"
			fixed="left"
		/>
		<gal-table-column prop="name" label="游戏名称" min-width="200" />
		<gal-table-column prop="steamId" label="SteamID" width="100" />
		<gal-table-column prop="originalPrice" label="原价￥" width="100">
			<template #default="scope">
				{{ formatPrice(scope) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="priceNow" label="现价￥" width="100">
			<template #default="scope">
				{{ formatPrice(scope) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="cutNow" label="当前折扣%" width="120">
			<template #default="scope">
				{{ cutFormatter(scope) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="priceLowest" label="历史最低价￥" width="120">
			<template #default="scope">
				{{ priceLowestFormat(scope) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="cutLowest" label="历史最高折扣%" width="150">
			<template #default="scope">
				{{ curLowestFormat(scope) }}
			</template>
		</gal-table-column>
		<gal-table-column prop="evaluationCount" label="评测数" width="100" />
		<gal-table-column prop="recommendationRate" label="好评率" width="80">
			<template #default="scope">
				{{
					scope.row.recommendationRate === 0
						? "无"
						: scope.row.recommendationRate
				}}
			</template>
		</gal-table-column>
		<gal-table-column label="操作" width="80" fixed="right">
			<template #default="scope">
				<gal-link-button :to="`/entries/index/${scope.row.entryId}`"
					>查看</gal-link-button
				>
			</template>
		</gal-table-column>
	</gal-table>
</template>

<script setup>
const props = defineProps({
	data: {
		type: [Object],
		required: true
	}
});

const formatPrice = (scope) => {
	const price = scope.row.originalPrice;
	if (price === -1) {
		return "未发售";
	} else if (price === -2) {
		return "未更新";
	} else if (price === -3) {
		return "已下架";
	}
	return (price / 100).toFixed(2);
};

const cutFormatter = (scope) => {
	const price = scope.row.cutNow;
	if (price === -1) {
		return "未发售";
	} else if (price === -2) {
		return "未更新";
	} else if (price === -3) {
		return "已下架";
	}
	return price;
};

const priceLowestFormat = (scope) => {
	const price = scope.row.priceLowest;
	if (price === -1) {
		return "未记录";
	} else if (price === -2) {
		return "未更新";
	} else if (price === -3) {
		return "已下架";
	}
	return (price / 100).toFixed(2);
};

const curLowestFormat = (scope) => {
	const price = scope.row.cutLowest;
	if (price === -1) {
		return "未记录";
	} else if (price === -2) {
		return "未更新";
	} else if (price === -3) {
		return "已下架";
	}
	return price;
};
</script>

<style scoped></style>
