import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import HomeIndex from "../pages/home/home.vue";
import EntriesHome from "../pages/entries/home.vue";
import EntriesIndex from "../pages/entries/index/entries.vue";
import ArticlesHome from "../pages/article/home.vue";
import ArticlesIndex from "../pages/article/index/articles.vue";
import ArticlesNews from "../pages/article/news.vue";

import Search from "../pages/search/search.vue";

import Times from "../pages/times/times.vue";

import Login from "../pages/login/login.vue";

import Square from "../pages/square/square.vue";

import TagsIndex from "../pages/tags/index/tag.vue";

import VideoIndex from "../pages/videos/index/video.vue";

import LotteryHome from "../pages/lottery/home.vue";
import LotteryIndex from "../pages/lottery/index/index.vue";

import About from "../pages/about/about.vue";

import Data from "../pages/data/data.vue";

import NotFount from "../pages/404.vue";

import _test_home from "../pages/_test/_home.vue";
import _test_icon from "../pages/_test/_icon.vue";
import _test_button from "../pages/_test/_button.vue";
import _test_list from "../pages/_test/_list.vue";

const routes = [
	{
		path: "/index.html",
		redirect: "/"
	},
	{
		path: "/",
		name: "home",
		component: Home,
		children: [
			{
				path: "/",
				name: "front",
				component: HomeIndex
			},
			{
				path: "/entries",
				name: "entries",
				component: EntriesHome
			},
			{
				path: "/entries/index/:id",
				name: "entriesIndex",
				component: EntriesIndex
			},
			{
				path: "/articles",
				name: "articles",
				component: ArticlesHome
			},
			{
				path: "/articles/index/:id",
				name: "articlesIndex",
				component: ArticlesIndex
			},
			{
				path: "/articles/news",
				name: "articlesNews",
				component: ArticlesNews
			},
			{
				path: "/search",
				name: "search",
				component: Search
			},
			{
				path: "/account/login",
				name: "login",
				component: Login
			},
			{
				path: "/times",
				name: "times",
				component: Times
			},
			{
				path: "/square",
				name: "square",
				component: Square
			},
			{
				path: "/tags/index/:id",
				name: "tagsIndex",
				component: TagsIndex
			},
			{
				path: "/videos/index/:id",
				name: "videoIndex",
				component: VideoIndex
			},
			{
				path: "/about",
				name: "about",
				component: About
			},
			{
				path: "/structure",
				redirect: "/about#1-2"
			},
			{
				path: "/privacy",
				redirect: "/about#1-3"
			},
			{
				path: "/data",
				name: "data",
				component: Data
			},
			{
				path: "/lotteries",
				name: "lottery",
				component: LotteryHome
			},
			{
				path: "/lotteries/index/:id",
				name: "lotteryIndex",
				component: LotteryIndex
			},
			// 404页面，必须放在最后
			{
				path: "/:pathMatch(.*)*",
				name: "notFount",
				component: NotFount
			}
		]
	}
];

routes.push(
	...[
		{
			path: "/_test",
			name: "_test",
			component: _test_home,
			children: [
				{
					path: "/_test/_icon",
					name: "_test_icon",
					component: _test_icon
				},
				{
					path: "/_test/_button",
					name: "_test_button",
					component: _test_button
				},
				{
					path: "/_test/_list",
					name: "_test_list",
					component: _test_list
				}
			]
		}
	]
);

const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeEach((to, from, next) => {
	if (to.path === "/account/login" || to.name === "notFount") {
		localStorage.setItem("pageRedirect", from.path);
	}
	next();
});

export default router;
