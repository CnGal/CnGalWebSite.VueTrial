import axios from "../axios";
import qs from "qs";

const cache = new Map();

async function getHomeCarouselsView() {
	// 如果cache中有数据，且未过期，则直接返回
	if (cache.has("carousels")) {
		const { value, expire } = cache.get("carousels");
		if (expire > Date.now()) {
			return value;
		}
	}

	const data = await axios.get("/api/home/GetHomeCarouselsView");
	// 获取banner数据，将数据存入cache中，过期时间为5分钟
	cache.set("carousels", {
		value: data,
		expire: Date.now() + 1000 * 60 * 5
	});
	return data;
}

async function getHomeNewsView() {
	if (cache.has("news")) {
		const { value, expire } = cache.get("news");
		if (expire > Date.now()) {
			return value;
		}
	}

	const data = await axios.get("/api/home/GetHomeNewsView");
	// 获取最近动态数据，将数据存入cache中，过期时间为3分钟
	cache.set("news", {
		value: data,
		expire: Date.now() + 1000 * 60 * 3
	});
	return data;
}

async function getHomeRecentIssuelGameView() {
	if (cache.has("recentIssuelGame")) {
		const { value, expire } = cache.get("recentIssuelGame");
		if (expire > Date.now()) {
			return value;
		}
	}
	const data = await axios.get("/api/home/GetHomeRecentIssuelGameView");
	// 获取近期新作数据，将数据存入cache中，过期时间为3分钟
	cache.set("recentIssuelGame", {
		value: data,
		expire: Date.now() + 1000 * 60 * 3
	});
	return data;
}

async function getHomeNewestGameView() {
	if (cache.has("newestGame")) {
		const { value, expire } = cache.get("newestGame");
		if (expire > Date.now()) {
			return value;
		}
	}
	const data = await axios.get("/api/home/GetHomeNewestGameView");
	// 获取即将发售数据，将数据存入cache中，过期时间为3分钟
	cache.set("newestGame", {
		value: data,
		expire: Date.now() + 1000 * 60 * 3
	});
	return data;
}

async function getHomeArticlesView() {
	if (cache.has("articles")) {
		const { value, expire } = cache.get("articles");
		if (expire > Date.now()) {
			return value;
		}
	}
	const data = await axios.get("/api/home/GetHomeArticlesView");
	// 获取文章数据，将数据存入cache中，过期时间为3分钟
	cache.set("articles", {
		value: data,
		expire: Date.now() + 1000 * 60 * 3
	});
	return data;
}

async function getHomeRecentEditView() {
	if (cache.has("recentEdit")) {
		const { value, expire } = cache.get("recentEdit");
		if (expire > Date.now()) {
			return value;
		}
	}
	const data = await axios.get("/api/home/GetHomeRecentEditView");
	// 获取最近编辑数据，将数据存入cache中，过期时间为1分钟
	cache.set("recentEdit", {
		value: data,
		expire: Date.now() + 1000 * 60 * 1
	});
	return data;
}

async function getHomeNoticesView() {
	if (cache.has("notices")) {
		const { value, expire } = cache.get("notices");
		if (expire > Date.now()) {
			return value;
		}
	}
	const data = await axios.get("/api/home/GetHomeNoticesView");
	// 获取公告数据，将数据存入cache中，过期时间为5分钟
	cache.set("notices", {
		value: data,
		expire: Date.now() + 1000 * 60 * 5
	});
	return data;
}

async function getHomeFriendLinksView() {
	if (cache.has("friendLinks")) {
		const { value, expire } = cache.get("friendLinks");
		if (expire > Date.now()) {
			return value;
		}
	}
	const data = await axios.get("/api/home/GetHomeFriendLinksView");
	// 获取友情链接数据，将数据存入cache中，过期时间为5分钟
	cache.set("friendLinks", {
		value: data,
		expire: Date.now() + 1000 * 60 * 5
	});
	return data;
}

async function getHomeSearch(params) {
	// search 数据具有一定的时效性，不需要缓存
	return await axios.get("/api/home/Search", {
		params,
		paramsSerializer: (params) =>
			qs.stringify(params, { arrayFormat: "repeat" })
	});
}

async function getHomeVideosView() {
	if (cache.has("videos")) {
		const { value, expire } = cache.get("videos");
		if (expire > Date.now()) {
			return value;
		}
	}
	const data = await axios.get("/api/home/GetHomeVideosView");
	// 获取视频数据，将数据存入cache中，过期时间为3分钟
	cache.set("videos", {
		value: data,
		expire: Date.now() + 1000 * 60 * 3
	});
	return data;
}

async function getDocuments() {
	if (cache.has("documents")) {
		const { value, expire } = cache.get("documents");
		if (expire > Date.now()) {
			return value;
		}
	}
	const data = await axios.get("/api/home/GetDocuments");
	// 获取文档数据，将数据存入cache中，过期时间为5分钟
	cache.set("documents", {
		value: data,
		expire: Date.now() + 1000 * 60 * 5
	});
	return data;
}

export {
	getHomeCarouselsView,
	getHomeNewsView,
	getHomeRecentIssuelGameView,
	getHomeNewestGameView,
	getHomeArticlesView,
	getHomeRecentEditView,
	getHomeNoticesView,
	getHomeFriendLinksView,
	getHomeSearch,
	getHomeVideosView,
	getDocuments
};
