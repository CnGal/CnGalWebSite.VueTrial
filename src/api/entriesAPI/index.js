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

async function getGameRoles() {
	return await axios.get("/api/entries/GetGameRoles");
}

async function getEntryViewByID(id) {
	return await axios.get("/api/entries/GetEntryView/" + id);
}

export {
	getFreeGames,
	getAllDiscountSteamGame,
	getGameCGs,
	getGameRoles,
	getEntryViewByID
};
