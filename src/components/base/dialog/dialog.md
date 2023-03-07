## 使用

> 访问 http://localhost:8081/\_test/\_dialog 页面查看样式与使用

```
<gal-dialog>
	......
</gal-dialog>
```

gal-dialog 添加的元素会追加到 body 中

### props

| 属性名  | 说明           | 类型    | 必须  | 默认值 | 可选值 | 补充 |
| ------- | -------------- | ------- | ----- | ------ | ------ | ---- |
| isModal | 是否显示遮罩层 | Boolean | false | false  |        |      |

### expose

| 方法名 | 说明        | 参数   | 参数说明 |
| ------ | ----------- | ------ | -------- |
| show   | 显示 dialog | option | 见下方   |
| hide   | 隐藏 dialog |        |          |

option

```
// 默认值
{
	type: "direction",
	value: "center"
}
// type 为 direction 时， value 支持 y方向 top center bottom  和 x方向 left center right 九种搭配，中间以空格隔开

{
	type: "element",
	value: HTMLElement
}
value 为 element 元素，dialog 会以该元素为基准显示
```
