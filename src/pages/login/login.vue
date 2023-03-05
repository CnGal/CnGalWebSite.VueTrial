<template>
	<form class="login-form">
		<img class="logo" src="/images/head_logo_6th.png" alt="logo" />
		<h1 class="title">欢迎来到CnGal资料站</h1>

		<galInput
			class="input"
			v-model="username"
			type="text"
			simply
			label="用户名或邮箱"
		></galInput>

		<galInput
			class="input"
			v-model="password"
			type="password"
			simply
			label="密码"
			@keypress.enter="loginEvent"
		></galInput>

		<div
			:style="{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			}"
		>
			<galCheckbox v-model="rememberMe" label="记住我"></galCheckbox>
			<RouterLink class="forget" to="/account/forgetpassword"
				>忘记密码？</RouterLink
			>
		</div>

		<galButton
			class="login-button"
			circle
			@click="loginEvent"
			width="full"
			theme="solid"
		>
			登入</galButton
		>

		<div>
			还没有账号？<RouterLink class="register" to="/account/register"
				>立即注册</RouterLink
			>
		</div>
	</form>
	<div ref="geetest"></div>
</template>

<script setup>
import { ref } from "vue";
import { login, getGeetestCode } from "@/api/accountAPI/login.js";
import {
	initGeetestBindCAPTCHA,
	getIdentification
} from "@/assets/common/js/account.js";
import { useRouter } from "vue-router";
import { useStore } from "@/store/index.js";
const store = useStore();
const router = useRouter();

const username = ref("");
const password = ref("");
const rememberMe = ref(true);

const geetest = ref(null);
const captchaObj = ref(null);
const doCaptch = (captcha) => {
	captchaObj.value = captcha;
	captcha.onSuccess(() => {
		const result = captcha.getValidate();
		loginIn(result);
		// objRef.invokeMethodAsync('OnChecked', result.geetest_challenge, result.geetest_validate, result.geetest_seccode);
	});
	// captchaObj.onError(function () {
	//     // objRef.invokeMethodAsync('OnCancel');
	// });
	// captchaObj.onClose(function () {
	//     // objRef.invokeMethodAsync('OnCancel');
	// });
};

const loginIn = async ({
	geetest_challenge: challenge,
	geetest_validate: validate,
	geetest_seccode: seccode
}) => {
	const identification = await getIdentification();
	const {
		data: { token: token }
	} = await login({
		username: username.value,
		password: password.value,
		rememberMe: rememberMe.value,
		isNeedVerification: true,
		verification: {
			success: true,
			validate: validate,
			challenge: challenge,
			seccode: seccode
		},
		identification: {
			...identification
		}
	});

	if (rememberMe.value) {
		localStorage.setItem("authToken", token);
	} else {
		sessionStorage.setItem("authToken", token);
	}
	store.authToken = token;

	const backRouter = localStorage.getItem("pageRedirect");
	router.push(backRouter || "/");
	localStorage.removeItem("pageRedirect");
};

(async () => {
	const { data: geetestCode } = await getGeetestCode();
	initGeetestBindCAPTCHA(geetestCode)(doCaptch);
})();

const loginEvent = (ev) => {
	if (username.value === "") {
		console.log("请输入用户名");
		return;
	} else if (password.value === "") {
		console.log("请输入密码");
		return;
	}
	ev.preventDefault();
	captchaObj.value.verify();
};
</script>

<style scoped>
.login-form {
	box-sizing: border-box;
	margin: 24px auto;
	padding: 16px 32px 32px;
	width: 450px;
	background-color: #fff;
	text-align: center;
}
.logo {
	height: 150px;
}
.title {
	margin: 24px 0 16px;
	font-size: 24px;
}
.input {
	margin: 24px 0;
}
.forget {
	color: var(--main-color);
	font-size: 14px;
}

.login-button {
	margin-block-start: 32px;
}
</style>
