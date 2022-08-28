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

export { nonRepeatRandomList, getRandom };
