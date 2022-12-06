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

export const formatDate = (date, range, i18n) => {
	// todo: 优化
	const willFormatDate = new Date(date);

	const year = willFormatDate.getFullYear();
	const month = willFormatDate.getMonth() + 1;
	const day = willFormatDate.getDate();
	const hour = willFormatDate.getHours();
	const minutes = willFormatDate.getMinutes();
	const seconds = willFormatDate.getSeconds();

	const padMonth = month.toString().padStart(2, "0");
	const padDay = day.toString().padStart(2, "0");
	const padHour = hour.toString().padStart(2, "0");
	const padMinutes = minutes.toString().padStart(2, "0");
	const padSeconds = seconds.toString().padStart(2, "0");

	if (range === "YMD") {
		if (i18n === "zh") {
			return `${year}年${month}月${day}日`;
		} else {
			return `${year}-${padMonth}-${padDay}`;
		}
	} else if (range === "YMDhm") {
		if (i18n === "zh") {
			return `${year}年${month}月${day}日 ${padHour}:${padMinutes}`;
		} else {
			return `${year}-${padMonth}-${padDay} ${padHour}:${padMinutes}`;
		}
	} else {
		return `${year}-${padMonth}-${padDay} ${padHour}:${padMinutes}:${padSeconds}`;
	}
};

export const dateFormat = (date) => {
	const willFormatDate = new Date(date);

	const year = willFormatDate.getFullYear();
	const month = willFormatDate.getMonth() + 1;
	const day = willFormatDate.getDate();
	const hour = willFormatDate.getHours();
	const minutes = willFormatDate.getMinutes();
	const seconds = willFormatDate.getSeconds();

	const padMonth = month.toString().padStart(2, "0");
	const padDay = day.toString().padStart(2, "0");
	const padHour = hour.toString().padStart(2, "0");
	const padMinutes = minutes.toString().padStart(2, "0");
	const padSeconds = seconds.toString().padStart(2, "0");

	return (options) => {
		if (typeof options === "string") {
			options = { format: options };
		} else if (typeof options === "undefined") {
			options = { format: "YMD" };
		}

		const { format, i18n, fill } = options;

		const formatList = {
			YMD() {
				const m = fill ? padMonth : month;
				const d = fill ? padDay : day;

				if (i18n === "zh") {
					return `${year}年${m}月${d}日`;
				} else {
					return `${year}-${m}-${d}`;
				}
			},
			Y() {
				return `${year}`;
			},
			M() {
				const m = fill ? padMonth : month;
				return `${m}`;
			}
		};

		return formatList[format]();
	};
};
