import axios from "../axios";

async function getFreeGames() {
	return await axios.get("/api/steam/GetFreeGames");
}

async function getAllDiscountSteamGame() {
	return await axios.get("/api/steam/GetAllDiscountSteamGame");
}

async function getGameCGs() {
	return await axios.get("/api/entries/GetGameCGs");
}

export { getFreeGames, getAllDiscountSteamGame, getGameCGs };
