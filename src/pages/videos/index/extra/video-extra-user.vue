<template>
	<gal-card class="extra-card" width="full">
		<gal-link class="img-area" :to="'/space/index/' + information.id">
			<img
				class="background"
				:src="information.backgroundImage"
				:alt="information.name + '背景图片'"
			/>
			<img
				class="avatar"
				:src="information.photoPath"
				:alt="information.name + '头像'"
			/>
		</gal-link>
		<div class="info-area">
			<h3 class="name" v-text="information.name"></h3>
			<div class="tag-wrapper">
				<galTag
					v-for="(item, index) in information.ranks"
					:key="index"
					class="tag"
					:bgColor="item.css.replace('bg-', '')"
				>
					{{ item.text }}
				</galTag>
			</div>
			<p v-text="information.personalSignature"></p>
		</div>
	</gal-card>
</template>

<script setup>
const props = defineProps({
	information: {
		type: [Object],
		required: true
	}
});
</script>

<style scoped>
.extra-card {
	background-color: var(--main-bg-color);
}
.img-area,
.background {
	width: 100%;
}
.avatar {
	display: block;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	margin: -40px auto 0;
}
.info-area {
	padding: 1em;
	font-size: 14px;
	text-align: center;
}
.name {
	font-size: 22px;
}
.tag-wrapper {
	display: inline-flex;
	flex-wrap: wrap;
	column-gap: 8px;
	margin-block: 8px;
}
</style>
