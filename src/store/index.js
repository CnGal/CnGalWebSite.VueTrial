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
			localStorage.setItem("theme", JSON.stringify(this.theme));
		}
	}
});
