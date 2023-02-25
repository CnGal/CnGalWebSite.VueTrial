<template>
	<component
		:is="props.level === 'section' ? 'section' : 'div'"
		class="card"
		:class="{
			noheader: !($slots.headerStart || $slots.headerEnd),
			[props.width]: true
		}"
	>
		<component
			:is="props.level === 'section' ? 'header' : 'div'"
			class="card-header"
			v-if="$slots.headerStart || $slots.headerEnd"
		>
			<component :is="props.headingLevel">
				<slot name="headerStart"></slot>
			</component>
			<div class="end">
				<slot name="headerEnd"></slot>
				<gal-icon-button
					v-if="props.toggle"
					icon="down"
					class="icon toggle"
					type="primary"
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
	--card-body-bg-color: var(--main-bg-color);
	--card-header-padding: 1em 1em 12px;
	--card-body-fit-size-padding: 16px;
	--card-body-full-size-padding: 0;
	--card-header-font-size: 1.2em;
}
.full {
	--card-box-shadow: unset;
	--card-header-box-shadow: var(--main-shadow);
	--card-body-bg-color: transparent;
}
@media screen and (max-width: 768px) {
	.card {
		--card-body-bg-color: transparent;
		--card-box-shadow: unset;
		--card-header-box-shadow: var(--main-shadow);
		--card-header-padding: 0 1em;
		--card-body-fit-size-padding: 0;
	}
}

.card {
	box-shadow: var(--card-box-shadow);
	border-radius: var(--main-border-radius);
}

.card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: var(--main-font-color);
	background-color: var(--card-header-bg-color);
	min-height: 35px;
	padding: var(--card-header-padding);
	box-shadow: var(--card-header-box-shadow);
}
html:not(.theme-dark) .card-header {
	color: var(--main-color);
}
h2 {
	display: flex;
	align-items: center;
	font-size: var(--card-header-font-size);
}
.end {
	display: flex;
}

.icon.toggle {
	--icon-button-size: 36px;
	font-size: 20px;
}

.card-main {
	color: var(--main-font-color);
	background-color: var(--card-body-bg-color);
}
.fit .card-main {
	padding: var(--card-body-fit-size-padding);
	/* 当有 header 的时候，不需要加上方的 padding */
	padding-block-start: unset;
}
.card.noheader.fit .card-main {
	padding: var(--card-body-fit-size-padding);
}
.full .card-main {
	padding: var(--card-body-full-size-padding);
}

@media screen and (max-width: 768px) {
	h2 {
		font-size: 14px;
		font-weight: normal;
	}
	.card-header {
		margin-block-end: 12px;
		border-radius: var(--main-border-radius);
	}
}
</style>
