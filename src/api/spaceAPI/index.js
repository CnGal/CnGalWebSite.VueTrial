import axios from "../axios";

async function getUserView() {
	try {
		return await axios.get("/api/space/GetUserView");
	} catch (error) {
		return error;
	}
}

export { getUserView };
