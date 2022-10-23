## 使用

```
<galPagination
	:total="total"
	v-model:currentPage="currentPage"
	@currentChange="changePage"
></galPagination>
```

### 属性

-   total

    -   type: Number,
    -   require: true

    数据总数

-   currentPage

    -   type: Number

    当前页码，通过 v-modal 绑定

-   currentChange event

    页码改变时触发的回调函数
