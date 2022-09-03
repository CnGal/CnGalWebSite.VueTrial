<template>
	<gal-free-game-card :cardInfo="props.cardInfo" class="game-card">
		<template v-slot:sub>
			<div class="steam-info">
				<div class="info">
					<div
						v-if="props.cardInfo.evaluationCount"
						class="evaluation-count"
					>
						<div>
							<gal-icon class="icon" icon="thumbsUp"></gal-icon>
						</div>
						<div>
							<span
								>{{ props.cardInfo.recommendationRate }}%
								好评&nbsp;
							</span>
							<wbr />
							<span :style="{ display: 'inline-block' }"
								>({{
									props.cardInfo.evaluationCount
								}}条评测)</span
							>
						</div>
					</div>
					<div>
						<gal-icon class="icon" icon="calendarCheck"></gal-icon>
						<span>{{
							formatDateWithYMD(props.cardInfo.publishTime)
						}}</span>
					</div>
					<div v-if="~props.cardInfo.cutLowest">
						<gal-icon class="icon" icon="chartArea"></gal-icon>
						<span
							>{{ props.cardInfo.priceLowestString }} -
							{{ props.cardInfo.cutLowest }}%
						</span>
					</div>
				</div>
				<div class="price">
					<div class="price-now">
						{{ props.cardInfo.priceNowString }}
					</div>
					<div class="cut-now">{{ props.cardInfo.cutNow }}% OFF</div>
					<div class="original-price">
						{{
							"¥ " +
							(props.cardInfo.originalPrice / 100).toFixed(2)
						}}
					</div>
				</div>
			</div>
		</template>
	</gal-free-game-card>
</template>

<script setup>
import { formatDateWithYMD } from "../../../assets/common/js/formatDate.js";
const props = defineProps({
	cardInfo: {
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
