import "../assets/common/css/init.css";
import "../assets/common/css/style.css";
import "../assets/common/css/common.css";

import iconButton from "../components/common/icon/iconButton.vue";
import icon from "../components/common/icon/icon.vue";
import button from "../components/common/button/button.vue";
import linkButton from "../components/common/button/linkButton.vue";
import tag from "../components/common/tag/tag.vue";
import card from "../components/common/card/card.vue";
import cardHeader from "../components/common/card/cardHeader.vue";
import noWrapGameList from "../components/common/gameCard/noWrapGameList.vue";
import newsCard from "../components/common/gameCard/newsCard.vue";
import homeGameCard from "../components/home/gameCard/gameCard.vue";
import commonGameCard from "../components/common/gameCard/gameCard.vue";
import refreshGameCardList from "../components/common/gameCard/refreshGameCardList.vue";

import tooltip from "../components/common/tooltip/import";

const importPlugin = {
	install(app) {
		app.component("galButton", button);
		app.component("galIconButton", iconButton);
		app.component("galIcon", icon);
		app.component("galLinkButton", linkButton);
		app.component("galTag", tag);
		app.component("galCard", card);
		app.component("galCardHeader", cardHeader);
		app.component("galNoWrapGameList", noWrapGameList);
		app.component("galNewsCard", newsCard);
		app.component("galHomeGameCard", homeGameCard);
		app.component("galGameCard", commonGameCard);
		app.component("galRefreshGameCardList", refreshGameCardList);

		app.use(tooltip);
	}
};

export default importPlugin;
