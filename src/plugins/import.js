import "../assets/common/css/init.css";
import "../assets/common/css/style.css";
import "../assets/common/css/common.css";

import markdown from "../components/base/markdown/markdown.vue";
import alert from "../components/base/alert/alert.vue";
import button from "../components/base/button/button.vue";
import linkButton from "../components/base/button/linkButton.vue";
import card from "../components/base/card/card.vue";
import icon from "../components/base/icon/icon.vue";
import iconButton from "../components/base/icon/iconButton.vue";
import dialog from "../components/base/dialog/dialog.vue";
import tag from "../components/base/tag/tag.vue";
import timeline from "../components/base/timeline/timeline.vue";
import timelineItem from "../components/base/timeline/timeline-item.vue";
import tooltip from "../components/base/tooltip/import.js";
import input from "../components/base/input/input.vue";
import pagination from "../components/base/pagination/pagination.vue";
import datepicker from "../components/base/datepicker/datepicker.vue";
import checkbox from "../components/base/input/checkbox.vue";
import tabs from "../components/base/tabs/tabs.vue";
import collapse from "../components/base/collapse/collapse.vue";
import collapseItem from "../components/base/collapse/collapse-item.vue";
import link from "../components/base/link/link.vue";

import noWrapGameList from "../components/common/gameCard/noWrapGameList.vue";
import newsCard from "../components/common/gameCard/newsCard.vue";
import homeGameCard from "../components/home/gameCard/gameCard.vue";
import normalGameCard from "../components/common/gameCard/normalGameCard.vue";
import commonDiscountGameCard from "../components/common/gameCard/discountGameCard.vue";
import refreshGameCardList from "../components/common/gameCard/refreshGameCardList.vue";
import conmmentsList from "../components/common/comment/commentsList.vue";
import conmmentItem from "../components/common/comment/commentItem.vue";

import gamePreview from "../components/common/gameCard/gamePreview.vue";
import gameCardRows from "../components/common/gameCard/gameCardRows.vue";

import userScoresCard from "../components/common/gameCard/userScoresCard.vue";

import entriesGameCGsCardList from "../components/entries/gameCard/gameCGsCardList.vue";
import entriesGameCGsCard from "../components/entries/gameCard/gameCGsCard.vue";
import entriesGameRolesCardList from "../components/entries/gameCard/gameRolesCardList.vue";

import articlesGameEvaluationCardList from "../components/articles/gameCard/gameEvaluationCardList.vue";
import articlesGameEvaluationCard from "../components/articles/gameCard/gameEvaluationCard.vue";
import evaluation from "../components/articles/gameCard/evaluation.vue";

const importPlugin = {
	install(app) {
		app.component("galButton", button);
		app.component("galIconButton", iconButton);
		app.component("galIcon", icon);
		app.component("galLinkButton", linkButton);
		app.component("galTag", tag);
		app.component("galDialog", dialog);
		app.component("galCard", card);
		app.component("galInput", input);
		app.component("galPagination", pagination);
		app.component("galDatepicker", datepicker);
		app.component("galCheckbox", checkbox);
		app.component("galTabs", tabs);
		app.component("galCollapse", collapse);
		app.component("galCollapseItem", collapseItem);
		app.component("galLink", link);

		app.component("galNoWrapGameList", noWrapGameList);
		app.component("galNewsCard", newsCard);
		app.component("galHomeGameCard", homeGameCard);
		app.component("galNormalGameCard", normalGameCard);
		app.component("galDiscountGameCard", commonDiscountGameCard);
		app.component("galRefreshGameCardList", refreshGameCardList);
		app.component("galEvaluation", evaluation);
		app.component("galMarkdown", markdown);
		app.component("galGamePreview", gamePreview);
		app.component("galAlert", alert);
		app.component("galTimeline", timeline);
		app.component("galTimelineItem", timelineItem);
		app.component("galGameCardRows", gameCardRows);
		app.component("galConmmentsList", conmmentsList);
		app.component("galConmmentItem", conmmentItem);
		app.component("galUserScoresCard", userScoresCard);

		app.component("galEntriesGameCGsCardList", entriesGameCGsCardList);
		app.component("galEntriesGameCGsCard", entriesGameCGsCard);
		app.component("galEntriesGameRolesCardList", entriesGameRolesCardList);

		app.component(
			"galArticlesGameEvaluationCardList",
			articlesGameEvaluationCardList
		);
		app.component(
			"galArticlesGameEvaluationCard",
			articlesGameEvaluationCard
		);

		app.use(tooltip);
	}
};

export default importPlugin;
