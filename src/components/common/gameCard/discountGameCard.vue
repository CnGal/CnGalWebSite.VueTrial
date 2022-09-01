<template>
	<gal-free-game-card :cardInfo="props.cardInfo" class="game-card">
		<template v-slot:sub>
			<div class="steam-info">
				<div class="info">
					<div v-if="props.cardInfo.evaluationCount">
						<gal-icon class="icon" icon="thumbsUp"></gal-icon>
						<span>{{
							`${props.cardInfo.recommendationRate}% 好评 （${props.cardInfo.evaluationCount}条评测）`
						}}</span>
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
					<!-- todo -->
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
</style>
