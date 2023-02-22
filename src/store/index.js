import { defineStore } from "pinia";

export const useStore = defineStore("main", {
	state() {
		return {
			elID: 1,
			authToken:
				sessionStorage.getItem("authToken") ||
				localStorage.getItem("authToken") ||
				"",
			isMobile: !!navigator.userAgent.match(/(Android|iPhone|Mobile)/i),
			theme: JSON.parse(
				localStorage.getItem("theme") ||
					'{"color": "#f44336","isDark": false}'
			),
			webBG: null
		};
	},
	getters: {},
	actions: {
		changeTheme(theme) {
			this.theme.color = theme.color;
			// 当颜色为 #000000 时，设置夜间模式
			this.theme.isDark = theme.color === "#000000";
			localStorage.setItem("theme", JSON.stringify(this.theme));
		},
		setElID(el) {
			if (el instanceof HTMLElement && !el.hasAttribute("id")) {
				el.setAttribute("id", "gal-id-" + this.elID);
				this.elID++;
			}
			return el;
		}
	}
});
