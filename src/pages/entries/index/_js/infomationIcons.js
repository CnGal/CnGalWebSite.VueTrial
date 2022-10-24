const infomationIcons = (infomation) => {
	let key = infomation.displayName;
	const icons = {
		游戏平台: "gamepad",
		QQ群: "qqFill",
		发行时间: "calendarCheck",
		预计发行时间: "calendarPlus",
		发行方式: "bullhorn",
		官网: "coffee",
		微博: "weibo",
		爱发电: "externalLinkSquareAlt",
		TapTap: "externalLinkSquareAlt",
		steam: "externalLinkSquareAlt",
		bilibili: "externalLinkSquareAlt",
		Bilibili: "externalLinkSquareAlt",
		YouTube: "youtube",
		Twitter: "twitter",
		Facebook: "facebook",
		下载地址: "externalLinkSquareAlt",
		引擎: "anchor",
		原作: "files",
		声优: "microphone",
		性别男: "mars",
		性别女: "venus",
		性别: "genderless",
		身材数据: "child",
		"身材(主观)": "child",
		生日: "birthdayCake",
		发色: "circle",
		瞳色: "eye",
		服饰: "circle",
		性格: "circle",
		角色身份: "circle",
		血型: "circle",
		身高: "circle",
		兴趣: "circle",
		年龄: "fire",
		姓名: "cardOutline",
		别称: "idCard",
		"昵称（官方称呼）": "cardOutline"
	};

	if (key === "发行时间" && infomation.displayValue.includes("预计")) {
		key = "预计发行时间";
	} else if (key === "性别" && infomation.displayValue === "男") {
		key = "性别男";
	} else if (key === "性别" && infomation.displayValue === "女") {
		key = "性别女";
	}

	return icons[key] || "externalLinkSquareAlt";
};
const showInformationKeyText = (infomation) => {
	let names = infomation.displayName;
	let value = infomation.displayValue;
	if (names === "声优") {
		return "配音";
	} else if (names === "昵称（官方称呼）") {
		return "昵称";
	} else if (value.includes("bilibili.com")) {
		return "B站";
	} else if (value.includes("weibo.com")) {
		return "微博";
	} else {
		return names;
	}
};

export { infomationIcons, showInformationKeyText };
