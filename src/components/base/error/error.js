import { createApp, h } from "vue";

let timer = null;
export const errorHandlerEvent = (err, vm, info) => {
	console.log(err);
	console.log(vm);
	console.log(info);

	if (timer) {
		return;
	}
	let type = "";
	let message = "";
	if (err.type === "unhandledrejection") {
		type = "unhandledrejection";
		message = err.reason.message;
	}

	if (err.message) {
		type = err.name;
		message = err.message;
	}

	const errorComponent = {
		name: "errorHandler",
		setup() {
			return () => {
				return h(
					"div",
					{
						class: ["error"],
						id: "gal-error",
						style: {
							position: "fixed",
							right: "8px",
							bottom: "8px",
							maxWidth: "300px",
							zIndex: 9999,
							backgroundColor: "#fff"
						}
					},
					[
						h("p", "发生了未知错误，错误信息如下："),
						h("p", "type: " + type),
						h("p", "message: " + message)
					]
				);
			};
		}
	};
	const errorHandler = createApp(errorComponent);
	const errorWrap = document.createElement("div");
	document.body.appendChild(errorWrap);
	errorHandler.mount(errorWrap);

	timer = setTimeout(() => {
		errorHandler.unmount();
		document.body.removeChild(errorWrap);
		clearTimeout(timer);
		timer = null;
	}, 10000);
};
