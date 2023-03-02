<template>
	<component
		:is="props.level === 'section' ? 'section' : 'div'"
		class="card"
		:class="{
			noheader: !($slots.headerStart || $slots.headerEnd),
			[props.width]: true
		}"
	>
		<template v-if="$slots.headerStart || $slots.headerEnd">
			<component
				:is="props.level === 'section' ? 'header' : 'div'"
				class="card-header"
			>
				<component :is="props.headingLevel" class="heading">
					<slot name="headerStart"></slot>
				</component>
				<div class="end">
					<slot name="headerEnd"></slot>
					<gal-icon-button
						v-if="props.toggle"
						icon="down"
						class="icon toggle"
						theme="solid"
						circle
						v-gal-tooltip="toggleBtnTooltipTextList.show"
						:data-tooltip-text="toggleBtnTooltipText"
						@click="toggleRolesCardVisibility"
					></gal-icon-button>
				</div>
			</component>
			<div class="card-main" v-show="isShow">
				<slot></slot>
			</div>
		</template>
		<template v-else>
			<slot></slot>
		</template>
	</component>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
	level: {
		type: String,
		default: "section" // section, box
	},
	headingLevel: {
		type: String,
		default: "h2"
	},
	width: {
		type: String,
		default: "fit"
	},
	toggle: {
		type: Boolean,
		dafault: false
	}
});
const emit = defineEmits(["toggleChange"]);

const isShow = ref(true);
const toggleBtnTooltipTextList = {
	show: "折叠",
	hide: "展开"
};
const toggleBtnTooltipText = ref(toggleBtnTooltipTextList.show);

const toggleRolesCardVisibility = () => {
	isShow.value = !isShow.value;
	toggleBtnTooltipText.value =
		toggleBtnTooltipTextList[isShow.value ? "show" : "hide"];

	emit("toggleChange", isShow.value);
};
</script>

<style scoped>
.card {
	--card-box-shadow: var(--main-shadow);

	--card-header-box-shadow: unset;
	--card-header-bg-color: var(--main-bg-color);
	--card-header-color: var(--main-color);
	--card-header-padding: 1em 1em 12px;
	--card-heading-font-size: 20px;
	--card-heading-font-weight: bold;
	--card-heading-column-gap: 12px;
	--card-header-end-font-size: 16px;

	--card-body-bg-color: var(--main-bg-color);
	--card-body-color: var(--main-font-color);
	--card-body-padding: 0 16px 16px;
}

.theme-dark .card {
	--card-header-color: var(--main-font-color);
}

.noheader {
	--card-body-padding: 16px;
}

.full {
	--card-body-padding: 0 0 16px;
}

.card[transparent] {
	--card-header-box-shadow: var(--main-shadow);
	--card-box-shadow: none;
	--card-body-bg-color: transparent;
	--card-body-padding: 16px;
}
.full[transparent] {
	--card-body-padding: 0;
}
@media screen and (max-width: 768px) {
	.card {
		--card-header-padding: 0 1em;
		--card-heading-font-size: 14px;
		--card-header-end-font-size: 14px;
		--card-heading-font-weight: normal;
	}
	.card.full {
		--card-body-padding: 0;
	}
}

.noheader {
	color: var(--card-body-color);
	background-color: var(--card-body-bg-color);
	padding: var(--card-body-padding);
}

.card {
	box-shadow: var(--card-box-shadow);
}

.card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--card-header-bg-color);
	color: var(--card-header-color);
	min-height: 35px;
	padding: var(--card-header-padding);
	box-shadow: var(--card-header-box-shadow);
}

.heading {
	display: flex;
	align-items: center;
	column-gap: var(--card-heading-column-gap);
	font-size: var(--card-heading-font-size);
	font-weight: var(--card-heading-font-weight);
}
.end {
	display: flex;
	align-items: center;
	font-size: var(--card-header-end-font-size);
}

.icon.toggle {
	--icon-button-size: 30px;
	margin-inline-start: 8px;
	font-size: 20px;
}

.card-main {
	color: var(--card-body-color);
	background-color: var(--card-body-bg-color);
	padding: var(--card-body-padding);
}
</style>
