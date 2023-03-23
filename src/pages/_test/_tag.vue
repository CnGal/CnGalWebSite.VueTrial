<template>
	<div class="button-box">
		<gal_testShow height="30px">
			<gal-tag>按钮</gal-tag>
			<template v-slot:code>
				<code v-text="`<gal-tag>按钮</gal-tag>`"></code>
			</template>
		</gal_testShow>
		<gal_testShow height="30px">
			<gal-tag type="primary">按钮</gal-tag>
			<template v-slot:code>
				<code
					v-text="`<gal-tag type=&quot;primary&quot;>按钮</gal-tag>`"
				></code>
			</template>
		</gal_testShow>
		<gal_testShow height="30px">
			<gal-tag type="success">按钮</gal-tag>
			<template v-slot:code>
				<code
					v-text="`<gal-tag type=&quot;success&quot;>按钮</gal-tag>`"
				></code>
			</template>
		</gal_testShow>
		<gal_testShow height="30px">
			<gal-tag type="warning">按钮</gal-tag>
			<template v-slot:code>
				<code
					v-text="`<gal-tag type=&quot;warning&quot;>按钮</gal-tag>`"
				></code>
			</template>
		</gal_testShow>
		<gal_testShow height="30px">
			<gal-tag type="danger">按钮</gal-tag>
			<template v-slot:code>
				<code
					v-text="`<gal-tag type=&quot;danger&quot;>按钮</gal-tag>`"
				></code>
			</template>
		</gal_testShow>
		<gal_testShow height="30px">
			<gal-tag type="info">按钮</gal-tag>
			<template v-slot:code>
				<code
					v-text="`<gal-tag type=&quot;info&quot;>按钮</gal-tag>`"
				></code>
			</template>
		</gal_testShow>

		<gal_testShow height="30px">
			<gal-tag theme="outline">按钮</gal-tag>
			<template v-slot:code>
				<code v-text="`<gal-tag theme='outline'>按钮</gal-tag>`"></code>
			</template>
		</gal_testShow>
		<gal_testShow height="30px">
			<gal-tag type="primary" theme="outline">按钮</gal-tag>
			<template v-slot:code>
				<code
					v-text="
						`<gal-tag type=&quot;primary&quot; theme='outline'>按钮</gal-tag>`
					"
				></code>
			</template>
		</gal_testShow>
		<gal_testShow height="30px">
			<gal-tag type="success" theme="outline">按钮</gal-tag>
			<template v-slot:code>
				<code
					v-text="
						`<gal-tag type=&quot;success&quot; theme='outline'>按钮</gal-tag>`
					"
				></code>
			</template>
		</gal_testShow>
		<gal_testShow height="30px">
			<gal-tag type="warning" theme="outline">按钮</gal-tag>
			<template v-slot:code>
				<code
					v-text="
						`<gal-tag type=&quot;warning&quot; theme='outline'>按钮</gal-tag>`
					"
				></code>
			</template>
		</gal_testShow>
		<gal_testShow height="30px">
			<gal-tag type="danger" theme="outline">按钮</gal-tag>
			<template v-slot:code>
				<code
					v-text="
						`<gal-tag type=&quot;danger&quot; theme='outline'>按钮</gal-tag>`
					"
				></code>
			</template>
		</gal_testShow>
		<gal_testShow height="30px">
			<gal-tag type="info" theme="outline">按钮</gal-tag>
			<template v-slot:code>
				<code
					v-text="
						`<gal-tag type=&quot;info&quot; theme='outline'>按钮</gal-tag>`
					"
				></code>
			</template>
		</gal_testShow>
	</div>
</template>

<script setup>
import gal_testShow from "./_testShow.vue";
</script>

<style scoped></style>
