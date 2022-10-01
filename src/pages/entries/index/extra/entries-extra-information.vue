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
				<span>{{ showInformationKeyText(item.displayName) }}:</span>
				<span>{{ item.displayValue }}</span>
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
						) || []),
				]"
				:key="index"
				class="item"
			>
				<gal-icon
					class="icon"
					:icon="infomationIcons(item) || 'externalLinkSquareAlt'"
				></gal-icon>
				<span>{{ showInformationKeyText(item.displayName) }}:</span>
				<a
					class="single-row-dot"
					:href="item.displayValue"
					target="_blank"
					>{{ item.displayValue }}</a
				>
			</li>
		</ul>
	</gal-card>
</template>

<script setup>
import {
	infomationIcons,
	showInformationKeyText,
} from "../_js/infomationIcons.js";

const props = defineProps({
	information: {
		type: [Object],
		required: true,
	},
});
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

.headericon {
	margin-inline-end: 1em;
}

.card {
	background-color: var(--main-bg-color);
	font-size: 14px;
	margin-block-start: 12px;
	color: var(--main-font-color);
}
.content {
	padding: 1em;
	padding-block-start: 0;
}
.item {
	display: flex;
	column-gap: 14px;
	margin-block-end: 2px;
}
.item .icon,
.item span {
	flex: none;
}
.basic .item {
	flex-wrap: wrap;
}
</style>
