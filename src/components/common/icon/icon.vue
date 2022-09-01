<template>
	<component class="icon" :is="iconMap[props.icon]"></component>
</template>

<script setup>
import iconShareAll from "../../base/icons/shareAll.vue";
import iconQQ from "../../base/icons/qq.vue";
import iconWeibo from "../../base/icons/weibo.vue";
import iconSearch from "../../base/icons/search.vue";
import iconLogin from "../../base/icons/login.vue";
import iconSettings from "../../base/icons/settings.vue";
import iconRight from "../../base/icons/right.vue";
import iconLeft from "../../base/icons/left.vue";
import iconNewspaper from "../../base/icons/newspaper.vue";
import iconSend from "../../base/icons/send.vue";
import iconSend2 from "../../base/icons/send2.vue";
import iconPencil from "../../base/icons/pencil.vue";
import iconNote from "../../base/icons/note.vue";
import iconStar from "../../base/icons/star.vue";
import iconEye from "../../base/icons/eye.vue";
import iconComments from "../../base/icons/comments.vue";
import iconGift from "../../base/icons/gift.vue";
import iconMenu from "../../base/icons/menu.vue";
import iconBullhorn from "../../base/icons/bullhorn.vue";
import iconHome from "../../base/icons/home.vue";
import iconArchive from "../../base/icons/archive.vue";
import iconCake from "../../base/icons/cake.vue";
import iconStickerText from "../../base/icons/sticker-text.vue";
import iconTimer from "../../base/icons/timer.vue";
import iconRefresh from "../../base/icons/refresh.vue";
import iconAlignVerticalTop from "../../base/icons/align-vertical-top.vue";
import iconThumbsUp from "../../base/icons/thumbs-up.vue";
import iconCalendarCheck from "../../base/icons/calendar-check.vue";
import iconChartArea from "../../base/icons/chart-area.vue";
import iconDollar from "../../base/icons/dollar.vue";

const props = defineProps({
	icon: {
		type: String,
		required: true
	},
	size: {
		type: String,
		default: "16px"
	}
});

const iconMap = {
	shareAll: iconShareAll,
	qq: iconQQ,
	QQ: iconQQ,
	weibo: iconWeibo,
	search: iconSearch,
	login: iconLogin,
	settings: iconSettings,
	right: iconRight,
	left: iconLeft,
	newspaper: iconNewspaper,
	send: iconSend,
	send2: iconSend2,
	pencil: iconPencil,
	note: iconNote,
	star: iconStar,
	eye: iconEye,
	comments: iconComments,
	gift: iconGift,
	menu: iconMenu,
	bullhorn: iconBullhorn,
	home: iconHome,
	archive: iconArchive,
	cake: iconCake,
	stickerText: iconStickerText,
	timer: iconTimer,
	refresh: iconRefresh,
	alignVerticalTop: iconAlignVerticalTop,
	thumbsUp: iconThumbsUp,
	calendarCheck: iconCalendarCheck,
	chartArea: iconChartArea,
	dollar: iconDollar
};
</script>

<style scoped>
.icon {
	width: v-bind("props.size");
	aspect-ratio: 1 / 1;
}
</style>
