<template>
	<gal_testShow direction="block">
		<gal-card>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
			expedita odio veritatis ab?
		</gal-card>
		<template v-slot:code>
			<code
				v-text="
					`
                <gal-card>
                    Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quae expedita odio veritatisab?
                </gal-card>
                `
				"
			></code>
		</template>
	</gal_testShow>
	<gal_testShow direction="block">
		<gal-card>
			<template v-slot:headerStart> headerStart </template>
			<template v-slot:headerEnd> headerEnd </template>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
			expedita odio veritatis ab?
		</gal-card>
		<template v-slot:code>
			<code
				v-text="
					`
                <gal-card>
                    <template v-slot:headerStart> headerStart </template>
		    <template v-slot:headerEnd> headerEnd </template>
                    Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quae expedita odio veritatisab?
                </gal-card>
                `
				"
			></code>
		</template>
	</gal_testShow>
	<gal_testShow direction="block">
		<gal-card level="box">
			<template v-slot:headerStart> headerStart </template>
			<template v-slot:headerEnd> headerEnd </template>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
			expedita odio veritatis ab?
		</gal-card>
		<template v-slot:code>
			<code
				v-text="
					`
                <gal-card level='box'>
                    <template v-slot:headerStart> headerStart </template>
		    <template v-slot:headerEnd> headerEnd </template>
                    Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quae expedita odio veritatisab?
                </gal-card>
                `
				"
			></code>
		</template>
	</gal_testShow>
	<gal_testShow direction="block">
		<gal-card level="box" headingLevel="h3">
			<template v-slot:headerStart> headerStart </template>
			<template v-slot:headerEnd> headerEnd </template>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
			expedita odio veritatis ab?
		</gal-card>
		<template v-slot:code>
			<code
				v-text="
					`
                <gal-card level='box' headingLevel='h3'>
                    <template v-slot:headerStart> headerStart </template>
		    <template v-slot:headerEnd> headerEnd </template>
                    Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quae expedita odio veritatisab?
                </gal-card>
                `
				"
			></code>
		</template>
	</gal_testShow>

	<gal_testShow direction="block">
		<gal-card level="box" width="full">
			<template v-slot:headerStart> headerStart </template>
			<template v-slot:headerEnd> headerEnd </template>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
			expedita odio veritatis ab?
		</gal-card>
		<template v-slot:code>
			<code
				v-text="
					`
                <gal-card level='box' width='full'>
                    <template v-slot:headerStart> headerStart </template>
		    <template v-slot:headerEnd> headerEnd </template>
                    Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quae expedita odio veritatisab?
                </gal-card>
                `
				"
			></code>
		</template>
	</gal_testShow>

	<gal_testShow direction="block">
		<gal-card level="box" :toggle="true">
			<template v-slot:headerStart> headerStart </template>
			<template v-slot:headerEnd> headerEnd </template>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
			expedita odio veritatis ab?
		</gal-card>
		<template v-slot:code>
			<code
				v-text="
					`
                <gal-card level='box' :toggle='true'>
                    <template v-slot:headerStart> headerStart </template>
		    <template v-slot:headerEnd> headerEnd </template>
                    Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quae expedita odio veritatisab?
                </gal-card>
                `
				"
			></code>
		</template>
	</gal_testShow>

	<gal_testShow direction="block">
		<gal-card level="box" transparent>
			<template v-slot:headerStart> headerStart </template>
			<template v-slot:headerEnd> headerEnd </template>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
			expedita odio veritatis ab?
		</gal-card>
		<template v-slot:code>
			<code
				v-text="
					`
                <gal-card level='box' transparent>
                    <template v-slot:headerStart> headerStart </template>
		    <template v-slot:headerEnd> headerEnd </template>
                    Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quae expedita odio veritatisab?
                </gal-card>
                `
				"
			></code>
		</template>
	</gal_testShow>
</template>

<script setup>
import gal_testShow from "./_testShow.vue";
</script>

<style scoped></style>
