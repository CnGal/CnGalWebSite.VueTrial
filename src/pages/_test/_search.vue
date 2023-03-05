<template>
	<div class="button-box">
		<gal_testShow>
			<galInput
				type="search"
				placeholder="可以搜索哦~"
				autofocus
			></galInput>
			<template v-slot:code>
				<code
					v-text="
						`
	<galInput
		type='search'
			placeholder='可以搜索哦~'
		autofocus
	></galInput>`
					"
				></code>
			</template>
		</gal_testShow>

		<gal_testShow>
			<galInput type="search" placeholder="可以搜索哦~" simply></galInput>
			<template v-slot:code>
				<code
					v-text="
						`
	<galInput
		type='search'
			placeholder='可以搜索哦~'
			simply
	></galInput>`
					"
				></code>
			</template>
		</gal_testShow>

		<gal_testShow>
			<galInput
				type="search"
				label="label"
				v-model="labelValue"
				simply
			></galInput>
			<template v-slot:code>
				<code
					v-text="
						`
	<galInput
		type='search'
		label='label'
		v-model='labelValue'
			simply
	></galInput>`
					"
				></code>
			</template>
		</gal_testShow>
	</div>
</template>

<script setup>
import gal_testShow from "./_testShow.vue";
import { ref } from "vue";

const labelValue = ref("");
</script>

<style scoped></style>
