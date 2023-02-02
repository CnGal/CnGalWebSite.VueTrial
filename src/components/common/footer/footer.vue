<template>
	<footer class="footer">
		<div class="contact">
			<div class="footer-logo">
				<img
					src="/images/footer_logo.png"
					alt="cngal.org 中文Galgame资料站"
				/>
				<div>愿每一个CnGal创作者的作品都能不被忘记</div>
			</div>
			<address class="icon-wrap">
				<!-- QQ的图标以 1/16 处为边界制作 path 路径。
				为保证同一大小 QQ的 size 需为 40*(16/14) ~= 45.72 -->
				<a
					href="https://jq.qq.com/?_wv=1027&k=mG6qNvyg"
					target="_blank"
					v-gal-tooltip="'QQ'"
				>
					<gal-icon
						class="icon"
						:icon="'QQ'"
						:size="'45.72px'"
					></gal-icon>
				</a>
				<a
					href="https://weibo.com/cngalorg"
					target="_blank"
					v-gal-tooltip="'微博'"
				>
					<gal-icon
						class="icon"
						:icon="'weiboFill'"
						:size="'40px'"
					></gal-icon>
				</a>
			</address>
		</div>
		<div class="about">
			<gal-link class="link" to="/about">关于我们</gal-link>
			<gal-link class="link" to="/structure">组织架构</gal-link>
			<gal-link class="link" to="/privacy">隐私协议</gal-link>
			<gal-link class="link" to="/data">数据汇总</gal-link>
		</div>
		<div class="licenses">
			<a
				class="link"
				href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
			>
				<img src="/images/CC4.png" alt="cc4协议图片" />
			</a>

			本站内容采用
			<a
				class="link"
				href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
				target="_blank"
				>知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a
			>
			进行许可
		</div>
		<div class="copyright">
			© 2023 - CnGal资料站
			<a class="link" target="_blank" href="http://beian.miit.gov.cn">
				粤ICP备15055899号
			</a>
			<a
				class="link"
				target="_blank"
				href="https://icp.gov.moe/?keyword=20225899"
			>
				萌ICP备20225899号
			</a>
			不良信息举报邮箱：help@cngal.org
		</div>
	</footer>
</template>

<script setup></script>

<style scoped>
.footer {
	--footer-text-color: var(--main-font-color);
	--footer-link-color: var(--gray-color);
	--footer-link-color-hover: var(--main-color);
}
.theme-dark .footer {
	--footer-text-color: var(--white-color);
	--footer-link-color: var(--gray-color);
	--footer-link-color-hover: #616161;
}
.link {
	color: var(--footer-link-color);
}
.link:hover {
	color: var(--footer-link-color-hover);
}
.icon-wrap a {
	color: var(--main-color);
}

.footer {
	padding: 1em;
	font-size: 14px;
	background-color: var(--main-bg-color);
	color: var(--footer-text-color);
}
.contact {
	margin: auto;
	width: var(--main-width);
	display: flex;
	justify-content: space-between;
}
.about {
	margin: 8px auto 0;
	width: var(--main-width);
}
.about a {
	margin-inline-end: 8px;
}
.licenses {
	text-align: center;
	margin-block-start: 16px;
}
.copyright {
	text-align: center;
	margin-block-start: 8px;
}
.copyright .link {
	margin-inline-start: 8px;
	margin-inline-end: 8px;
}

.icon-wrap {
	display: flex;
	align-items: center;
	column-gap: 16px;
}
</style>
