import { defineStore } from "pinia";

export const useStore = defineStore("main", {
	state() {
		return {
			isMobile: !!navigator.userAgent.match(/(Android|iPhone|Mobile)/i),
			// localStorage 中存在就取 localStorage, 如果没有就给一个默认值
			theme: JSON.parse(
				localStorage.getItem("theme") ||
					'{"color": "#f44336","isDark": false}'
			)
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
