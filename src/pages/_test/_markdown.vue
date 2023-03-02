<template>
	<div class="button-box">
		<gal_testShow direction="block">
			<gal-markdown
				><p>这是一段普通的文本<span>用例</span></p>
				<br />
				<p>这是另一段</p>
			</gal-markdown>
			<template v-slot:code>
				<code
					v-text="
						`
					<gal-markdown>
						<p>这是一段普通的文本<span>用例</span></p>
						<br />
						<p>这是另一段</p>
					</gal-markdown>`
					"
				></code>
			</template>
		</gal_testShow>

		<gal_testShow direction="block">
			<gal-markdown transparent
				><p>这是一段普通的文本<span>用例</span></p>
				<br />
				<p>这是另一段</p>
			</gal-markdown>
			<template v-slot:code>
				<code
					v-text="
						`
					<gal-markdown transparent>
						<p>这是一段普通的文本<span>用例</span></p>
						<br />
						<p>这是另一段</p>
					</gal-markdown>`
					"
				></code>
			</template>
		</gal_testShow>
	</div>
</template>

<script setup>
import gal_testShow from "./_testShow.vue";
</script>

<style scoped>
.button-box .icon-button {
	font-size: 24px;
}
</style>
