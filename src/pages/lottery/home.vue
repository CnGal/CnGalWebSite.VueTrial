<template>
	<div class="wrap" v-if="lotteryData?.length">
		<gal-card class="card first">
			<template v-slot:headerStart>
				<gal-icon class="icon" icon="homeFill"></gal-icon
				>&nbsp;&nbsp;抽奖板块
			</template>
			<p>
				这里是正在测试中的抽奖板块，如果有什么好的设计方案欢迎加群761794704反馈
			</p>
		</gal-card>
		<gal-card class="card" v-for="item in lotteryData" :key="item.id">
			<gal-link :to="'/lotteries/index/' + item.id">
				<img class="img" :src="item.mainPicture" alt="抽奖主题图片" />
				<p class="tag">抽奖</p>
				<h3 class="title" v-text="item.name"></h3>
				<p class="content" v-text="item.briefIntroduction"></p>
				<div class="state">
					{{
						new Date(item.beginTime).getTime() > Date.now()
							? "未开始"
							: new Date(item.endTime).getTime() >= Date.now()
							? "正在进行"
							: "已结束"
					}}
				</div>
				<div class="footer">
					<span
						>{{ dateFormat(item.beginTime, "YMDhm") }}
						-
						{{ dateFormat(item.endTime, "YMDhm") }}</span
					>
					<span>{{ item.count }}人参与</span>
				</div>
			</gal-link>
		</gal-card>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { dateFormat } from "@/assets/common/js/formatDate.js";
import { getLotteryCards } from "@/api/lotteryAPI/index.js";

const lotteryData = ref([]);
(async () => {
	const { data } = await getLotteryCards();
	lotteryData.value = data;
})();
</script>

<style scoped>
.first {
	background-color: var(--main-bg-color);
}
.wrap {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	column-gap: 16px;
	row-gap: 16px;
}
.card {
	flex: 1 1 30%;
	font-size: 14px;
}

.img {
	width: 100%;
	object-fit: cover;
}
.tag {
	margin-block-start: 12px;
	background-color: var(--main-color);
	color: var(--white-color);
	border-radius: 4px;
}
.title {
	font-size: 20px;
	color: var(--main-font-color);
}
.content {
	color: var(--main-font-color);
	margin-block-end: 12px;
}
.state {
	color: var(--gray-color);
}
.footer {
	display: flex;
	justify-content: space-between;
	color: var(--gray-color);
}

@media screen and (max-width: 1200px) {
	.card {
		flex: 1 1 40%;
	}
}
@media screen and (max-width: 768px) {
	.card {
		flex: 1 1 100%;
	}
}
</style>
