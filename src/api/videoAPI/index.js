import axios from "../axios";

async function getVideoByID(id) {
	return await axios.get("api/videos/GetView/" + id);
}

export { getVideoByID };
