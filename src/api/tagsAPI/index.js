import axios from "../axios";

async function getTag(id) {
	return await axios.get("api/tags/GetTag/" + id);
}

export { getTag };
