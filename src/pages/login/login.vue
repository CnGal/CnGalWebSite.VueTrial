<template>
	<form class="login-form">
		<img class="logo" src="/images/head_logo_6th.png" alt="logo" />
		<h1 class="title">欢迎来到CnGal资料站</h1>

		<galInput
			class="input"
			v-model="username"
			type="text"
			simplt
			label="用户名或邮箱"
		></galInput>

		<galInput
			class="input"
			v-model="password"
			type="password"
			simplt
			label="密码"
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
			bgColor="var(--main-color)"
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
import "@/assets/external/gt/gt.js";
import { ref } from "vue";
import { login, getGeetestCode } from "@/api/accountAPI/login.js";

const username = ref("");
const password = ref("");
const rememberMe = ref(true);

const geetest = ref(null);
const captchaObj = ref(null);
const doCaptch = (captcha) => {
	captchaObj.value = captcha;
	captcha.onSuccess(() => {
		const result = captcha.getValidate();
		console.log(result);
		// objRef.invokeMethodAsync('OnChecked', result.geetest_challenge, result.geetest_validate, result.geetest_seccode);
	});
	// captchaObj.onError(function () {
	//     // objRef.invokeMethodAsync('OnCancel');
	// });
	// captchaObj.onClose(function () {
	//     // objRef.invokeMethodAsync('OnCancel');
	// });
};
const initGeetestBindCAPTCHA = (geetestCode) => {
	return (doCaptch) => {
		initGeetest(
			{
				// 以下配置参数来自服务端 SDK
				gt: geetestCode.gt,
				challenge: geetestCode.challenge,
				offline: !geetestCode.success,
				new_captcha: true,
				product: "bind"
			},
			doCaptch
		);
	};
};

(async () => {
	// todo
	const { data: geetestCode } = await getGeetestCode();
	initGeetestBindCAPTCHA(geetestCode)(doCaptch);
	// const res = await login({
	// 	username: "",
	// 	password: "",
	// 	rememberMe: true,
	// 	isNeedVerification: false,
	// 	verification: {
	// 		validate: "6a8ee4ddb77db9195d16570a598c6217"
	// 	}
	// });
	// console.log(res);
})();

const loginEvent = (ev) => {
	ev.preventDefault();
	captchaObj.value.verify();
	console.log({
		username: username.value,
		password: password.value,
		rememberMe: rememberMe.value
	});
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
