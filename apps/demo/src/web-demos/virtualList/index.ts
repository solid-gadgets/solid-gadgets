/* eslint-disable @typescript-eslint/no-magic-numbers */
import { VirtualListElement, registerVirtualList } from "@solid-gadgets/web-components";

registerVirtualList();

const data = new Array(1000).fill(0).map((_, idx) => ({
  name: `leo${idx}`,
  id: idx,
}));

const virtualListDom =
  document.querySelector<VirtualListElement<typeof data[0]>>("so-virtual-list");

virtualListDom?.setAttribute(
  "item-style-code",
  `.item {
    width: 100px;
    height: 100px;
    background-color: white;
    border: 1px solid black;
    background-color: aliceblue;
  }`
);
virtualListDom?.setData(data);
virtualListDom?.setRenderer(item => {
  const itemDom = document.createElement("div");
  itemDom.innerHTML = `
  <div class="item">
    <div class="avatar"></div>
    <div class="name">${item.name}</div>
    <div class="id">${item.id}</div>
  </div>`;

  return itemDom;
});
