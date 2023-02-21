<template>
	<div class="index-page-body">
		<div class="index-page-main">
			<slot name="main"></slot>
		</div>
		<div class="index-page-extra">
			<slot name="extra"></slot>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.index-page-body {
	--index-page-extra-width: clamp(320px, calc((100% - 16px) / 3), 400px);
}
.index-page-body {
	display: flex;
	column-gap: 24px;
	margin-block-start: 12px;
	color: var(--main-font-color);
}
.index-page-extra {
	width: var(--index-page-extra-width);
}
.index-page-main {
	flex: 1;
}

@media screen and (max-width: 992px) {
	.index-page-body {
		flex-direction: column-reverse;
	}
	.index-page-extra {
		width: 100%;
	}
}
</style>
