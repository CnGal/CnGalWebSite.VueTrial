<template>
	<div class="button-box">
		<gal_testShow>
			<gal-button>按钮</gal-button>
			<template v-slot:code>
				<code>&lt;gal-button&gt;按钮&lt;/gal-button&gt;</code>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-button theme="solid">按钮</gal-button>
			<template v-slot:code>
				<code
					>&lt;gal-button
					theme='solid'&gt;按钮&lt;/gal-button&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-button theme="text">按钮</gal-button>
			<template v-slot:code>
				<code
					>&lt;gal-button
					theme='text'&gt;按钮&lt;/gal-button&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-button width="full">按钮</gal-button>
			<template v-slot:code>
				<code
					>&lt;gal-button
					width='full'&gt;按钮&lt;/gal-button&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-button width="full" theme="solid">按钮</gal-button>
			<template v-slot:code>
				<code
					>&lt;gal-button width='full'
					theme='solid'&gt;按钮&lt;/gal-button&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-button width="full" theme="text">按钮</gal-button>
			<template v-slot:code>
				<code
					>&lt;gal-button width='full'
					theme='text'&gt;按钮&lt;/gal-button&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-button circle>按</gal-button>
			<template v-slot:code>
				<code>&lt;gal-button circle&gt;按&lt;/gal-button&gt;</code>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-button disabled>按</gal-button>
			<template v-slot:code>
				<code>&lt;gal-button disabled&gt;按&lt;/gal-button&gt;</code>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-button theme="solid" disabled>按</gal-button>
			<template v-slot:code>
				<code>&lt;gal-button disabled&gt;按&lt;/gal-button&gt;</code>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-button theme="text" disabled>按</gal-button>
			<template v-slot:code>
				<code>&lt;gal-button disabled&gt;按&lt;/gal-button&gt;</code>
			</template>
		</gal_testShow>
	</div>
</template>

<script setup>
import gal_testShow from "./_testShow.vue";
</script>

<style scoped></style>
