## 使用

```
<galInput
    v-model="username"
    type="text"
    simply
    label="用户名或邮箱"
></galInput>
```

### props

| 属性名     | 说明            | 类型   | 必须  | 默认值 | 可选值      | 补充             |
| ---------- | --------------- | ------ | ----- | ------ | ----------- | ---------------- |
| modelValue | input 值        | String | false | text   |             |                  |
| type       | 设置 input 类型 | String | false | text   | search text | html type 属性值 |
| label      | 设置 label      | String | false | ""     |             |                  |

### emits

| 方法名      | 说明     | 参数 | 参数说明 | 补充                                                   |
| ----------- | -------- | ---- | -------- | ------------------------------------------------------ |
| submitEvent | 提交事件 | ev   |          | 键盘 enter，或者 type 为 search 时点击搜索按钮等时触发 |

### attrs

| 属性名 | 说明           | 补充 |
| ------ | -------------- | ---- |
| simply | 是否为简单样式 |      |
