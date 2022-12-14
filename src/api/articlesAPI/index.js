import axios from "../axios";

async function getRandomArticles() {
	return await axios.get("/api/articles/GetRandomArticles");
}

async function getWeeklyNewsOverview() {
	return await axios.get("/api/news/GetWeeklyNewsOverview");
}

async function getGameEvaluations() {
	return await axios.get("/api/articles/GetGameEvaluations");
}

async function getArticleView(id) {
	return await axios.get("/api/articles/GetArticleView/" + id);
}

async function getNewSummary(time) {
	return await axios.get("/api/articles/GetNewSummary/" + time);
}

export {
	getRandomArticles,
	getWeeklyNewsOverview,
	getGameEvaluations,
	getArticleView,
	getNewSummary
};
