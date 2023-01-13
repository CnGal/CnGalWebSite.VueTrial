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

import _test_icon from "../pages/_test/_icon.vue";

const routes = [
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
			}
		]
	}
];

routes.push(
	...[
		{
			path: "/_test/_icon",
			name: "_test_icon",
			component: _test_icon
		}
	]
);

const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeEach((to, from, next) => {
	if (to.path === "/account/login") {
		localStorage.setItem("loginRedirect", from.path);
	}
	next();
});

export default router;
