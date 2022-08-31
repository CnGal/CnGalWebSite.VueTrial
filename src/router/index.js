import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import HomeIndex from "../pages/home/home.vue";
import EntriesHome from "../pages/entries/home.vue";
import ArticlesNews from "../pages/article/news.vue";

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
				path: "/articles/news",
				name: "articlesNews",
				component: ArticlesNews
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
