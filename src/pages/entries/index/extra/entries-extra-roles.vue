<template>
	<gal-card class="roles-card">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon class="icon" icon="child" size="1em"></gal-icon
					>登场角色
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

		<gal-entries-game-roles-card
			v-show="contentIsShow"
			class="roles-content"
			:roles="info.roles"
			:rowHasCellTotal="1"
			:heightOverflowScroll="false"
		></gal-entries-game-roles-card>
	</gal-card>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
	info: {
		type: Object,
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
.content {
	display: flex;
	padding: 1em;
	padding-block-start: 0;
	flex-wrap: wrap;
	column-gap: 8px;
	row-gap: 8px;
}
.icon {
	margin-inline-end: 1em;
}
.icon.toogle {
	margin-inline-end: 0;
	font-size: 20px;
}

.roles-card.roles-card {
	background-color: transparent;
}
.roles-content {
	padding: 0;
	padding-block-start: 12px;
	background-color: transparent;
}
</style>
