import { defineStore } from "pinia";

export const useStore = defineStore("main", {
	state() {
		return {
			isMobile: !!navigator.userAgent.match(/(Android|iPhone|Mobile)/i),
			theme: JSON.parse(
				localStorage.getItem("theme") ||
					'{"color": "#f44336","isDark": false}'
			),
			commentType: {
				none: 0, // 无
				commentArticle: 1, // 评论文章
				ReplyComment: 2, // 回复评论
				CommentEntries: 3, // 评论词条
				CommentUser: 4, // 用户留言
				CommentPeriphery: 5, // 评论周边
				CommentVote: 6, // 评论投票
				CommentLottery: 7, // 评论抽奖
			},
		};
	},
	getters: {},
	actions: {
		changeTheme(theme) {
			this.theme.color = theme.color;
			// 当颜色为 #000000 时，设置夜间模式
			this.theme.isDark = !!(theme.color === "#000000");
			localStorage.setItem("theme", JSON.stringify(this.theme));
		},
	},
});
