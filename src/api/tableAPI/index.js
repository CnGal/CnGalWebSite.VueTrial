import axios from "../axios";

async function getTableView() {
	return await axios.get("api/tables/GetTableView");
}

async function getBasicInforList() {
	return await axios.get("api/tables/GetBasicInforList");
}

async function getGroupInforList() {
	return await axios.get("api/tables/GetGroupInforList");
}

async function getStaffInforList() {
	return await axios.get("api/tables/GetStaffInforList");
}

async function getMakerInforList() {
	return await axios.get("api/tables/GetMakerInforList");
}

async function getRoleInforList() {
	return await axios.get("api/tables/GetRoleInforList");
}

async function getSteamInforList() {
	return await axios.get("api/tables/GetSteamInforList");
}

async function getGameScoreList() {
	return await axios.get("api/tables/GetGameScoreList");
}

export {
	getTableView,
	getBasicInforList,
	getGroupInforList,
	getStaffInforList,
	getMakerInforList,
	getRoleInforList,
	getSteamInforList,
	getGameScoreList
};
