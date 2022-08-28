<template>
	<address class="welcome">
		<div class="item">
			<gal-icon
				icon="bullhorn"
				size="14px"
				class="welcome-icon"
			></gal-icon>
			<a
				href="https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&inviteCode=onAQQ&from=246610&biz=ka"
				>点击加入 CnGal QQ频道</a
			>
		</div>
		<div class="item">
			<gal-icon
				icon="bullhorn"
				size="14px"
				class="welcome-icon"
			></gal-icon>
			欢迎加入CnGal玩家交流群：
			<a href="https://jq.qq.com/?_wv=1027&k=mG6qNvyg">128446539</a>
		</div>
		<div class="item">
			<gal-icon
				icon="bullhorn"
				size="14px"
				class="welcome-icon"
			></gal-icon
			>CnGal资料站编辑者交流与BUG反馈群：
			<a href="https://jq.qq.com/?_wv=1027&k=JzuI1IkF">761794704</a>
			&nbsp;欢迎加入
		</div>
	</address>
</template>

<script setup></script>

<style scoped>
.welcome {
	display: flex;
	background-color: var(--card-bg-color);
	color: var(--block-color);
	overflow: hidden;
	box-sizing: border-box;
	box-shadow: var(--main-shadow);
	border-radius: var(--main-border-radius);
}
.item {
	flex: 1 0 var(--main-width);
	text-align: center;
	box-sizing: border-box;
	padding: 0.5em;
	animation: changeWelcome calc(5s * 3) steps(3) infinite;
}
@keyframes changeWelcome {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(calc(-3 * (var(--main-width))));
	}
}
.welcome-icon {
	margin-inline-end: 0.5em;
}
.item a {
	color: var(--block-color);
	text-decoration: underline;
}

@media screen and (max-width: 768px) {
	.welcome {
		font-size: 14px;
	}
}
</style>
