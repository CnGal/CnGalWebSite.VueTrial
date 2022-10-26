<template>
	<gal-card class="card" v-if="comments" width="full">
		<template v-slot:headerStart>
			<gal-icon
				class="icon header-icon"
				icon="gamepad"
				size="1em"
			></gal-icon
			>留言板
		</template>
		<galConmmentsList :comments="comments?.items"></galConmmentsList>

		<div class="login-wrap">
			<galLinkButton to="/login" theme="solid" class="login">
				<galIcon icon="login"></galIcon>
				登入后发表评论
			</galLinkButton>
		</div>
	</gal-card>
</template>

<script setup>
import { ref, watch } from "vue";
import { getComments } from "../../../../api/commentsAPI/index.js";

import { useStore } from "../../../../store/index.js";
const store = useStore();

const props = defineProps({
	id: {
		type: String,
		required: true
	}
});

const comments = ref(null);
const getComment = async (newId) => {
	const { data } = await getComments(store.commentType.commentEntries, newId);
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
.icon.header-icon {
	margin-inline-end: 1em;
}

.card :deep(.card-main) {
	background-color: transparent;
}

.login-wrap {
	padding: 0.5em;
	text-align: center;
	background-color: var(--main-bg-color);
	margin-block-start: 12px;
}
.login {
	overflow: hidden;
	margin: 0.5em auto;
}
.login.login.login.login.login:hover {
	background-color: var(--main-color);
	color: var(--white-color);
}
</style>
