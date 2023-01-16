## 使用

```
<gal-card :toggle="true" @toggleChange="Function" width="full">
	<template v-slot:headerStart>
		......
	</template>
	<template v-slot:headerEnd>
		......
	</template>
	......
</gal-card>
```

### props

| 属性名 | 说明                     | 类型    | 必须  | 默认值 | 可选值   | 补充                                                           |
| ------ | ------------------------ | ------- | ----- | ------ | -------- | -------------------------------------------------------------- |
| width  | 边框到内容之间是否有空白 | string  | false | fit    | fit full | fit 有空白, full 无空白。在屏幕尺寸小于 768px 时，fit 也无空白 |
| toggle | 是否显示展开或折叠按钮。 | Boolean | false | false  | -        |                                                                |

### emits

| 方法名       | 说明                 | 参数            | 说明                       |
| ------------ | -------------------- | --------------- | -------------------------- |
| toggleChange | 展开或折叠 main 区域 | isShow：Boolean | 事件完成后展开或折叠的状态 |
