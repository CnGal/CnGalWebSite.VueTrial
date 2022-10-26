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
				replyComment: 2, // 回复评论
				commentEntries: 3, // 评论词条
				commentUser: 4, // 用户留言
				commentPeriphery: 5, // 评论周边
				commentVote: 6, // 评论投票
				commentLottery: 7 // 评论抽奖
			},
			entryType: {
				game: 0, // 游戏
				role: 1, // 角色
				productionGroup: 2, // 组织
				staff: 3 // Staff
			},
			articleType: {
				tought: 0, // 感想
				strategy: 1, // 攻略
				interview: 2, // 访谈
				news: 3, // 动态
				evaluation: 4, // 评测
				peripheral: 5, // 周边
				notice: 6, // 公告
				none: 7, // 杂谈
				fan: 8 // 二创
			}
		};
	},
	getters: {},
	actions: {
		changeTheme(theme) {
			this.theme.color = theme.color;
			// 当颜色为 #000000 时，设置夜间模式
			this.theme.isDark = !!(theme.color === "#000000");
			localStorage.setItem("theme", JSON.stringify(this.theme));
		}
	}
});
