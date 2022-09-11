import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import HomeIndex from "../pages/home/home.vue";
import EntriesHome from "../pages/entries/home.vue";
import EntriesIndex from "../pages/entries/index/entries.vue";
import ArticlesHome from "../pages/article/home.vue";
import ArticlesNews from "../pages/article/news.vue";

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
				path: "/article",
				name: "article",
				component: ArticlesHome
			},
			{
				path: "/articles/news",
				name: "articlesNews",
				component: ArticlesNews
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

export default router;
