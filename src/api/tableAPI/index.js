import axios from "../axios";

async function getTableView() {
	return await axios.get("api/tables/GetTableView");
}
async function getBasicInforList() {
	return await axios.get("api/tables/GetBasicInforList");
}

export { getTableView, getBasicInforList };
