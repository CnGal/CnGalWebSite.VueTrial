import axios from "../axios";

async function getVoteCards() {
	return await axios.get("/api/votes/GetVoteCards");
}

export { getVoteCards };
