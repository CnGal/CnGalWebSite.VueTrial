import axios from "../axios";

async function login(body) {
	return await axios.post("/api/account/Login", Object.assign({}, body));
}

async function getGeetestCode() {
	return await axios.get("/api/account/GetGeetestCode");
}

async function getIp() {
	return await axios.get("/api/account/GetIp");
}

async function refreshJWToken() {
	return await axios.get("/api/account/RefreshJWToken");
}

export { login, getGeetestCode, getIp, refreshJWToken };
