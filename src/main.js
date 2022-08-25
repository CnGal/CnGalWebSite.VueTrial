import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import importPlugin from "./plugins/import.js";
import router from "./router/index.js";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(importPlugin);
app.mount("#app");
