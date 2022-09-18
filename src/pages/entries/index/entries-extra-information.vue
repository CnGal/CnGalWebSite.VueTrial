<template>
	<gal-card
		class="extra-card"
		v-if="
			info.information &&
			info.information.some((i) => i.modifier === '基本信息')
		"
	>
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon class="icon" icon="info" size="1em"></gal-icon
					>基础信息
				</template>
			</gal-card-header>
		</template>
		<div class="content">
			<div
				v-for="(item, index) in info.information
					.find((i) => i.modifier === '基本信息')
					.informations.filter((i) => i.displayName !== '官网') || []"
				:key="index"
			>
				<gal-icon
					class="icon"
					:icon="infomationIcons(item) || 'circle'"
					size="1em"
				></gal-icon>
				<span>{{ showInformationKeyText(item.displayName) }}:</span
				>&nbsp;&nbsp;
				<span>{{ item.displayValue }}</span>
			</div>
		</div>
	</gal-card>
	<gal-card
		class="extra-card"
		v-if="
			info.information &&
			info.information.some(
				(i) =>
					i.modifier === '相关网站' ||
					i.informations.some((j) => j.displayName === '官网')
			)
		"
	>
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon class="icon" icon="link" size="1em"></gal-icon
					>相关网站
				</template>
			</gal-card-header>
		</template>
		<div class="content">
			<div
				v-for="(item, index) in [
					...info.information.find((i) => i.modifier === '相关网站')
						?.informations,
					...info.information
						.find((i) => i.modifier === '基本信息')
						?.informations?.filter((i) => i.displayName === '官网'),
				]"
				:key="index"
				class="single-row-dot"
			>
				<gal-icon
					class="icon"
					:icon="infomationIcons(item) || 'externalLinkSquareAlt'"
					size="1em"
				></gal-icon>
				<span>{{ showInformationKeyText(item.displayName) }}:</span
				>&nbsp;&nbsp;
				<a :href="item.displayValue" target="_blank">{{
					item.displayValue
				}}</a>
			</div>
		</div>
	</gal-card>
</template>

<script setup>
import {
	infomationIcons,
	showInformationKeyText,
} from "./_js/infomationIcons.js";

const props = defineProps({
	info: {
		type: Object,
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

.extra-card {
	background-color: var(--main-bg-color);
	font-size: 14px;
	margin-block-start: 12px;
	color: var(--main-font-color);
}
.content {
	padding: 1em;
	padding-block-start: 0;
}
.icon {
	margin-inline-end: 1em;
}
</style>
