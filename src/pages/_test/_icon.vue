<template>
	<div v-for="item in iconList" class="icon">
		<gal-icon :icon="item" size="24px"></gal-icon> {{ item }}
	</div>
</template>

<script setup>
const iconList = [
	"shareAll",
	"qq",
	"weibo",
	"search",
	"login",
	"settings",
	"right",
	"left",
	"newspaper",
	"send",
	"send2",
	"pencil",
	"note",
	"star",
	"eye",
	"comments",
	"gift",
	"menu",
	"bullhorn",
	"home",
	"archive",
	"cake",
	"stickerText",
	"timer",
	"refresh",
	"alignVerticalTop",
	"thumbsUp",
	"calendarCheck",
	"chartArea",
	"dollar",
	"picture"
];
</script>

<style scoped>
.icon {
	margin-inline-start: 50px;
	font-size: 24px;
}
</style>
