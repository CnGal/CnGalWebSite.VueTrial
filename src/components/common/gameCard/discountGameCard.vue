<template>
	<gal-normal-game-card :data="props.data" class="game-card">
		<template v-slot:sub>
			<div class="steam-info">
				<div class="info">
					<div
						v-if="props.data.evaluationCount"
						class="evaluation-count"
					>
						<div>
							<gal-icon class="icon" icon="thumbsUp"></gal-icon>
						</div>
						<div>
							<span
								>{{ props.data.recommendationRate }}% 好评&nbsp;
							</span>
							<wbr />
							<span :style="{ display: 'inline-block' }"
								>({{ props.data.evaluationCount }}条评测)</span
							>
						</div>
					</div>
					<div>
						<gal-icon class="icon" icon="calendarCheck"></gal-icon>
						<span>{{
							formatDateWithYMD(props.data.publishTime)
						}}</span>
					</div>
					<div v-if="~props.data.cutLowest">
						<gal-icon class="icon" icon="chartArea"></gal-icon>
						<span
							>{{ props.data.priceLowestString }} -
							{{ props.data.cutLowest }}%
						</span>
					</div>
				</div>
				<div class="price">
					<div class="price-now">
						{{ props.data.priceNowString }}
					</div>
					<div class="cut-now">{{ props.data.cutNow }}% OFF</div>
					<div class="original-price">
						{{ "¥ " + (props.data.originalPrice / 100).toFixed(2) }}
					</div>
				</div>
			</div>
		</template>
	</gal-normal-game-card>
</template>

<script setup>
import { formatDateWithYMD } from "../../../assets/common/js/formatDate.js";
const props = defineProps({
	data: {
		type: Object,
		required: true
	}
});
</script>

<style scoped>
.game-card {
	--row-dot-line: 3;
}
.steam-info {
	display: flex;
	font-size: 14px;
	color: var(--block-color);
}
.icon {
	color: var(--main-color);
	margin-inline-end: 1em;
}
.info {
	flex: auto;
}
.price {
	flex: none;
	margin-inline-start: 1em;
	margin-inline-end: 1em;
	text-align: center;
}
.evaluation-count {
	display: flex;
}
.price-now {
	font-size: 23px;
	color: var(--main-color);
}
.cut-now {
	font-size: 14px;
	color: var(--main-color);
}
.original-price {
	color: var(--gray-color);
	text-decoration: line-through;
	margin-block-end: 0.5em;
}
</style>
