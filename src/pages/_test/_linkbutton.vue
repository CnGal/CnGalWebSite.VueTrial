<template>
	<div class="button-box">
		<gal_testShow msg="<gal-button>按钮</gal-button>">
			<gal-link-button>按钮</gal-link-button>
			<template v-slot:code>
				<code>&lt;gal-link-button&gt;按钮&lt;/gal-link-button&gt;</code>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-link-button circle>按</gal-link-button>
			<template v-slot:code>
				<code
					>&lt;gal-link-button
					circle&gt;按&lt;/gal-link-button&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-link-button type="primary">按钮</gal-link-button>
			<template v-slot:code>
				<code
					>&lt;gal-link-button
					type='primary'&gt;按钮&lt;/gal-link-button&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-link-button theme="solid">按钮</gal-link-button>
			<template v-slot:code>
				<code
					>&lt;gal-link-button
					theme='solid'&gt;按钮&lt;/gal-link-button&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-link-button theme="outline">按钮</gal-link-button>
			<template v-slot:code>
				<code
					>&lt;gal-link-button
					theme='outline'&gt;按钮&lt;/gal-link-button&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-link-button width="full">按钮</gal-link-button>
			<template v-slot:code>
				<code
					>&lt;gal-link-button
					width='full'&gt;按钮&lt;/gal-link-button&gt;</code
				>
			</template>
		</gal_testShow>
	</div>
</template>

<script setup>
import gal_testShow from "./_testShow.vue";
</script>

<style scoped></style>
