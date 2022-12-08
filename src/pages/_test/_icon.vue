<template>
	<div class="icon-box">
		<div v-for="item in iconList" class="icon">
			<gal-icon :icon="item" size="24px"></gal-icon> {{ item }}
		</div>
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
	"eyeOff",
	"comments",
	"gift",
	"menu",
	"bullhorn",
	"home",
	"homeFill",
	"archive",
	"cake",
	"birthdayCake",
	"stickerText",
	"timer",
	"refresh",
	"alignVerticalTop",
	"thumbsUp",
	"calendarCheck",
	"calendarAlt",
	"calendarPlus",
	"calendarPlusOutline",
	"calendarTimes",
	"calendarText",
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
	"cardOutline",
	"coffee",
	"link",
	"externalLinkSquareAlt",
	"anchor",
	"sitemap",
	"child",
	"alertOutline",
	"alertCircleOutline",
	"heartOutline",
	"files",
	"microphone",
	"venus",
	"mars",
	"genderless",
	"fire",
	"youtube",
	"twitter",
	"facebook",
	"moneyBillAlt",
	"checkCircle",
	"close",
	"chevronCircleDown",
	"down",
	"databaseExport",
	"objectGroup",
	"sortAsc",
	"sortDesc",
	"tags",
	"clockTimeFour",
	"allInclusive",
	"arrowLeftThick",
	"arrowRightThick",
	"video"
];
</script>

<style scoped>
.icon-box {
	display: flex;
	flex-wrap: wrap;
	margin-inline-start: 10px;
}
.icon {
	font-size: 24px;
	flex: 0 0 400px;
}
</style>
