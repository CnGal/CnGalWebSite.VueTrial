<template>
	<gal-card
		class="card basic"
		v-if="
			props.information &&
			props.information.some((i) => i.modifier === '基本信息')
		"
	>
		<template v-slot:headerStart>
			<gal-icon class="icon headericon" icon="info"></gal-icon>基础信息
		</template>
		<ul class="content">
			<li
				v-for="(item, index) in props.information
					.find((i) => i.modifier === '基本信息')
					.informations.filter((i) => i.displayName !== '官网') || []"
				:key="index"
				class="item"
			>
				<gal-icon
					class="icon"
					:icon="infomationIcons(item) || 'circle'"
				></gal-icon>
				<div>
					<span>{{
						showInformationKeyText(item) +
						(item.displayValue ? ":" : "")
					}}</span>
					<span v-if="item.displayValue">{{
						item.displayValue
					}}</span>
				</div>
			</li>
		</ul>
	</gal-card>
	<gal-card
		class="card related"
		v-if="
			props.information &&
			props.information.some(
				(i) =>
					i.modifier === '相关网站' ||
					i.informations.some((j) => j.displayName === '官网')
			)
		"
	>
		<template v-slot:headerStart>
			<gal-icon class="icon headericon" icon="link"></gal-icon>相关网站
		</template>
		<ul class="content">
			<li
				v-for="(item, index) in [
					...(props.information.find((i) => i.modifier === '相关网站')
						?.informations || []),
					...(props.information
						.find((i) => i.modifier === '基本信息')
						?.informations?.filter(
							(i) => i.displayName === '官网'
						) || [])
				]"
				:key="index"
				class="item"
			>
				<gal-icon
					class="icon"
					:icon="infomationIcons(item) || 'externalLinkSquareAlt'"
				></gal-icon>
				<div class="single-row-dot">
					<span>{{ showInformationKeyText(item) }}:</span>
					<gal-link :href="item.displayValue" target="_blank">{{
						item.displayValue
					}}</gal-link>
				</div>
			</li>
		</ul>
	</gal-card>
</template>

<script setup>
import {
	infomationIcons,
	showInformationKeyText
} from "./_js/infomationIcons.js";

const props = defineProps({
	information: {
		type: [Object],
		required: true
	}
});
</script>

<style scoped>
.icon {
	color: var(--main-color);
}
.theme-dark .icon {
	color: var(--main-font-color);
}

.card {
	font-size: 14px;
	margin-block-start: 12px;
	color: var(--main-font-color);
}

.item {
	display: flex;
	column-gap: 14px;
	margin-block-end: 2px;
	flex-wrap: nowrap;
	align-items: baseline;
}
.item .icon {
	flex: none;
	transform: translateY(2px);
}
.item > div > span:first-child {
	margin-inline-end: 14px;
}
</style>
