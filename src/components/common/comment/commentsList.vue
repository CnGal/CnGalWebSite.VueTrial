<template>
	<gal-card class="card" v-if="comments" width="full">
		<template v-slot:headerStart>
			<gal-icon class="icon header-icon" icon="gamepad"></gal-icon>留言板
		</template>

		<ul class="comment-list">
			<galConmmentItem
				class="comment-item"
				:comment="item"
				v-for="item in comments.items"
				:key="item.id"
			></galConmmentItem>
		</ul>

		<div class="login-wrap">
			<galLinkButton to="/account/login" theme="solid" class="login">
				<galIcon icon="login"></galIcon>
				登入后发表评论
			</galLinkButton>
		</div>
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
.comment-item {
	margin-block-start: 12px;
}

.icon.header-icon {
	margin-inline-end: 1em;
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
