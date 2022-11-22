<template>
	<section
		class="card"
		:class="{ noheader: !($slots.headerStart || $slots.headerEnd) }"
	>
		<header
			class="card-header"
			v-if="$slots.headerStart || $slots.headerEnd"
		>
			<h2>
				<slot name="headerStart"></slot>
			</h2>
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
		</header>
		<main :class="['card-main', props.width]" v-show="isShow">
			<slot></slot>
		</main>
	</section>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
	width: {
		type: String,
		default: "fit"
	},
	toggle: {
		type: Boolean,
		dafault: false
	},
	toggleChange: {
		type: Function,
		default: Function.prototype
	}
});
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

	props.toggleChange(isShow.value);
};
</script>

<style scoped>
.card {
	--card-header-bg-color: var(--main-bg-color);
	--card-body-bg-color: var(--main-bg-color);
}
.card {
	box-shadow: var(--main-shadow);
	border-radius: var(--main-border-radius);
}

.card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: var(--main-font-color);
	background-color: var(--card-header-bg-color);
	min-height: 35px;
	padding: 1em 1em 12px;
}
html:not(.theme-dark) .card-header {
	color: var(--main-color);
}
h2 {
	display: flex;
	align-items: center;
	font-size: 1.25em;
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
.card-main.fit {
	padding: 0 16px 16px;
}
.card.noheader .card-main.fit {
	padding: 16px;
}
.card-main.full {
	padding: 0;
}

@media screen and (max-width: 768px) {
	.card {
		--card-body-bg-color: transparent;
	}
	.card {
		box-shadow: none;
	}

	h2 {
		font-size: 14px;
		font-weight: normal;
	}
	.card-header {
		margin-block-end: 12px;
		padding-block-start: 0;
		padding-block-end: 0;
		box-shadow: var(--main-shadow);
		border-radius: var(--main-border-radius);
	}

	.card-main.fit {
		padding: 0;
	}
}
</style>
