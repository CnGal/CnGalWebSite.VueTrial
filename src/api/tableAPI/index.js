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

export { getTableView, getBasicInforList, getGroupInforList };
