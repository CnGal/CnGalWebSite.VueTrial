import axios from "../axios";

async function getRandomUserScores() {
	return await axios.get("/api/playedgame/GetRandomUserScores");
}

export { getRandomUserScores };
