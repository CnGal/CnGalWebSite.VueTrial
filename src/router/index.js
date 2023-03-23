import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/index.html",
		redirect: "/"
	},
	{
		path: "/",
		name: "home",
		component: () => import("../pages/home.vue"),
		children: [
			{
				path: "/",
				name: "front",
				component: () => import("../pages/home/home.vue")
			},
			{
				path: "/entries",
				name: "entries",
				component: () => import("../pages/entries/home.vue")
			},
			{
				path: "/entries/index/:id",
				name: "entriesIndex",
				component: () => import("../pages/entries/index/entries.vue")
			},
			{
				path: "/articles",
				name: "articles",
				component: () => import("../pages/article/home.vue")
			},
			{
				path: "/articles/index/:id",
				name: "articlesIndex",
				component: () => import("../pages/article/index/articles.vue")
			},
			{
				path: "/articles/news",
				name: "articlesNews",
				component: () => import("../pages/article/news.vue")
			},
			{
				path: "/search",
				name: "search",
				component: () => import("../pages/search/search.vue")
			},
			{
				path: "/account/login",
				name: "login",
				component: () => import("../pages/login/login.vue")
			},
			{
				path: "/times",
				name: "times",
				component: () => import("../pages/times/times.vue")
			},
			{
				path: "/square",
				name: "square",
				component: () => import("../pages/square/square.vue")
			},
			{
				path: "/tags/index/:id",
				name: "tagsIndex",
				component: () => import("../pages/tags/index/tag.vue")
			},
			{
				path: "/videos/index/:id",
				name: "videoIndex",
				component: () => import("../pages/videos/index/video.vue")
			},
			{
				path: "/about",
				name: "about",
				component: () => import("../pages/about/about.vue")
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
				component: () => import("../pages/data/data.vue")
			},
			{
				path: "/lotteries",
				name: "lottery",
				component: () => import("../pages/lottery/home.vue")
			},
			{
				path: "/lotteries/index/:id",
				name: "lotteryIndex",
				component: () => import("../pages/lottery/index/index.vue")
			},
			// 404页面，必须放在最后
			{
				path: "/:pathMatch(.*)*",
				name: "notFount",
				component: () => import("../pages/404.vue")
			}
		]
	}
];

routes.push(
	...[
		{
			path: "/_test",
			name: "_test",
			component: () => import("../pages/_test/_home.vue"),
			children: [
				{
					path: "/_test/_icon",
					name: "_test_icon",
					component: () => import("../pages/_test/_icon.vue")
				},
				{
					path: "/_test/_button",
					name: "_test_button",
					component: () => import("../pages/_test/_button.vue")
				},
				{
					path: "/_test/_list",
					name: "_test_list",
					component: () => import("../pages/_test/_list.vue")
				},
				{
					path: "/_test/_linkbutton",
					name: "_test_linkbutton",
					component: () => import("../pages/_test/_linkbutton.vue")
				},
				{
					path: "/_test/_iconbutton",
					name: "_test_iconbutton",
					component: () => import("../pages/_test/_iconbutton.vue")
				},
				{
					path: "/_test/_alert",
					name: "_test_alert",
					component: () => import("../pages/_test/_alert.vue")
				},
				{
					path: "/_test/_card",
					name: "_test_card",
					component: () => import("../pages/_test/_card.vue")
				},
				{
					path: "/_test/_markdown",
					name: "_test_markdown",
					component: () => import("../pages/_test/_markdown.vue")
				},
				{
					path: "/_test/_search",
					name: "_test_search",
					component: () => import("../pages/_test/_search.vue")
				},
				{
					path: "/_test/_dialog",
					name: "_test_dialog",
					component: () => import("../pages/_test/_dialog.vue")
				},
				{
					path: "/_test/_tag",
					name: "_test_tag",
					component: () => import("../pages/_test/_tag.vue")
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
