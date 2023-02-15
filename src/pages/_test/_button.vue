<template>
	<div class="button-box">
		<gal_testShow msg="<gal-button>按钮</gal-button>">
			<gal-button>按钮</gal-button>
		</gal_testShow>
		<gal_testShow msg="<gal-button circle>按钮</gal-button>">
			<gal-button circle>按钮</gal-button>
		</gal_testShow>
		<gal_testShow msg="<gal-button type='primary'>按钮</gal-button>">
			<gal-button type="primary">按钮</gal-button>
		</gal_testShow>
		<gal_testShow msg="<gal-button width='full'>按钮</gal-button>">
			<gal-button width="full">按钮</gal-button>
		</gal_testShow>
	</div>
</template>

<script setup>
import gal_testShow from "./_testShow.vue";
</script>

<style scoped></style>
