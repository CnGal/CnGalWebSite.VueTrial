<template>
	<component class="icon" :is="getComponent(props.icon)"></component>
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

const getComponent = (name) => {
	switch (name) {
		case "shareAll":
			return iconShareAll;
		case "qq":
		case "QQ":
			return iconQQ;
		case "weibo":
			return iconWeibo;
		case "search":
			return iconSearch;
		case "login":
			return iconLogin;
		case "settings":
			return iconSettings;
		case "right":
			return iconRight;
		case "left":
			return iconLeft;
		case "newspaper":
			return iconNewspaper;
		case "send":
			return iconSend;
		case "send2":
			return iconSend2;
		case "pencil":
			return iconPencil;
		case "note":
			return iconNote;
		case "star":
			return iconStar;
		case "eye":
			return iconEye;
		case "comments":
			return iconComments;
		case "gift":
			return iconGift;
		case "menu":
			return iconMenu;
		case "bullhorn":
			return iconBullhorn;
	}
};
</script>

<style scoped>
.icon {
	width: v-bind("props.size");
	aspect-ratio: 1 / 1;
	margin-inline-end: 0.5em;
	vertical-align: middle;
}
</style>
