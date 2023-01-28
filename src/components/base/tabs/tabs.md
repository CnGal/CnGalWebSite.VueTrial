## 使用

```
<gal-Tabs
    type="link"
    :tabs="navList"
    v-model="activeNav"
></gal-Tabs>
```

### props

| 属性名  | 说明                 | 类型   | 必须  | 默认值  | 可选值       | 补充                 |
| ------- | -------------------- | ------ | ----- | ------- | ------------ | -------------------- |
| type    | 设置 tabs 按钮的类型 | String | false | button  | button link  |                      |
| tabs    | 显示内容             | Array  | true  |         |              | 格式如下方代码块所示 |
| width   | 设置 tabs 宽度样式   | String | false | default | default full |                      |
| v-model | 当前活动中的 tab 值  | Number | false |         |              |                      |

    [
        {
            link: "/", // 为 link 时的跳转路径
            text: "首页", // tab 内的文字
            icon: "home" // tab 内的 icon 图标
        }
    ...
    ];

### emits

| 方法名          | 说明                   | 参数            | 参数说明                                  | 补充 |
| --------------- | ---------------------- | --------------- | ----------------------------------------- | ---- |
| changeActiveTab | 切换 tabs 会触发的事件 | index, oldIndex | index 为切换后的值, oldIndex 为切换前的值 |      |
