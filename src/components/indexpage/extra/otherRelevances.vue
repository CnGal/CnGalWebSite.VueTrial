<template>
	<gal-card class="extra-card" width="full">
		<template v-slot:headerStart>
			<gal-icon class="icon" icon="link"></gal-icon>&nbsp;&nbsp;外部链接
		</template>

		<gal-alert class="alert" type="warning"
			>以下为外部链接，与本站没有任何从属关系，本站亦不对其安全性负责</gal-alert
		>
		<a
			v-for="item in props.otherRelevances.map((i) => changeInfodata(i))"
			:key="item.id"
			class="otherRelevances"
			:href="item.link"
			target="_blank"
		>
			<img
				v-if="item.imageStr"
				:src="item.imageStr"
				:alt="item.displayName"
			/>
			<div>
				<h5>{{ item.displayName }}</h5>
				<div v-if="item.displayValue" v-text="item.displayValue"></div>
			</div>
		</a>
	</gal-card>
</template>

<script setup>
const props = defineProps({
	otherRelevances: {
		type: [Object],
		required: true
	}
});

const changeInfodata = (item) => {
	const imgStr = {
		萌娘百科: "/images/otherRelevances/Moegirl.png",
		Bangumi: "/images/otherRelevances/Bangumi.png",
		百度百科: "/images/otherRelevances/BaiDuWiki.png",
		"2DFan": "/images/otherRelevances/2DFan.png",
		"App Store": "/images/otherRelevances/AppStore.png",
		"Google Play": "/images/otherRelevances/GooglePlay.png",
		方块游戏: "/images/otherRelevances/CraftGame.png",
		DLsite: "/images/otherRelevances/DLsite.png",
		Wiki: "/images/otherRelevances/Wiki.png",
		YM: "/images/otherRelevances/YMGal.png",
		TapTap: "/images/otherRelevances/TapTap.png",
		Wikidata: "/images/otherRelevances/Wikidata.png",
		bilibili: "/images/otherRelevances/bilibili.png"
	};
	let key = item.displayName;

	if (key.includes("维基百科")) {
		key = "Wiki";
	} else if (key.includes("月幕")) {
		key = "YM";
	} else if (key === "WikiData" || key === "维基数据") {
		key = "Wikidata";
	} else if (key.includes("bilibili")) {
		key = "bilibili";
	}
	item.imageStr = imgStr[key];

	if (key === "VNDB") {
		item.displayValue =
			"VNDB.org力争成为一个关于视觉小说的全面的信息数据库";
	}
	if (key.includes("bilibili")) {
		item.displayName = "前往 bilibili 观看";
	}

	return item;
};
</script>

<style scoped>
.otherRelevances {
	display: flex;
	align-items: center;
	column-gap: 1em;
	padding: 12px;
	margin-block-start: 12px;
	color: var(--main-font-color);
	background-color: var(--main-bg-color);
	box-shadow: var(--main-shadow);
}
.otherRelevances img {
	width: 50px;
	object-fit: cover;
}
.otherRelevances h5 {
	font-size: 20px;
}
.alert {
	margin-block-start: 12px;
}
</style>
