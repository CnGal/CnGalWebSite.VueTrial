<template>
	<gal-card>
		<div
			class="main-header"
			:class="{
				isUser: info.type === 3||info.type === 1,
			}"
		>
			<img :src="(info.type === 3||info.type === 1)?info.thumbnail : info.mainPicture" :alt="info.name" />
			<div class="main-info">
				<h1>{{ info.name }}</h1>
				<div class="staff" v-if="info.type === 0">
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
							:text="item.displayName"
						></gal-link-button>
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
							:text="item.displayName"
						></gal-link-button>
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
						size="40px"
						bgColor="var(--main-color)"
						circle
						v-gal-tooltip="'收藏'"
					></gal-icon-button>
					<gal-icon-button
						icon="pencilMdi"
						class="icon"
						size="40px"
						bgColor="var(--main-color)"
						circle
						v-gal-tooltip="'编辑'"
					></gal-icon-button>
				</div>
			</div>
		</div>
	</gal-card>
</template>

<script setup>
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
.main-header {
	display: flex;
	padding: 16px;
	background-color: var(--main-bg-color);
	column-gap: 16px;
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
}
.production-group,
.publishers-group {
	display: inline-flex;
	align-items: center;
	width: 50%;
}
.brief-introduction {
	font-size: 14px;
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
		padding: 0;
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
