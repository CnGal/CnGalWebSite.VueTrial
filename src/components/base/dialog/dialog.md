## 使用

```
<gal-dialog>
	......
</gal-dialog>
```

gal-dialog 添加的元素会追加到 body 中

### props

| 属性名   | 说明           | 类型           | 必须  | 默认值                              | 可选值                                   | 补充 |
| -------- | -------------- | -------------- | ----- | ----------------------------------- | ---------------------------------------- | ---- |
| position | 显示位置       | Object, String | false | {type: "direction",value: "center"} | type: direction / element, value: center |      |
| isModal  | 是否显示遮罩层 | Boolean        | false | false                               |                                          |      |

### expose

| 方法名 | 说明        | 参数                 | 参数说明                                                                  |
| ------ | ----------- | -------------------- | ------------------------------------------------------------------------- |
| show   | 显示 dialog | element: HTMLElement | 当 position 值为 element 时，传入 element, dialog 将以 element 为基准显示 |
| hide   | 隐藏 dialog |                      |                                                                           |
