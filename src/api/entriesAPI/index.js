import axios from "../axios";

async function getFreeGames() {
	return await axios.get("/api/steam/GetFreeGames");
}

export { getFreeGames };
