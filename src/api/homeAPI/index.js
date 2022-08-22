import axios from "../axios";

async function getHomeCarouselsView() {
	return await axios.get("/api/home/GetHomeCarouselsView");
}

async function getHomeNewsView() {
	return await axios.get("/api/home/GetHomeNewsView");
}

async function getHomeRecentIssuelGameView() {
	return await axios.get("/api/home/GetHomeRecentIssuelGameView");
}

async function getHomeNewestGameView() {
	return await axios.get("/api/home/GetHomeNewestGameView");
}

async function getHomeArticlesView() {
	return await axios.get("/api/home/GetHomeArticlesView");
}

async function getHomeRecentEditView() {
	return await axios.get("/api/home/GetHomeRecentEditView");
}

async function getHomeNoticesView() {
	return await axios.get("/api/home/GetHomeNoticesView");
}

async function getHomeFriendLinksView() {
	return await axios.get("/api/home/GetHomeFriendLinksView");
}

export {
	getHomeCarouselsView,
	getHomeNewsView,
	getHomeRecentIssuelGameView,
	getHomeNewestGameView,
	getHomeArticlesView,
	getHomeRecentEditView,
	getHomeNoticesView,
	getHomeFriendLinksView
};
