<template>
	<gal-card class="card" v-if="comments">
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

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

const id = ref(props.id);

const comments = ref(null);
const getComment = async () => {
	const { data } = await getComments(3, id.value);
	comments.value = data;
};
getComment();

watch(
	() => props.id,
	(newId) => {
		console.log(newId);
		id.value = newId;
		getComment();
	}
);
</script>

<style scoped>
.icon.header-icon {
	margin-inline-end: 1em;
}

.login-wrap {
	padding: 1em;
	text-align: center;
	background-color: var(--main-bg-color);
	margin-block-start: 16px;
}
.login {
	padding: 0.5em;
}
.login.login.login.login.login:hover {
	background-color: var(--main-color);
	color: var(--white-color);
}
</style>
