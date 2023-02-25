<template>
	<div class="button-box">
		<gal_testShow msg="<gal-button>按钮</gal-button>">
			<gal-button>按钮</gal-button>
			<template v-slot:code>
				<code>&lt;gal-button&gt;按钮&lt;/gal-button&gt;</code>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-button circle>按钮</gal-button>
			<template v-slot:code>
				<code>&lt;gal-button circle&gt;按钮&lt;/gal-button&gt;</code>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-button type="primary">按钮</gal-button>
			<template v-slot:code>
				<code
					>&lt;gal-button
					type='primary'&gt;按钮&lt;/gal-button&gt;</code
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
	</div>
</template>

<script setup>
import gal_testShow from "./_testShow.vue";
</script>

<style scoped></style>
