import axios from "../axios";

async function manageHome() {
	return await axios.get("/api/admin/ManageHome");
}

export { manageHome };
