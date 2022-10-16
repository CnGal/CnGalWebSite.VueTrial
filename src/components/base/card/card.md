## 使用

```
<gal-card :toggle="true" :toggleChange="Function" width="full">
	<template v-slot:headerStart>
		......
	</template>
	<template v-slot:headerEnd>
		......
	</template>
	......
</gal-card>
```

### 属性

-   width

    -   type: String,
    -   dafault: fit

    边框到内容之间是否有空白。fit 有空白, full 无空白。在屏幕尺寸小于 768px 时，fit 也无空白

-   toggle

    -   type: Boolean,
    -   dafault: false

    是否显示展开或折叠按钮。可以控制非 header 区域的显示与隐藏

-   toggleChange

    -   type: Function,
    -   default: Function.prototype,

    展开或折叠事件的回调函数。在展开或折叠事件完成后会触发该回调，回调接收一个布尔值参数，表示当前是否显示状态
