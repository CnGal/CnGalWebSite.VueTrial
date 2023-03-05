import { createApp, h } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "github-markdown-css";

import { errorHandlerEvent } from "./components/base/error/error.js";
import importPlugin from "./plugins/import.js";
import router from "./router/index.js";

const app = createApp(App);

app.config.errorHandler = errorHandlerEvent;
window.addEventListener("error", errorHandlerEvent);
window.addEventListener("unhandledrejection", errorHandlerEvent);

app.use(router);
app.use(createPinia());
app.use(importPlugin);

app.mount("#app");
