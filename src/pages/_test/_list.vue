<template>
	<div class="list-box">
		<gal_testShow
			direction="block"
			:msg="`<gal-list>
				<gal-list-item v-for='item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]'>
					{{ item }}
				</gal-list-item>
			</gal-list>`"
		>
			<gal-list>
				<gal-list-item v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">
					{{ item }}
				</gal-list-item>
			</gal-list>
		</gal_testShow>

		<gal_testShow
			direction="block"
			:msg="`<gal-list :rowHasCellTotal='{xLarge: 6,large: 4,medium: 3,small: 2}'>
				<gal-list-item v-for='item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]'>
					{{ item }}
				</gal-list-item>
			</gal-list>`"
		>
			<gal-list
				:rowHasCellTotal="{
					xLarge: 6,
					large: 4,
					medium: 3,
					small: 2
				}"
			>
				<gal-list-item v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">
					{{ item }}
				</gal-list-item>
			</gal-list>
		</gal_testShow>
	</div>
</template>

<script setup>
import gal_testShow from "./_testShow.vue";
</script>

<style scoped></style>
