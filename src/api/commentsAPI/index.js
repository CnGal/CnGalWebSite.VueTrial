import axios from "../axios";

async function getComments(type, id) {
	return await axios.get(`/api/comments/GetComments/${type}/${id}`);
}

export { getComments };
