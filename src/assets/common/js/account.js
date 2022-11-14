import { getIp } from "@/api/accountAPI/login.js";
import { getRandomUUID } from "./random.js";

const initGeetestBindCAPTCHA = (geetestCode) => {
	return (doCaptch) => {
		initGeetest(
			{
				// 以下配置参数来自服务端 SDK
				gt: geetestCode.gt,
				challenge: geetestCode.challenge,
				offline: !geetestCode.success,
				new_captcha: true,
				product: "bind"
			},
			doCaptch
		);
	};
};

const getIdentification = async () => {
	const { data: ip } = await getIp();
	const identification = {
		ip: ip,
		cookie: getRandomUUID()
	};
	localStorage.setItem(
		"DeviceIdentification",
		JSON.stringify(identification)
	);
	return identification;
};

export { initGeetestBindCAPTCHA, getIdentification };
