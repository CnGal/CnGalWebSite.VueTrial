## 使用

```
<gal-dialog>
	......
</gal-dialog>
```

gal-dialog 添加的元素会追加到 body 中

### 导出方法

dialog 组件默认会导出 show 和 hide 两个方法，可以通过 ref 获取组件实例，然后通过 ref.value.show 或 ref.value.hide 的方式来控制 dialog 组件 的显示与隐藏
