<template>
	<gal-card class="card" v-if="comments" width="full" transparent>
		<template v-slot:headerStart>
			<gal-icon class="icon header-icon" icon="gamepad"></gal-icon>留言板
		</template>

		<galCommentsList
			:comments="
				comments.items.slice(
					(commentActivePage - 1) * commentSize,
					commentActivePage * commentSize
				)
			"
		></galCommentsList>

		<gal-pagination
			class="pagination"
			:total="comments.items?.length"
			:page-size="commentSize"
			v-model:currentPage="commentActivePage"
		></gal-pagination>

		<gal-card lebel="box" class="login-wrap">
			<galLinkButton to="/account/login" theme="solid" class="login">
				<galIcon icon="login"></galIcon>
				登入后发表评论
			</galLinkButton>
		</gal-card>
	</gal-card>
</template>

<script setup>
import { ref, watch } from "vue";
import { getComments } from "@/api/commentsAPI/index.js";

const props = defineProps({
	type: {
		type: Number,
		required: true
	},
	id: {
		type: String,
		required: true
	}
});

const commentSize = ref(8);
const commentActivePage = ref(1);

const comments = ref(null);
const getComment = async (newId) => {
	const { data } = await getComments(props.type, newId);
	comments.value = data;
};
getComment(props.id);

watch(
	() => props.id,
	(newId) => {
		getComment(newId);
	}
);
</script>

<style scoped>
.pagination {
	margin-block-start: 1em;
}
.login-wrap {
	text-align: center;
	margin-block-start: 12px;
}

.login.login.login.login.login:hover {
	background-color: var(--main-color);
	color: var(--white-color);
}
</style>
