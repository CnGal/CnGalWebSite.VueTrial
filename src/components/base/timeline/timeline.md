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

### 属性

-   contentAlign

    -   type: String
    -   default: "left"

    设置 timeline 和 timeline-item 的显示效果，当前支持值 left center right
