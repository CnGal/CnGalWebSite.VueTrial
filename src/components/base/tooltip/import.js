import galTooltip from "./directive";
import "./tooltip.css";

const Tooltip = {
	install(app) {
		app.directive("gal-tooltip", galTooltip);
	}
};

export default Tooltip;
