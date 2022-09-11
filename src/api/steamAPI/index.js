import axios from "../axios";

async function getSteamInforByID(id) {
	return await axios.get("api/steam/GetSteamInfor/" + id);
}

export { getSteamInforByID };
