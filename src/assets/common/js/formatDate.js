export const formatDateWithHowLong = (date) => {
	const willFormatDate = new Date(date).getTime();
	const now = Date.now();
	const diff = now - willFormatDate;
	let s;

	switch (true) {
		case (s = diff / 1000) < 60:
			return `${Math.floor(s)}秒前`;
		case (s = diff / (1000 * 60)) < 60:
			return `${Math.floor(s)}分前`;
		case (s = diff / (1000 * 60 * 60)) < 24:
			return `${Math.floor(s)}小时前`;
		case (s = diff / (1000 * 60 * 60 * 24)) < 30:
			return `${Math.floor(s)}天前`;
		case (s = diff / (1000 * 60 * 60 * 24 * 30)) < 12:
			return `${Math.floor(s)}月前`;
		case (s = diff / (1000 * 60 * 60 * 24 * 30 * 12)) > 0:
			return `${Math.floor(s)}年前`;
		default:
			// 错误处理
			return -1;
	}
};

export const formatDateWithYMD = (date, i18n) => {
	const willFormatDate = new Date(date);

	const year = willFormatDate.getFullYear();
	const month = willFormatDate.getMonth() + 1;
	const day = willFormatDate.getDate();

	if (i18n === "zh") {
		return `${year}年${month}月${day}日`;
	} else {
		return (
			year +
			"-" +
			month.toString().padStart(2, "0") +
			"-" +
			day.toString().padStart(2, "0")
		);
	}
};
