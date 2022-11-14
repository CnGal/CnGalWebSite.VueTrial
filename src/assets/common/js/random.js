const getRandomUUID = () => {
	return crypto.randomUUID();
};

const getRandom = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const nonRepeatRandomList = (min, max, size, initList) => {
	let set = new Set(initList);
	if (max - min < size) {
		return set;
	}
	while (set.size < size) {
		set.add(getRandom(min, max));
	}
	return set;
};

const getNonRepeatRandomList = (data, wantLength) => {
	if (data.length <= wantLength) {
		return data;
	} else {
		let list = [];
		// 在列表中随机选取 wantLength 项
		const set = nonRepeatRandomList(0, data.length - 1, wantLength);
		set.forEach((i) => {
			list.push(data[i]);
		});
		return list;
	}
};

export {
	nonRepeatRandomList,
	getRandom,
	getNonRepeatRandomList,
	getRandomUUID
};
