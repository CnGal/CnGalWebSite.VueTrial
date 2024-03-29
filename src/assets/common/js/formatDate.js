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

export const dateFormat = (date, options) => {
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

	const format = (options) => {
		if (typeof options === "string") {
			options = { format: options };
		} else if (typeof options === "undefined") {
			options = { format: "YMD" };
		}

		let { format, i18n, fill } = options;

		if (i18n === undefined && fill === undefined) {
			fill = true;
		} else if (i18n === "zh" && fill === undefined) {
			fill = false;
		}

		const m = fill ? padMonth : month;
		const d = fill ? padDay : day;
		const h = padHour;
		const min = padMinutes;
		const s = padSeconds;

		const formatList = {
			YMDhms() {
				if (i18n === "zh") {
					return `${year}年${m}月${d}日 ${h}:${min}:${s}`;
				} else {
					return `${year}-${m}-${d} ${h}:${min}:${s}`;
				}
			},
			YMD() {
				if (i18n === "zh") {
					return `${year}年${m}月${d}日`;
				} else {
					return `${year}-${m}-${d}`;
				}
			},
			YM() {
				if (i18n === "zh") {
					return `${year}年${m}月`;
				} else {
					return `${year}-${m}`;
				}
			},
			Y() {
				return `${year}`;
			},
			M() {
				return `${m}`;
			},
			YMDhm() {
				if (i18n === "zh") {
					return `${year}年${m}月${d}日 ${h}:${min}`;
				} else {
					return `${year}-${m}-${d} ${h}:${min}`;
				}
			}
		};

		return formatList[format]();
	};

	if (options) {
		return format(options);
	}

	return format;
};

export const getLastMonth = (year, month) => {
	let isString = false;
	if (month === undefined && year.includes("-")) {
		[year, month] = year.split("-");
		isString = true;
	}
	const lastMonth = month - 1;

	if (lastMonth === 0) {
		return isString
			? `${year - 1}-12`
			: {
					year: year - 1,
					month: 12
			  };
	} else {
		return isString
			? `${year}-${lastMonth}`
			: {
					year,
					month: lastMonth
			  };
	}
};

export const getNextMonth = (year, month) => {
	let isString = false;
	if (month === undefined && year.includes("-")) {
		[year, month] = year.split("-");
		isString = true;
	}
	year = Number(year);
	month = Number(month);
	const nextMonth = month + 1;
	if (nextMonth === 13) {
		return isString ? `${year + 1}-01` : { year: year + 1, month: 1 };
	} else {
		return isString ? `${year}-${nextMonth}` : { year, month: nextMonth };
	}
};

export const getLastTime = (time, range) => {
	let willFormatDate = new Date(time).getTime();

	if (range.day) {
		willFormatDate = willFormatDate - 1000 * 60 * 60 * 24 * range.day;
	}
	if (range.month) {
		willFormatDate =
			willFormatDate - 1000 * 60 * 60 * 24 * 30 * range.month;
	}
	if (range.year) {
		willFormatDate =
			willFormatDate - 1000 * 60 * 60 * 24 * 365 * range.year;
	}
	return willFormatDate;
};
