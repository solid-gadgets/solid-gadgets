import { VirtualList } from "@solid-gadgets/components";
import { RendererProps } from "@solid-gadgets/components/src/VirtualList/type";
import { For } from "solid-js";

import "./index.scss";

const List = ({ list }: RendererProps<{ name: string; id: number }>) => {
  return (
    <For each={list()}>
      {item => (
        <div class="item">
          <div class="avatar"></div>
          <div class="name">{item.name}</div>
          <div class="id">{item.id}</div>
        </div>
      )}
    </For>
  );
};

export default () => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const data = new Array(1000).fill(0).map((_, idx) => ({
    name: `leo${idx}`,
    id: idx,
  }));

  return (
    <>
      <button onclick={() => window.open("/solid-gadgets/src/web-demos/virtualList/index.html")}>
        Web component
      </button>
      <div class="container">
        <VirtualList
          dataSource={data}
          renderer={List}
          itemSize={100}
          width="500px"
          height="600px"
          // horizontal
        ></VirtualList>
      </div>
    </>
  );
};
