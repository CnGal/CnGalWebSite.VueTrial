import axios from "../axios";

async function getFreeGames() {
	return await axios.get("/api/steam/GetFreeGames");
}

async function getAllDiscountSteamGame() {
	return await axios.get("/api/steam/GetAllDiscountSteamGame");
}

export { getFreeGames, getAllDiscountSteamGame };
