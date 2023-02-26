<template>
	<div class="button-box">
		<gal_testShow>
			<gal-icon-button icon="star"></gal-icon-button>
			<template v-slot:code>
				<code
					>&lt;gal-icon-button
					icon="star"&gt;&lt;/gal-icon-button&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-icon-button icon="star" theme="solid"></gal-icon-button>
			<template v-slot:code>
				<code
					>&lt;gal-icon-button icon="star"
					theme="solid"&gt;&lt;/gal-icon-button&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-icon-button icon="star" theme="text"></gal-icon-button>
			<template v-slot:code>
				<code
					>&lt;gal-icon-button icon="star"
					theme="text"&gt;&lt;/gal-icon-button&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-icon-button icon="star" circle></gal-icon-button>
			<template v-slot:code>
				<code
					>&lt;gal-icon-button icon="star"
					circle&gt;&lt;/gal-icon-button&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-icon-button icon="star" theme="solid" circle></gal-icon-button>
			<template v-slot:code>
				<code
					>&lt;gal-icon-button icon="star" theme="solid"
					circle&gt;&lt;/gal-icon-button&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow>
			<gal-icon-button icon="star" theme="text" circle></gal-icon-button>
			<template v-slot:code>
				<code
					>&lt;gal-icon-button icon="star" theme="text"
					circle&gt;&lt;/gal-icon-button&gt;</code
				>
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
