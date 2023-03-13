<template>
	<div class="list-box">
		<gal_testShow class="button-box">
			<gal-button
				@click="dialog1.show({ type: 'direction', value: 'top left' })"
				>top left</gal-button
			>
			<gal-button
				@click="
					dialog1.show({ type: 'direction', value: 'top center' })
				"
				>top center</gal-button
			>
			<gal-button
				@click="dialog1.show({ type: 'direction', value: 'top right' })"
				>top right</gal-button
			>
			<gal-button
				@click="
					dialog1.show({ type: 'direction', value: 'center left' })
				"
				>center left</gal-button
			>
			<gal-button
				@click="
					dialog1.show({ type: 'direction', value: 'center center' })
				"
				>center center</gal-button
			>
			<gal-button
				@click="
					dialog1.show({ type: 'direction', value: 'center right' })
				"
				>center right</gal-button
			>
			<gal-button
				@click="
					dialog1.show({ type: 'direction', value: 'bottom left' })
				"
				>bottom left</gal-button
			>
			<gal-button
				@click="
					dialog1.show({ type: 'direction', value: 'bottom center' })
				"
				>bottom center</gal-button
			>
			<gal-button
				@click="
					dialog1.show({ type: 'direction', value: 'bottom right' })
				"
				>bottom right</gal-button
			>
			<gal-dialog ref="dialog1">
				dialog content
				<gal-button @click="dialog1.hide()"> close</gal-button>
			</gal-dialog>

			<template v-slot:code>
				<code
					v-text="
						`
<gal-dialog ref='dialog1'>
	dialog content
	<gal-button @click='dialog1.hide()'> close</gal-button>
</gal-dialog>
                `
					"
				></code>
			</template>
		</gal_testShow>
		<gal_testShow class="button-box">
			<gal-button
				@click="dialog2.show({ type: 'direction', value: 'top left' })"
				>top left</gal-button
			>
			<gal-button
				@click="
					dialog2.show({ type: 'direction', value: 'top center' })
				"
				>top center</gal-button
			>
			<gal-button
				@click="dialog2.show({ type: 'direction', value: 'top right' })"
				>top right</gal-button
			>
			<gal-button
				@click="
					dialog2.show({ type: 'direction', value: 'center left' })
				"
				>center left</gal-button
			>
			<gal-button
				@click="
					dialog2.show({ type: 'direction', value: 'center center' })
				"
				>center center</gal-button
			>
			<gal-button
				@click="
					dialog2.show({ type: 'direction', value: 'center right' })
				"
				>center right</gal-button
			>
			<gal-button
				@click="
					dialog2.show({ type: 'direction', value: 'bottom left' })
				"
				>bottom left</gal-button
			>
			<gal-button
				@click="
					dialog2.show({ type: 'direction', value: 'bottom center' })
				"
				>bottom center</gal-button
			>
			<gal-button
				@click="
					dialog2.show({ type: 'direction', value: 'bottom right' })
				"
				>bottom right</gal-button
			>
			<gal-dialog ref="dialog2" :isModal="true">
				dialog content
			</gal-dialog>

			<template v-slot:code>
				<code
					v-text="
						`
<gal-dialog ref='dialog2' :isModal='true'>
	dialog content
</gal-dialog>
                `
					"
				></code>
			</template>
		</gal_testShow>

		<gal_testShow>
			<gal-button
				ref="button3"
				@click="dialog3.show({ type: 'element', value: button3.$el })"
				>open bottom</gal-button
			>
			<gal-button
				ref="button4"
				@click="
					dialog3.show({
						type: 'element',
						value: button4.$el,
						position: 'top'
					})
				"
				>open top</gal-button
			>
			<gal-dialog ref="dialog3">
				dialog content
				<gal-button @click="dialog3.hide()">
					close</gal-button
				></gal-dialog
			>

			<template v-slot:code>
				<code
					v-text="
						`
<gal-dialog ref='dialog3'>
	dialog content
	<gal-button @click='dialog3.hide()'> close</gal-button>
</gal-dialog>
                `
					"
				></code>
			</template>
		</gal_testShow>
	</div>
</template>

<script setup>
import { ref } from "vue";
import gal_testShow from "./_testShow.vue";

const dialog1 = ref(null);
const dialog2 = ref(null);
const dialog3 = ref(null);
const button3 = ref(null);
const button4 = ref(null);
</script>

<style scoped>
.button-box {
	height: 200px;
}
.button-box :deep(div) {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
}
.button-box .button:nth-child(1) {
	justify-self: flex-start;
	align-self: flex-start;
}
.button-box .button:nth-child(2) {
	justify-self: center;
	align-self: flex-start;
}
.button-box .button:nth-child(3) {
	justify-self: flex-end;
	align-self: flex-start;
}
.button-box .button:nth-child(4) {
	justify-self: flex-start;
	align-self: center;
}
.button-box .button:nth-child(5) {
	justify-self: center;
	align-self: center;
}
.button-box .button:nth-child(6) {
	justify-self: flex-end;
	align-self: center;
}
.button-box .button:nth-child(7) {
	justify-self: flex-start;
	align-self: flex-end;
}
.button-box .button:nth-child(8) {
	justify-self: center;
	align-self: flex-end;
}
.button-box .button:nth-child(9) {
	justify-self: flex-end;
	align-self: flex-end;
}
</style>
