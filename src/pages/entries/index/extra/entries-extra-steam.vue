<template>
	<gal-card>
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="steam"></gal-icon>steam信息
		</template>
		<ul class="content">
			<li v-if="steamInfo.priceNow === -1" class="content-item">
				<gal-icon class="icon" icon="calendarPlusOutline"></gal-icon>
				未发售
			</li>
			<li v-else-if="steamInfo.priceNow === 0" class="content-item">
				<gal-icon class="icon" icon="checkCircle"></gal-icon>
				当前价格：¥ 0.00 - Free
			</li>
			<li v-else-if="steamInfo.priceNow > 0" class="content-item">
				<div>
					<gal-icon class="icon" icon="moneyBillAlt"></gal-icon>
					当前价格：<span v-if="steamInfo.cutNow > 0"
						><s>{{
							"¥ " + (steamInfo.originalPrice / 100).toFixed(2)
						}}</s
						>&nbsp;<span :style="{ display: 'inline-block' }">{{
							" ¥ " +
							(steamInfo.priceNow / 100).toFixed(2) +
							" - 折扣 " +
							steamInfo.cutNow +
							"%"
						}}</span></span
					><span v-else>{{
						"¥ " + (steamInfo.priceNow / 100).toFixed(2)
					}}</span>
				</div>
				<div v-if="steamInfo.cutLowest > 0">
					<gal-icon class="icon" icon="chartArea"></gal-icon>
					历史最低：<span>{{
						steamInfo.priceLowestString +
						(steamInfo.cutLowest === 0
							? ""
							: " - 折扣 " + steamInfo.cutLowest + "%")
					}}</span>
				</div>
			</li>
			<li v-else-if="steamInfo.priceNow === -2" class="content-item">
				<div v-if="steamInfo.originalPrice > 0">
					<gal-icon class="icon" icon="moneyBillAlt"></gal-icon>
					价格：<span>{{
						"¥ " + (steamInfo.originalPrice / 100).toFixed(2)
					}}</span
					>（数据未更新）
				</div>
				<div v-else-if="steamInfo.originalPrice === 0">
					<gal-icon class="icon" icon="checkCircle"></gal-icon>
					价格：¥ 0.00 - Free（数据未更新）
				</div>
				<div v-else>
					<gal-icon class="icon" icon="calendarTimes"></gal-icon>
					数据未更新
				</div>
			</li>
			<li v-else-if="steamInfo.priceNow === -3" class="content-item">
				<gal-icon class="icon" icon="calendarTimes"></gal-icon>
				已下架
			</li>

			<li v-if="steamInfo.estimationOwnersMax > 0" class="content-item">
				<gal-icon class="icon" icon="users"></gal-icon>
				<span>拥有人数（估计）：</span>
				<wbr />
				<span :style="{ display: 'inline-block' }">{{
					steamInfo.estimationOwnersMin === 0
						? "< " + steamInfo.estimationOwnersMax
						: "> " + steamInfo.estimationOwnersMin
				}}</span>
			</li>

			<li v-if="steamInfo.evaluationCount > 0" class="content-item">
				<gal-icon class="icon" icon="thumbsUp"></gal-icon>
				<span>{{ steamInfo.recommendationRate }}% 好评&nbsp; </span>
				<wbr />
				<span :style="{ display: 'inline-block' }"
					>({{ steamInfo.evaluationCount }}条评测)</span
				>
			</li>

			<li class="single-row-dot content-item">
				<gal-icon class="icon" icon="homeFill"></gal-icon>
				商店页面：<a
					v-gal-tooltip="
						'https://store.steampowered.com/app/' + props.steamId
					"
					:href="
						'https://store.steampowered.com/app/' + props.steamId
					"
					target="_blank"
					>{{
						"https://store.steampowered.com/app/" + props.steamId
					}}</a
				>
			</li>
		</ul>

		<teleport :to="'head'" v-if="steamInfo.originalPrice">
			<meta itemprop="priceCurrency" content="CNY" />
			<meta
				itemprop="price"
				:content="(steamInfo.originalPrice / 100).toFixed(2)"
			/>
		</teleport>
	</gal-card>
</template>

<script setup>
import { ref, watch } from "vue";
import { getSteamInforByID } from "../../../../api/steamAPI/index.js";

const props = defineProps({
	steamId: {
		type: Number,
		required: true
	}
});
const id = ref(props.steamId);
const steamInfo = ref({});

const getInfo = async () => {
	if (id.value) {
		const { data: steamData } = await getSteamInforByID(id.value);
		steamInfo.value = steamData;
	}
};
getInfo();

// 监听 steamid 变化
watch(
	() => props.steamId,
	(newSteamId) => {
		id.value = newSteamId;
		getInfo();
	}
);
</script>

<style scoped>
a,
.icon {
	color: var(--main-color);
}
.theme-dark a,
.theme-dark .icon {
	color: var(--main-font-color);
}
.content-item + .content-item {
	margin-block-start: 4px;
}
.content-item .icon {
	margin-inline-end: 8px;
}
</style>
