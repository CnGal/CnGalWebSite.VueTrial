## 使用

```
<gal-Tabs
    type="link"
    :tabs="navList"
    v-model="activeNav"
></gal-Tabs>
```

### 属性

-   type

    -   type: String,
    -   default: "button"

    设置 tabs 按钮的类型，当前支持值 button link

-   tabs

    -   type: Array,
    -   required: true

    -   value
        ```
            [
            {
                link: "/",   // 为 link 时的跳转路径
                text: "首页",  // tab 内的文字
                icon: "home"  // tab 内的 icon图标
            }
            ...
            ];
        ```

-   width

    -   type: String,
    -   default: "default"

    设置 tabs 总的宽度样式，当前支持者 default full

-   v-model

    -   type: Number

    当前活动中的 tab 值

### emit

-   changeActiveTab(index, oldIndex)

    切换 tabs 会触发的事件，index 为切换后的值, oldIndex 为切换前的值
