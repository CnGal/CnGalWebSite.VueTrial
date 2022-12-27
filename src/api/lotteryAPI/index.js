import axios from "../axios";

async function getLotteryCards() {
	return await axios.get("/api/lotteries/GetLotteryCards");
}

export { getLotteryCards };
