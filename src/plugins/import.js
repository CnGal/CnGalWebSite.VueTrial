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
import dropdown from "../components/base/dropdown/dropdown.vue";
import dropdownOption from "../components/base/dropdown/dropdownOption.vue";
import breadcrumb from "../components/base/link/breadcrumb.vue";
import tree from "../components/base/tree/tree.vue";
import table from "../components/base/table/table.vue";
import tableColumn from "../components/base/table/table-column.vue";
import list from "../components/base/list/list.vue";
import listItem from "../components/base/list/list-item.vue";

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
import cgCard from "../components/common/gameCard/cgCard.vue";

import userScoresCard from "../components/common/gameCard/userScoresCard.vue";

import entriesCGsCardList from "../components/entries/gameCard/cgCardList.vue";
import entriesGameRolesCardList from "../components/entries/gameCard/gameRolesCardList.vue";

import articlesGameEvaluationCardList from "../components/articles/gameCard/gameEvaluationCardList.vue";
import articlesGameEvaluationCard from "../components/articles/gameCard/gameEvaluationCard.vue";
import evaluation from "../components/articles/gameCard/evaluation.vue";

import indexPageHeader from "../components/indexpage/header/viewHeader.vue";
import indexPageBody from "../components/indexpage/body/viewBody.vue";
import indexPageExtraInformation from "../components/indexpage/extra/information.vue";
import indexPageExtraOtherRelevances from "../components/indexpage/extra/otherRelevances.vue";

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
		app.component("galDropdown", dropdown);
		app.component("galOption", dropdownOption);
		app.component("galBreadcrumb", breadcrumb);
		app.component("galTree", tree);
		app.component("galTable", table);
		app.component("galTableColumn", tableColumn);
		app.component("galList", list);
		app.component("galListItem", listItem);

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
		app.component("galCgCard", cgCard);

		app.component("galEntriesCGsCardList", entriesCGsCardList);
		app.component("galEntriesGameRolesCardList", entriesGameRolesCardList);

		app.component(
			"galArticlesGameEvaluationCardList",
			articlesGameEvaluationCardList
		);
		app.component(
			"galArticlesGameEvaluationCard",
			articlesGameEvaluationCard
		);

		app.component("galIndexPageViewHeader", indexPageHeader);
		app.component("galIndexPageViewBody", indexPageBody);
		app.component(
			"galIndexPageExtraInformation",
			indexPageExtraInformation
		);
		app.component(
			"galIndexPageExtraOtherRelevances",
			indexPageExtraOtherRelevances
		);

		app.use(tooltip);
	}
};

export default importPlugin;
