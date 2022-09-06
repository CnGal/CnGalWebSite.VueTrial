import axios from "../axios";

async function getRandomArticles() {
	return await axios.get("/api/articles/GetRandomArticles");
}

export { getRandomArticles };
