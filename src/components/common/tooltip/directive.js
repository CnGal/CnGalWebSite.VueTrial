import { createTooltipComponent } from "./tooltip.js";
import { nextTick } from "vue";

let tooltip;
const changePosition = (target) => {
	const rect = target.getBoundingClientRect();
	let tooltipRect;
	let translateY;

	if (tooltip) {
		tooltipRect = tooltip.vm.$el.getBoundingClientRect();
	}

	if (target.getAttribute("data-tooltip-direction") === "top") {
		translateY = `${rect.y - tooltipRect?.height - 4}px`;
	} else {
		translateY = `${rect.y + rect.height + 4}px`;
	}
	return {
		translateX: `calc(${rect.x + rect.width / 2}px - 50%)`,
		translateY: translateY,
	};
};

const createTooltip = (el, binding) => {
	const translate = changePosition(el);
	tooltip = createTooltipComponent({
		text: binding.value,
		...translate,
	});
	document.body.appendChild(tooltip.vm.$el);
};

const showTooltip = (ev) => {
	tooltip.text.value = ev.target.getAttribute("data-tooltip-text");
	tooltip.visible.value = true;
	nextTick(() => {
		const translate = changePosition(ev.target);
		tooltip.translateX.value = translate.translateX;
		tooltip.translateY.value = translate.translateY;
	});
};
const hideTooltip = (ev) => {
	tooltip.visible.value = false;
};

export default {
	mounted(el, binding) {
		if (!tooltip && binding.value) {
			createTooltip(el, binding);
		}
		if (binding.modifiers.top) {
			el.setAttribute("data-tooltip-direction", "top");
		}
		el.setAttribute("data-tooltip-text", binding.value);
		el.setAttribute("aria-describedby", "gal-tooltip");
		el.addEventListener("mouseenter", showTooltip);
		el.addEventListener("mouseleave", hideTooltip);
	},
};
