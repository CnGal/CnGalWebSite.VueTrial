<template>
	<gal-card class="index-page-header">
		<div
			class="main-header"
			:class="{
				isUser:
					info.type === stateStore.entryType.role ||
					info.type === stateStore.entryType.staff
			}"
		>
			<img
				:src="
					info.type === stateStore.entryType.role ||
					info.type === stateStore.entryType.staff
						? info.thumbnail
						: info.mainPicture
				"
				:alt="info.name"
			/>
			<div class="main-info">
				<h1>{{ info.name }}</h1>
				<div
					class="staff"
					v-if="info.type === stateStore.entryType.game"
				>
					<div
						class="production-group"
						v-if="info.productionGroups?.length"
					>
						<gal-tag class="production-title">制作组</gal-tag>
						<gal-link-button
							class="production-item"
							v-for="item in info.productionGroups"
							:key="item.id"
							:to="'/entries/index/' + item.id"
							theme="outline"
						>
							{{ item.displayName }}
						</gal-link-button>
					</div>
					<div
						class="publishers-group"
						v-if="info.publishers?.length"
					>
						<gal-tag class="publishers-title">发行商</gal-tag>
						<gal-link-button
							class="publishers-item"
							v-for="item in info.publishers"
							:key="item.id"
							:to="'/entries/index/' + item.id"
							theme="outline"
						>
							{{ item.displayName }}
						</gal-link-button>
					</div>
				</div>
				<p
					class="brief-introduction"
					v-if="info.briefIntroduction"
					v-text="info.briefIntroduction"
				></p>
				<div class="icon-wrap">
					<gal-icon-button
						icon="heartOutline"
						class="icon"
						:style="{ '--icon-button-size': '40px' }"
						theme="solid"
						circle
						v-gal-tooltip="'收藏'"
					></gal-icon-button>
					<gal-icon-button
						v-if="props.type !== 'video'"
						icon="pencilMdi"
						class="icon"
						:style="{ '--icon-button-size': '40px' }"
						theme="solid"
						circle
						v-gal-tooltip="'编辑'"
					></gal-icon-button>
				</div>
			</div>
		</div>
	</gal-card>
</template>

<script setup>
import { useStateTypeStore } from "@/store/statetype.js";
const stateStore = useStateTypeStore();

const props = defineProps({
	info: {
		type: Object,
		required: true
	},
	type: {
		type: String,
		required: true
	}
});
</script>

<style scoped>
@media screen and (max-width: 992px) {
	.index-page-header {
		--card-body-fit-size-padding: 0;
	}
}

.theme-dark a,
.theme-dark .icon {
	color: var(--main-font-color);
}
.main-header {
	display: flex;
	background-color: var(--main-bg-color);
	column-gap: 16px;
	color: var(--main-font-color);
}
.main-header img {
	width: 40%;
	max-width: 512px;
	aspect-ratio: 460 / 215;
	object-fit: contain;
	object-position: right top;
}
.main-header.isUser img {
	width: 200px;
	aspect-ratio: 1;
	border-radius: 50%;
}
.production-title,
.production-item,
.publishers-title,
.publishers-item {
	font-size: 12px;
	padding: 1px 8px;
}
.production-group,
.publishers-group {
	display: inline-flex;
	margin-block-start: 8px;
	align-items: center;
	flex-wrap: wrap;
	column-gap: 8px;
	row-gap: 8px;
	width: 50%;
}
.brief-introduction {
	font-size: 14px;
	margin-block-start: 8px;
}
.main-info {
	display: flex;
	flex: 1;
	flex-direction: column;
}
.icon-wrap {
	align-self: end;
	display: inline-flex;
	font-size: 24px;
	column-gap: 16px;
	margin-block-start: 8px;
}

@media screen and (max-width: 1200px) {
	.production-group,
	.publishers-group {
		width: 100%;
	}
}
@media screen and (max-width: 992px) {
	.main-header {
		flex-direction: column;
	}
	.main-header img {
		width: 100%;
		max-width: 100%;
	}
	.main-info {
		padding: 16px;
	}

	.main-header.isUser img,
	.main-header.isUser .main-info h1 {
		align-self: center;
	}
	.main-header.isUser img {
		margin-block-start: 16px;
	}
}
</style>
