import axios from "../axios";

async function getLotteryCards() {
	return await axios.get("/api/lotteries/GetLotteryCards");
}

async function getLotteryViewByID(id) {
	return await axios.get(`/api/lotteries/GetLotteryView/${id}`);
}

export { getLotteryCards, getLotteryViewByID };
