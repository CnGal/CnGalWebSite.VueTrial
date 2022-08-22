<template>
	<section class="welcome">
		<div class="item">点击加入 CnGal QQ频道</div>
		<div class="item">欢迎加入CnGal玩家交流群：128446539</div>
		<div class="item">
			CnGal资料站编辑者交流与BUG反馈群：761794704 <wbr />欢迎加入
		</div>
	</section>
</template>

<script setup></script>

<style scoped>
.welcome {
	display: flex;
	background-color: #fff;
	overflow: hidden;
	padding: 0.5em;
}
.item {
	flex: 1 0 var(--main-width);
	text-align: center;
	animation: changeWelcome calc(5s * 3) steps(3) infinite;
}
@keyframes changeWelcome {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(calc(-3 * (var(--main-width) + 12px)));
	}
}

@media screen and (max-width: 768px) {
	.welcome {
		font-size: 14px;
	}
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
