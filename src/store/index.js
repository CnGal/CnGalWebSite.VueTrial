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
			isSmallPage: false,
			theme: (localStorage.getItem("theme") &&
				JSON.parse(localStorage.getItem("theme"))) || {
				color: "#f06292",
				isDark: false,
				isTransparent: false
			},

			isLogin: false,
			userInfo: null,
			webBG: {
				user: null,
				show: null
			}
		};
	},
	getters: {},
	actions: {
		changeTheme(theme) {
			if (theme.color) {
				this.theme.color = theme.color;
				// 当颜色为 #000000 时，设置夜间模式
				this.theme.isDark = theme.color === "#000000";
			}
			if (theme.isTransparent !== undefined) {
				this.theme.isTransparent = theme.isTransparent;
			}

			localStorage.setItem("theme", JSON.stringify(this.theme));
		},
		setElID(el) {
			if (el instanceof HTMLElement && !el.hasAttribute("id")) {
				el.setAttribute("id", "gal-id-" + this.elID);
				this.elID++;
			}
			return el;
		},
		logout() {
			this.isLogin = false;
			this.userInfo = null;
			this.webBG.user = null;
			this.webBG.show = null;
			this.authToken = "";
			sessionStorage.removeItem("authToken");
			localStorage.removeItem("authToken");
		}
	}
});
