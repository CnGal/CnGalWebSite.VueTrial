<template>
	<gal-card class="staff-games">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon class="icon" icon="send2" size="1em"></gal-icon
					>参与作品
				</template>
				<template v-slot:end>
					<gal-icon-button
						icon="down"
						class="icon toogle"
						size="36px"
						bgColor="var(--main-color)"
						circle
						v-gal-tooltip="'折叠'"
						:data-tooltip-text="toggleBtnTooltipText"
						@click="toggleRolesCardVisibility"
					></gal-icon-button>
				</template>
			</gal-card-header>
		</template>

		<gal-game-card-rows
			v-show="contentIsShow"
			class="content"
			:rows="staffGames"
			:rowHasCellTotal="1"
			:heightOverflowScroll="false"
		></gal-game-card-rows>
	</gal-card>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
	staffGames: {
		type: [Object],
		required: true,
	},
});

const contentIsShow = ref(true);
const toggleBtnTooltipTextList = {
	show: "折叠",
	hide: "展开",
};
const toggleBtnTooltipText = ref("折叠");

const toggleRolesCardVisibility = () => {
	contentIsShow.value = !contentIsShow.value;
	toggleBtnTooltipText.value =
		toggleBtnTooltipTextList[contentIsShow.value ? "show" : "hide"];
};
</script>

<style scoped>
.icon {
	margin-inline-end: 1em;
}
.icon.toogle {
	margin-inline-end: 0;
	font-size: 20px;
}
.content {
	padding: 0;
	padding-block-start: 12px;
	background-color: transparent;
}
.content :deep(.img) {
	height: 116px;
	aspect-ratio: 250 / 117;
	border-radius: unset;
}
</style>
