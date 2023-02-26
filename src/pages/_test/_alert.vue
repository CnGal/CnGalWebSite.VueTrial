<template>
	<div class="button-box">
		<gal_testShow direction="block">
			<gal-alert type="error">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
				expedita odio veritatis ab?
			</gal-alert>
			<template v-slot:code>
				<code
					>&lt;gal-alert type="error"&gt;Lorem ipsum dolor sit amet
					consectetur, adipisicing elit. Quae expedita odio veritatis
					ab?&lt;/gal-alert&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow direction="block">
			<gal-alert type="error">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
				voluptas iusto vero pariatur eveniet odit eligendi deserunt,
				tempora tempore error delectus aperiam doloremque sint adipisci
				impedit animi fuga modi corrupti, officia aliquam autem cumque
				temporibus dolorum. Eos, repellat mollitia minima ex quia
				praesentium magni quas consequatur nisi deserunt ipsa non!
			</gal-alert>
			<template v-slot:code>
				<code
					>&lt;gal-alert type="error"&gt;Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Earum voluptas iusto vero
					pariatur eveniet odit eligendi deserunt, tempora tempore
					error delectus aperiam doloremque sint adipisci impedit
					animi fuga modi corrupti, officia aliquam autem cumque
					temporibus dolorum. Eos, repellat mollitia minima ex quia
					praesentium magni quas consequatur nisi deserunt ipsa
					non!&lt;/gal-alert&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow direction="block">
			<gal-alert type="warning">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
				expedita odio veritatis ab?
			</gal-alert>
			<template v-slot:code>
				<code
					>&lt;gal-alert type="warning"&gt;Lorem ipsum dolor sit amet
					consectetur, adipisicing elit. Quae expedita odio veritatis
					ab?&lt;/gal-alert&gt;</code
				>
			</template>
		</gal_testShow>
		<gal_testShow direction="block">
			<gal-alert type="warning">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
				voluptas iusto vero pariatur eveniet odit eligendi deserunt,
				tempora tempore error delectus aperiam doloremque sint adipisci
				impedit animi fuga modi corrupti, officia aliquam autem cumque
				temporibus dolorum. Eos, repellat mollitia minima ex quia
				praesentium magni quas consequatur nisi deserunt ipsa non!
			</gal-alert>
			<template v-slot:code>
				<code
					>&lt;gal-alert type="warning"&gt;Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Earum voluptas iusto vero
					pariatur eveniet odit eligendi deserunt, tempora tempore
					error delectus aperiam doloremque sint adipisci impedit
					animi fuga modi corrupti, officia aliquam autem cumque
					temporibus dolorum. Eos, repellat mollitia minima ex quia
					praesentium magni quas consequatur nisi deserunt ipsa
					non!&lt;/gal-alert&gt;</code
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
