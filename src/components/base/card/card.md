## 使用

> 访问 http://localhost:8081/\_test/\_card 页面查看样式与使用

```
<gal-card>
	<template v-slot:headerStart>
		......
	</template>
	<template v-slot:headerEnd>
		......
	</template>
	......
</gal-card>
```

### attrs

| 属性名      | 说明                  | 补充 |
| ----------- | --------------------- | ---- |
| transparent | body 区域背景是否透明 |      |

### props

| 属性名       | 说明                           | 类型    | 必须  | 默认值  | 可选值      | 补充                                                           |
| ------------ | ------------------------------ | ------- | ----- | ------- | ----------- | -------------------------------------------------------------- |
| width        | 边框到内容之间是否有空白       | string  | false | fit     | fit full    | fit 有空白, full 无空白。在屏幕尺寸小于 768px 时，fit 也无空白 |
| toggle       | 是否显示展开或折叠按钮。       | Boolean | false | false   | -           |                                                                |
| level        | 控制组件的标签名               | string  | false | section | section box | section 时为 sectin > header div，box 时 为 div > div div      |
| headingLevel | 控制 header 组件内标题的标签名 | string  | false | h2      | h1-h6       |                                                                |

### emits

| 方法名       | 说明                 | 参数            | 参数说明                   |
| ------------ | -------------------- | --------------- | -------------------------- |
| toggleChange | 展开或折叠 main 区域 | isShow：Boolean | 事件完成后展开或折叠的状态 |
