<template>
	<gal-card class="main-card">
		<template v-slot:header>
			<gal-card-header>
				<template v-slot:start>
					<gal-icon
						class="icon"
						icon="newspaper"
						size="1em"
					></gal-icon
					>动态
				</template>
			</gal-card-header>
			<div class="content">
				<gal-timeline contentAlign="left">
					<gal-timeline-item
						v-for="(item, index) in [
							...props.info.newsOfEntry,
						].reverse()"
						:key="index"
					>
						<template v-slot:divider>
							<img
								class="img"
								:src="item.image"
								alt="item.title"
							/>
						</template>
						<template v-slot:body>
							<div class="timeline-body-content">
								<h3>{{ item.title }}</h3>
								<p v-text="item.briefIntroduction"></p>
							</div>
						</template>
					</gal-timeline-item>
				</gal-timeline>
			</div>
		</template>
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
.content {
	padding: 1em;
	padding-block-start: 2px;
	max-height: 500px;
	overflow: hidden;
}
.content:hover {
	overflow: auto;
}
.icon {
	margin-inline-end: 1em;
}
.img {
	width: 48px;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
}

.timeline-body-content h3 {
	font-size: 20px;
	padding: 16px;
}
.timeline-body-content p {
	padding: 16px;
	padding-block-start: 0;
	color: var(--gray-color);
	white-space: break-spaces;
}
</style>
