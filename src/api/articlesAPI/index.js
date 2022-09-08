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

export { getRandomArticles, getWeeklyNewsOverview, getGameEvaluations };
