## 使用

```
<gal-dropdown
    width="100px"
    @itemSelect="dropdownItemSelectEvent"
>
    <gal-option :selected="true">1</gal-option>
    <gal-option>2</gal-option
    >
    ...
</gal-dropdown>
```

### props

| 属性名 | 说明                         | 类型   | 必须  | 默认值 | 可选值 | 补充                 |
| ------ | ---------------------------- | ------ | ----- | ------ | ------ | -------------------- |
| width  | 设置 dropdown trigger 的宽度 | String | false |        |        | css width 属性支持值 |

-   其他 [gal-button](../button/button.md) 属性

### emits

| 方法名     | 说明                   | 参数                 | 参数说明       |
| ---------- | ---------------------- | -------------------- | -------------- |
| itemSelect | options 选择时触发事件 | element: HTMLElement | 当前选择的元素 |

## gal-option

### attrs

| 属性名   | 说明           | 补充 |
| -------- | -------------- | ---- |
| selected | 是否为选中状态 |      |
