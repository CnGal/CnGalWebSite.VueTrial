## 使用

> 此数据数据依赖于 cngal 开放接口

```
<galEvaluation :data="data"></galEvaluation>
```

### 属性

-   data

    -   type: Object
    -   required: true

    设置跳转路径

#### 数据格式

```
{
	id: Number
	displayName: String,
	name: String,
	lastEditTime: DateString,
	createUserName: String,
	readerCount: Number,
	briefIntroduction: String,
}
```
