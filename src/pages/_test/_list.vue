<template>
	<div class="list-box">
		<gal_testShow direction="block">
			<gal-list>
				<gal-list-item v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">
					{{ item }}
				</gal-list-item>
			</gal-list>

			<template v-slot:code>
				<code
					>&lt;gal-list&gt; &lt;gal-list-item v-for="item in [1, 2, 3,
					4, 5, 6, 7, 8, 9, 10]" &gt;
					{{ item }}
					&lt;/gal-list-item&gt; &lt;/gal-list&gt;</code
				>
			</template>
		</gal_testShow>

		<gal_testShow direction="block">
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

			<template v-slot:code>
				<code
					>&lt;gal-list :rowHasCellTotal='{xLarge: 6,large: 4,medium:
					3,small: 2}'&gt; &lt;gal-list-item v-for="item in [1, 2, 3,
					4, 5, 6, 7, 8, 9, 10]" &gt;
					{{ item }}

					&lt;/gal-list-item&gt; &lt;/gal-list&gt;</code
				>
			</template>
		</gal_testShow>
	</div>
</template>

<script setup>
import gal_testShow from "./_testShow.vue";
</script>

<style scoped></style>
