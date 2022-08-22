import { defineStore } from "pinia";

export const useStore = defineStore("main", {
	state() {
		return {
			isMobile: !!navigator.userAgent.match(/(Android|iPhone|Mobile)/i)
		};
	},
	getters: {},
	actions: {}
});
