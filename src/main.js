import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// import plugin from "./plugins/common.js";

import router from "./router/index.js";

import "./assets/common/css/init.css";
import "./assets/common/css/style.css";
import "./assets/common/css/common.css";

import tooltip from "./components/common/tooltip/tooltip.vue";
import iconButton from "./components/common/icon/iconButton.vue";
import icon from "./components/common/icon/icon.vue";
import linkButton from "./components/common/button/linkButton.vue";
import tag from "./components/common/tag/tag.vue";
import card from "./components/common/card/card.vue";
import cardHeader from "./components/common/card/cardHeader.vue";
import noWrapGameList from "./components/common/gameCard/noWrapGameList.vue";
import newsCard from "./components/common/gameCard/newsCard.vue";
import gameCard from "./components/common/gameCard/gameCard.vue";

const app = createApp(App);

app.component("galTooltip", tooltip);
app.component("galIconButton", iconButton);
app.component("galIcon", icon);
app.component("galLinkButton", linkButton);
app.component("galTag", tag);
app.component("galCard", card);
app.component("galCardHeader", cardHeader);
app.component("galNoWrapGameList", noWrapGameList);
app.component("galNewsCard", newsCard);
app.component("galGameCard", gameCard);

app.use(router);
app.use(createPinia());
// app.use(plugin);
app.mount("#app");
