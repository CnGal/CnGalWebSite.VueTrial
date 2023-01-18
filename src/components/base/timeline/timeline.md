## 使用

```
<gal-timeline contentAlign="left">
	<gal-timeline-item>
		<template v-slot:divider>
			......
		</template>
		<template v-slot:body>
			......
		</template>
		<template v-slot:opposite>
			......
		</template>
	</gal-timeline-item>
	<gal-timeline-item>
		<template v-slot:divider>
			......
		</template>
		<template v-slot:body>
			......
		</template>
		<template v-slot:opposite>
			......
		</template>
	</gal-timeline-item>
	......
</gal-timeline>
```

### props

| 属性名       | 说明             | 类型   | 必须  | 默认值 | 可选值            | 补充 |
| ------------ | ---------------- | ------ | ----- | ------ | ----------------- | ---- |
| contentAlign | 内容显示样式风格 | string | false | left   | left center right |      |
