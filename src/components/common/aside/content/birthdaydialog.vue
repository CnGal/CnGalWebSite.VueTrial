<template>
	<gal-dialog
		ref="birthdayDialog"
		:style="{ '--dialog-overlay-bg-color': 'transparent' }"
		:isModal="true"
	>
		<gal-card class="birthday-dialog" level="box">
			<div v-for="(item, index) in birthdayList" :key="index">
				<div class="header">
					<img
						class="birthday-img"
						:src="item.infor.mainImage"
						:alt="item.infor.name"
					/>
					<span class="name">{{ item.infor.name }}</span>
					<div
						class="game"
						v-for="contents in item.infor.addInfors.filter(
							(i) => i.modifier === '登场游戏'
						)"
					>
						<span v-for="content in contents.contents">
							{{ "《" + content.displayName + "》" }}
						</span>
					</div>
					<div
						class="rows-dot"
						:style="{
							'--row-dot-line': 3
						}"
					>
						{{ item.infor.briefIntroduction }}
					</div>
				</div>
				<div class="bottom">
					<div class="happy-birthday">生日快乐</div>
					<gal-link to="/birthday">前往生日日历</gal-link>
				</div>
			</div>
		</gal-card>
	</gal-dialog>
</template>

<script setup>
import { ref } from "vue";
import { getRoleBirthdaysByTime } from "@/api/entriesAPI/index.js";

const birthdayDialog = ref(null);

const birthdayList = ref([]);
(async () => {
	const { data } = await getRoleBirthdaysByTime({
		month: new Date().getMonth() + 1
	});

	birthdayList.value = data.filter((item) => {
		const birthday = new Date(item.brithday);
		const now = new Date();
		return (
			birthday.getMonth() === now.getMonth() &&
			birthday.getDate() === now.getDate()
		);
	});
})();

const show = (arg) => {
	birthdayDialog.value.show(arg);
};
const hide = () => {
	birthdayDialog.value.hide();
};

defineExpose({
	show,
	hide
});
</script>

<style scoped>
.birthday-dialog {
	width: 200px;
}

.birthday-img {
	width: 100px;
	height: 100px;
	border-radius: 50%;
}
.header {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 14px;
}
.name {
	font-weight: bold;
}
.game {
	color: var(--gray-color);
}

.happy-birthday {
	font-size: 20px;
	font-weight: bold;
}

.bottom {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
