import axios from "../axios";

async function getPerfectionLineChart(params) {
	return await axios.get("/api/perfections/GetPerfectionLineChart", {
		params: params
	});
}

export { getPerfectionLineChart };
