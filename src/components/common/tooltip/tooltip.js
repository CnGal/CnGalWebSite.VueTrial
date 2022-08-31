import { createApp, h, reactive, toRefs } from "vue";

const createTooltipComponent = (options) => {
	const data = reactive({
		...options,
		visible: false
	});
	const tooltipComponent = {
		name: "tooltip",
		setup() {
			return () => {
				return h(
					"div",
					{
						class: "tooltip",
						id: "gal-tooltip",
						style: {
							transform: `translate(${data.translateX}, ${data.translateY})`,
							display: data.visible ? "block" : "none"
						},
						role: "tooltip",
						"aria-hidden": true
					},
					data.text
				);
			};
		}
	};

	const tooltipInstance = createApp(tooltipComponent);
	const vm = tooltipInstance.mount(document.createElement("div"));

	return {
		...toRefs(data),
		vm
	};
};

export { createTooltipComponent };
