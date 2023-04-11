import {
  RendererProps,
  VirtualList,
  VirtualListProps,
  virtualListStyle,
} from "@solid-gadgets/components";
import { customElement } from "solid-element";
import { For, createMemo } from "solid-js";
import { createStore } from "solid-js/store";

type Stringify<T> = { [key in keyof T]: string };
export type WebVirtualListProps = Stringify<Omit<VirtualListProps, "dataSource" | "renderer">> & {
  itemStyleCode?: string;
  itemStyleLink?: string;
};

export type Renderer<I = unknown> = (item: I) => HTMLElement;

export interface VirtualListStore {
  dataSource: unknown[];
  renderer?: Renderer;
}

export type VirtualListElement<I = unknown> = Element & {
  setData: (data: I[]) => void;
  setRenderer: (itemRenderer: Renderer<I>) => void;
};

const defaultProps: WebVirtualListProps = {
  itemSize: "50",
  width: "100%",
  height: "100%",
  buffer: "2",
  horizontal: "false",
  itemStyleCode: "",
  itemStyleLink: "",
};

const createRenderList =
  <I = unknown,>(itemRenderer?: Renderer<I>) =>
  ({ list }: RendererProps<I>) =>
    <For each={list()}>{item => itemRenderer?.(item)}</For>;

export const registerVirtualList = () => {
  customElement("so-virtual-list", defaultProps, (props: WebVirtualListProps, { element }) => {
    const { itemSize, width = "100%", height = "100%", buffer = "2", horizontal = "false" } = props;

    const [store, setStore] = createStore<VirtualListStore>({
      dataSource: [],
    });
    element.setData = (data: unknown[]) => {
      setStore("dataSource", data);
    };
    element.setRenderer = (itemRenderer: Renderer) => {
      // avoid solid resolving the itemRenderer since it is a function
      setStore("renderer", () => itemRenderer);
    };

    const processedProps = createMemo(() => ({
      itemSize: Number(itemSize),
      width,
      height,
      buffer: Number(buffer),
      horizontal: horizontal === "true" ? true : false,
    }));
    const dataSource = createMemo(() => store.dataSource);
    const List = createMemo(() => createRenderList(store.renderer));

    return (
      <>
        <style>
          {`* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          `}
          {virtualListStyle}
          {props.itemStyleCode}
        </style>
        {props.itemStyleLink?.trim() !== "" && <link rel="stylesheet" href={props.itemStyleLink} />}
        <VirtualList dataSource={dataSource()} {...processedProps()} renderer={List()} />
      </>
    );
  });
};
