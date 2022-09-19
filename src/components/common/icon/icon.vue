<template>
	<component class="icon" :is="iconMap[props.icon]"></component>
</template>

<script setup>
import iconShareAll from "../../base/icons/shareAll.vue";
import iconQQ from "../../base/icons/qq.vue";
import iconQQFill from "../../base/icons/qq-fill.vue";
import iconWeibo from "../../base/icons/weibo.vue";
import iconWeiboFill from "../../base/icons/weibo-fill.vue";
import iconSearch from "../../base/icons/search.vue";
import iconLogin from "../../base/icons/login.vue";
import iconSettings from "../../base/icons/settings.vue";
import iconRight from "../../base/icons/right.vue";
import iconLeft from "../../base/icons/left.vue";
import iconNewspaper from "../../base/icons/newspaper.vue";
import iconSend from "../../base/icons/send.vue";
import iconSend2 from "../../base/icons/send2.vue";
import iconPencil from "../../base/icons/pencil.vue";
import iconPencilMdi from "../../base/icons/pencil-mdi.vue";
import iconNote from "../../base/icons/note.vue";
import iconStar from "../../base/icons/star.vue";
import iconEye from "../../base/icons/eye.vue";
import iconComments from "../../base/icons/comments.vue";
import iconGift from "../../base/icons/gift.vue";
import iconMenu from "../../base/icons/menu.vue";
import iconBullhorn from "../../base/icons/bullhorn.vue";
import iconHome from "../../base/icons/home.vue";
import iconHomeFill from "../../base/icons/home-fill.vue";
import iconArchive from "../../base/icons/archive.vue";
import iconCake from "../../base/icons/cake.vue";
import iconBirthdayCake from "../../base/icons/birthday-cake.vue";
import iconStickerText from "../../base/icons/sticker-text.vue";
import iconTimer from "../../base/icons/timer.vue";
import iconRefresh from "../../base/icons/refresh.vue";
import iconAlignVerticalTop from "../../base/icons/align-vertical-top.vue";
import iconThumbsUp from "../../base/icons/thumbs-up.vue";
import iconCalendarCheck from "../../base/icons/calendar-check.vue";
import iconCalendarAlt from "../../base/icons/calendar-alt.vue";
import iconCalendarPlus from "../../base/icons/calendar-plus.vue";
import iconCalendarPlusOutline from "../../base/icons/calendar-plus-outline.vue";
import iconCalendarTimes from "../../base/icons/calendar-times.vue";
import iconChartArea from "../../base/icons/chart-area.vue";
import iconDollar from "../../base/icons/dollar.vue";
import iconPicture from "../../base/icons/picture.vue";
import iconUsers from "../../base/icons/users.vue";
import iconUser from "../../base/icons/user.vue";
import iconRandom from "../../base/icons/random.vue";
import iconSteam from "../../base/icons/steam.vue";
import iconInfo from "../../base/icons/info.vue";
import iconGamepad from "../../base/icons/gamepad.vue";
import iconIDCard from "../../base/icons/id-card.vue";
import iconCardOutline from "../../base/icons/card-outline.vue";
import iconCoffee from "../../base/icons/coffee.vue";
import iconLink from "../../base/icons/link.vue";
import iconTags from "../../base/icons/tags.vue";
import iconExternalLinkSquareAlt from "../../base/icons/external-link-square-alt.vue";
import iconAnchor from "../../base/icons/anchor.vue";
import iconSitemap from "../../base/icons/sitemap.vue";
import iconChild from "../../base/icons/child.vue";
import iconAlertOutline from "../../base/icons/alert-outline.vue";
import iconHeartOutline from "../../base/icons/heart-outline.vue";
import iconFiles from "../../base/icons/files.vue";
import iconMicrophone from "../../base/icons/microphone.vue";
import iconVenus from "../../base/icons/venus.vue";
import iconMars from "../../base/icons/mars.vue";
import iconGenderless from "../../base/icons/genderless.vue";
import iconCircle from "../../base/icons/circle.vue";
import iconFire from "../../base/icons/fire.vue";
import iconYoutube from "../../base/icons/youtube.vue";
import iconTwitter from "../../base/icons/twitter.vue";
import iconFacebook from "../../base/icons/facebook.vue";
import iconMoneyBillAlt from "../../base/icons/money-bill-alt.vue";
import iconCheckCircle from "../../base/icons/check-circle.vue";
import iconClose from "../../base/icons/close.vue";

const props = defineProps({
	icon: {
		type: String,
		required: true,
	},
	size: {
		type: String,
		default: "16px",
	},
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
};
</script>

<style scoped>
.icon {
	width: v-bind("props.size");
	aspect-ratio: 1 / 1;
}
</style>
