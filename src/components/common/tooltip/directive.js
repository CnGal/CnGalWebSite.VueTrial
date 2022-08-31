import { createTooltipComponent } from "./tooltip.js";

let tooltip;
const changePosition = (target) => {
	const rect = target.getBoundingClientRect();
	return {
		translateX: `calc(${rect.x + rect.width / 2}px - 50%)`,
		translateY: `${rect.y + rect.height}px`
	};
};

const createTooltip = (el, binding) => {
	const translate = changePosition(el);
	tooltip = createTooltipComponent({
		text: binding.value,
		...translate
	});
	document.body.appendChild(tooltip.vm.$el);
};

const showTooltip = (ev) => {
	const translate = changePosition(ev.target);
	tooltip.translateX.value = translate.translateX;
	tooltip.translateY.value = translate.translateY;
	tooltip.visible.value = true;
	tooltip.text.value = ev.target.getAttribute("data-tooltip-text");
};
const hideTooltip = (ev) => {
	tooltip.visible.value = false;
};

export default {
	mounted(el, binding) {
		if (!tooltip && binding.value) {
			createTooltip(el, binding);
		}
		el.setAttribute("data-tooltip-text", binding.value);
		el.setAttribute("aria-describedby", "gal-tooltip");
		el.addEventListener("mouseenter", showTooltip);
		el.addEventListener("mouseleave", hideTooltip);
	}
};
