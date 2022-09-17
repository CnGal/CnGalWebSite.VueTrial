<template>
	<div v-for="item in iconList" class="icon">
		<gal-icon :icon="item" size="24px"></gal-icon> {{ item }}
	</div>
</template>

<script setup>
const iconList = [
	"shareAll",
	"qq",
	"qqFill",
	"weibo",
	"weiboFill",
	"search",
	"login",
	"settings",
	"right",
	"left",
	"newspaper",
	"send",
	"send2",
	"pencil",
	"pencilMdi",
	"note",
	"star",
	"eye",
	"comments",
	"gift",
	"menu",
	"bullhorn",
	"home",
	"homeFill",
	"archive",
	"cake",
	"stickerText",
	"timer",
	"refresh",
	"alignVerticalTop",
	"thumbsUp",
	"calendarCheck",
	"calendarAlt",
	"calendarPlus",
	"chartArea",
	"dollar",
	"picture",
	"users",
	"user",
	"random",
	"steam",
	"info",
	"gamepad",
	"idCard",
	"coffee",
	"link",
	"externalLinkSquareAlt",
	"anchor",
	"sitemap",
	"child",
	"alertOutline",
	"heartOutline"
];
</script>

<style scoped>
.icon {
	margin-inline-start: 50px;
	font-size: 24px;
}
</style>
