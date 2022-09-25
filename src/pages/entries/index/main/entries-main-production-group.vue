<template>
	<gal-card class="production-group">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon
						class="icon"
						icon="objectGroup"
						size="1em"
					></gal-icon
					>相关制作组
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

		<div v-show="contentIsShow">
			<router-link
				v-for="item in props.entryRelevances"
				:key="item.id"
				class="production-item"
				:to="'/entries/index/' + item.id"
			>
				<img class="img" :src="item.mainImage" :alt="item.name" />
				<div class="info">
					<div class="info-row">
						<gal-tag>制作组</gal-tag>
						<h3 class="info-head">{{ item.name }}</h3>
					</div>
					<div
						class="info-row"
						v-for="addInfor in item.addInfors"
						:key="addInfor.modifier"
					>
						<gal-tag class="tags">{{ addInfor.modifier }}</gal-tag>
						<gal-link-button
							class="tags"
							v-for="content in addInfor.contents"
							:key="content.id"
							:to="'/entries/index/' + content.id"
							:text="content.displayName"
							theme="outline"
						></gal-link-button>
					</div>
				</div>
			</router-link>
		</div>
	</gal-card>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
	entryRelevances: {
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
.icon {
	margin-inline-end: 1em;
}
.icon.toogle {
	margin-inline-end: 0;
	font-size: 20px;
}
.production-item {
	display: flex;
	margin-block-start: 16px;
	padding: 1em;
	background-color: var(--main-bg-color);
	color: var(--main-font-color);
}
.img {
	width: 250px;
}
.info {
	flex: 1;
	font-size: 14px;
}
.info-row {
	display: flex;
	flex-wrap: wrap;
	column-gap: 8px;
	row-gap: 8px;
	margin-block-end: 8px;
}

.info-head {
	font-size: 20px;
}
.tags {
	font-size: 14px;
	display: inline-block;
	flex: 0 0 auto;
}
</style>
