# Solid-gadgets web-components

## naming convention

```html
<so-xxxx></so-xxxx> <so-button></so-button>
```

1. 上周 shadow dom 打印现象
2. 关于后续用 solid 封装 web component 可能需要解决的问题

- 处理 children 问题（需要对 children 进行进一步处理的组件）
- 处理复杂 prop 问题，array，object

```js
const store = createStore<unknown[]>([]);
element.setData = (data: unknown[]) => {
  store[1]([...data]);
};
```

- 处理事件问题
  props 回调
