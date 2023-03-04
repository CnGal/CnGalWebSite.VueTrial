<template>
	<gal-card class="main-card">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="newspaper"></gal-icon>动态
		</template>
		<div class="content">
			<gal-timeline
				:contentAlign="props.newsOfEntry.length < 3 ? 'left' : 'center'"
			>
				<gal-timeline-item
					v-for="(item, index) in [...props.newsOfEntry].reverse()"
					:key="index"
				>
					<template v-slot:divider>
						<img class="img" :src="item.image" alt="item.title" />
					</template>
					<template v-slot:body>
						<component
							:is="item.link ? 'gal-link' : 'div'"
							:to="item.link"
							class="timeline-body-content"
						>
							<h3>{{ item.title }}</h3>
							<p v-text="item.briefIntroduction"></p>
						</component>
					</template>
					<template v-slot:opposite>
						<div class="timeline-opposite-content">
							<span>{{
								dateFormat(item.happenedTime, "YMDhm")
							}}</span>
						</div>
					</template>
				</gal-timeline-item>
			</gal-timeline>
		</div>
	</gal-card>
</template>

<script setup>
import { dateFormat } from "../../../../assets/common/js/formatDate.js";
const props = defineProps({
	newsOfEntry: {
		type: [Object],
		required: true
	}
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

.img {
	width: 48px;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
}

.timeline-body-content h3 {
	font-size: 20px;
	padding: 16px;
	word-break: break-all;
}
.timeline-body-content p {
	padding: 16px;
	padding-block-start: 0;
	color: var(--gray-color);
	white-space: break-spaces;
	word-break: break-all;
}
</style>
