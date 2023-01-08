<template>
	<div class="tip">
		<img
			src="images/default/UserMessagesNotFound.png"
			class="tip-img"
			alt="貌似这个网站不支持你的浏览器哦"
		/>
		<h4 class="tip-title">貌似这个网站不支持你的浏览器哦</h4>
		<p class="tip-info">
			你可以选择安装下方任一浏览器，或其他支持最新Web标准的浏览器，再重新进入
			<a title="进入CnGal资料站" href="https://www.cngal.org"
				>www.cngal.org</a
			>
			<br />如果使用的是QQ浏览器，请右击网页，选择极速模式，并重新打开标签页
			<br />有任何疑问可以加群
			<a
				title="点击链接加入群聊【CnGal编辑者交流与Bug反馈群】"
				href="https://jq.qq.com/?_wv=1027&k=oNCWoamp"
				target="_blank"
				>761794704</a
			>
			进行反馈 <br />感谢你访问 CnGal资料站
		</p>
	</div>
	<div>
		<a
			class="browser-link"
			title="Google Chrome"
			href="https://www.google.cn/chrome/"
		>
			Google Chrome
		</a>
		<a
			class="browser-link"
			title="Mozilla Firefox"
			href="https://www.mozilla.org/zh-CN/firefox/"
		>
			Mozilla Firefox
		</a>

		<a
			class="browser-link"
			title="Safari"
			href="https://www.apple.com/safari/"
		>
			Safari
		</a>
		<a class="browser-link" title="Opera" href="https://www.opera.com/">
			Opera
		</a>
		<a
			class="browser-link"
			title="Microsoft Edge"
			href="https://www.microsoft.com/zh-cn/edge"
		>
			Microsoft Edge
		</a>
	</div>
</template>

<script setup></script>

<style scoped>
.tip {
	width: 100%;
	max-width: 700px;
	height: 650px;
	margin: 0 auto;
	text-align: center;
}
.tip-img {
	width: 70%;
}
.tip-title {
	font-weight: 600;
}
.tip-info {
	text-align: start;
}
.browser-link {
	display: block;
	text-align: center;
	color: #f06292;
	transition: all 0.6s ease;
}

.browser-link:hover {
	color: #d81b60;
	cursor: pointer;
}
a {
	color: #f06292;
	transition: all 0.6s ease;
}
a:hover {
	color: #d81b60;
}
</style>
