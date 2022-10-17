<template>
	<component
		:class="['icon', props.icon]"
		:is="iconMap[props.icon]"
	></component>
</template>

<script setup>
import iconShareAll from "../icons/shareAll.vue";
import iconQQ from "../icons/qq.vue";
import iconQQFill from "../icons/qq-fill.vue";
import iconWeibo from "../icons/weibo.vue";
import iconWeiboFill from "../icons/weibo-fill.vue";
import iconSearch from "../icons/search.vue";
import iconLogin from "../icons/login.vue";
import iconSettings from "../icons/settings.vue";
import iconRight from "../icons/right.vue";
import iconLeft from "../icons/left.vue";
import iconNewspaper from "../icons/newspaper.vue";
import iconSend from "../icons/send.vue";
import iconSend2 from "../icons/send2.vue";
import iconPencil from "../icons/pencil.vue";
import iconPencilMdi from "../icons/pencil-mdi.vue";
import iconNote from "../icons/note.vue";
import iconStar from "../icons/star.vue";
import iconEye from "../icons/eye.vue";
import iconComments from "../icons/comments.vue";
import iconGift from "../icons/gift.vue";
import iconMenu from "../icons/menu.vue";
import iconBullhorn from "../icons/bullhorn.vue";
import iconHome from "../icons/home.vue";
import iconHomeFill from "../icons/home-fill.vue";
import iconArchive from "../icons/archive.vue";
import iconCake from "../icons/cake.vue";
import iconBirthdayCake from "../icons/birthday-cake.vue";
import iconStickerText from "../icons/sticker-text.vue";
import iconTimer from "../icons/timer.vue";
import iconRefresh from "../icons/refresh.vue";
import iconAlignVerticalTop from "../icons/align-vertical-top.vue";
import iconThumbsUp from "../icons/thumbs-up.vue";
import iconCalendarCheck from "../icons/calendar-check.vue";
import iconCalendarAlt from "../icons/calendar-alt.vue";
import iconCalendarPlus from "../icons/calendar-plus.vue";
import iconCalendarPlusOutline from "../icons/calendar-plus-outline.vue";
import iconCalendarTimes from "../icons/calendar-times.vue";
import iconChartArea from "../icons/chart-area.vue";
import iconDollar from "../icons/dollar.vue";
import iconPicture from "../icons/picture.vue";
import iconUsers from "../icons/users.vue";
import iconUser from "../icons/user.vue";
import iconRandom from "../icons/random.vue";
import iconSteam from "../icons/steam.vue";
import iconInfo from "../icons/info.vue";
import iconGamepad from "../icons/gamepad.vue";
import iconIDCard from "../icons/id-card.vue";
import iconCardOutline from "../icons/card-outline.vue";
import iconCoffee from "../icons/coffee.vue";
import iconLink from "../icons/link.vue";
import iconTags from "../icons/tags.vue";
import iconExternalLinkSquareAlt from "../icons/external-link-square-alt.vue";
import iconAnchor from "../icons/anchor.vue";
import iconSitemap from "../icons/sitemap.vue";
import iconChild from "../icons/child.vue";
import iconAlertOutline from "../icons/alert-outline.vue";
import iconAlertCircleOutline from "../icons/alert-circle-outline.vue";
import iconHeartOutline from "../icons/heart-outline.vue";
import iconFiles from "../icons/files.vue";
import iconMicrophone from "../icons/microphone.vue";
import iconVenus from "../icons/venus.vue";
import iconMars from "../icons/mars.vue";
import iconGenderless from "../icons/genderless.vue";
import iconCircle from "../icons/circle.vue";
import iconFire from "../icons/fire.vue";
import iconYoutube from "../icons/youtube.vue";
import iconTwitter from "../icons/twitter.vue";
import iconFacebook from "../icons/facebook.vue";
import iconMoneyBillAlt from "../icons/money-bill-alt.vue";
import iconCheckCircle from "../icons/check-circle.vue";
import iconClose from "../icons/close.vue";
import iconChevronCircleDown from "../icons/chevron-circle-down.vue";
import iconDown from "../icons/down.vue";
import iconDatabaseExport from "../icons/database-export.vue";
import iconObjectGroup from "../icons/object-group.vue";
import iconSortAsc from "../icons/sort-asc.vue";
import iconSortDesc from "../icons/sort-desc.vue";

const props = defineProps({
	icon: {
		type: String,
		required: true
	},
	size: {
		type: String,
		default: "1em"
	}
});

const iconMap = {
	shareAll: iconShareAll,
	qq: iconQQ,
	QQ: iconQQ,
	qqFill: iconQQFill,
	weibo: iconWeibo,
	weiboFill: iconWeiboFill,
	search: iconSearch,
	login: iconLogin,
	settings: iconSettings,
	right: iconRight,
	left: iconLeft,
	newspaper: iconNewspaper,
	send: iconSend,
	send2: iconSend2,
	pencil: iconPencil,
	pencilMdi: iconPencilMdi,
	note: iconNote,
	star: iconStar,
	eye: iconEye,
	comments: iconComments,
	gift: iconGift,
	menu: iconMenu,
	bullhorn: iconBullhorn,
	home: iconHome,
	homeFill: iconHomeFill,
	archive: iconArchive,
	cake: iconCake,
	birthdayCake: iconBirthdayCake,
	stickerText: iconStickerText,
	timer: iconTimer,
	refresh: iconRefresh,
	alignVerticalTop: iconAlignVerticalTop,
	thumbsUp: iconThumbsUp,
	calendarCheck: iconCalendarCheck,
	calendarAlt: iconCalendarAlt,
	calendarPlus: iconCalendarPlus,
	calendarPlusOutline: iconCalendarPlusOutline,
	calendarTimes: iconCalendarTimes,
	chartArea: iconChartArea,
	dollar: iconDollar,
	picture: iconPicture,
	users: iconUsers,
	user: iconUser,
	random: iconRandom,
	steam: iconSteam,
	info: iconInfo,
	gamepad: iconGamepad,
	idCard: iconIDCard,
	cardOutline: iconCardOutline,
	coffee: iconCoffee,
	link: iconLink,
	tags: iconTags,
	externalLinkSquareAlt: iconExternalLinkSquareAlt,
	anchor: iconAnchor,
	sitemap: iconSitemap,
	child: iconChild,
	alertOutline: iconAlertOutline,
	alertCircleOutline: iconAlertCircleOutline,
	heartOutline: iconHeartOutline,
	files: iconFiles,
	microphone: iconMicrophone,
	venus: iconVenus,
	mars: iconMars,
	genderless: iconGenderless,
	circle: iconCircle,
	fire: iconFire,
	youtube: iconYoutube,
	twitter: iconTwitter,
	facebook: iconFacebook,
	moneyBillAlt: iconMoneyBillAlt,
	checkCircle: iconCheckCircle,
	close: iconClose,
	chevronCircleDown: iconChevronCircleDown,
	down: iconDown,
	databaseExport: iconDatabaseExport,
	objectGroup: iconObjectGroup,
	sortAsc: iconSortAsc,
	sortDesc: iconSortDesc
};
</script>

<style scoped>
.icon {
	width: v-bind("props.size");
	aspect-ratio: 1 / 1;
}
</style>
