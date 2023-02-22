import axios from "../axios";

async function getUserView() {
	return await axios.get("/api/space/GetUserView");
}

export { getUserView };
