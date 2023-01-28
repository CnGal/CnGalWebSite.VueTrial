## 使用

```
<galPagination
	:total="total"
	v-model:currentPage="currentPage"
	@currentChange="changePage"
></galPagination>
```

### props

| 属性名      | 说明                        | 类型   | 必须  | 默认值 | 可选值 | 补充             |
| ----------- | --------------------------- | ------ | ----- | ------ | ------ | ---------------- |
| total       | 数据总数                    | Number | true  |        |        |                  |
| pageSize    | 每页显示个数                | Number | false | 10     |        |                  |
| currentPage | 当前页码，通过 v-modal 绑定 | Number | false | text   |        | html type 属性值 |

### emits

| 方法名        | 说明                 | 参数  | 参数说明 | 补充 |
| ------------- | -------------------- | ----- | -------- | ---- |
| currentChange | 页码改变时的回调事件 | event |          |      |
