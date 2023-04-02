/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Pane, PaneProps, Splitter, SplitterProps, SplitterStyle } from "@solid-gadgets/components";
import { customElement } from "solid-element";
import { JSX, createEffect, createSignal } from "solid-js";

export interface WebSplitterProps extends SplitterProps {
  splitterName: string;
  styleName: string;
}

const defaultSplitterProps: WebSplitterProps = {
  horizontal: false,
  customClass: "",
  resizeBarClass: "",
  pushOtherPane: false,
  splitterName: "default",
  styleName: "default",
};

const splitterDomMap = new Map<string, Element>();

export const registerSplitter = () => {
  const webSplitter = (splitterProps: WebSplitterProps) => {
    const [children, setChildren] = createSignal<(Element | JSX.Element)[]>([]);

    createEffect(() => {
      const splitterDom =
        splitterDomMap.get(splitterProps.splitterName) ??
        [...(document?.querySelectorAll(`so-splitter`) ?? [])].filter(splitter => {
          const name = splitter.getAttribute("splitter-name") ?? "default";
          /** the so-splitter doms can only be queried from the root, so store them at the root query */
          splitterDomMap.set(name, splitter);
          return splitter.getAttribute("splitter-name") === splitterProps.splitterName;
        })[0];

      const panes = splitterDom?.querySelectorAll(
        `div[splitter-name=${splitterProps.splitterName}]`
      );

      setChildren(
        [...panes].map(pane => {
          const paneProps: PaneProps = {
            customClass: pane.getAttribute("custom-class") ?? "",
            maxSize: pane.getAttribute("max-size") ?? 100,
            minSize: pane.getAttribute("min-size") ?? 0,
            size: pane.getAttribute("size") ?? 0,
          };
          return <Pane {...paneProps}>{[...pane.children]}</Pane>;
        })
      );
    });

    const styleDom = document.querySelectorAll(`style`);
    const styleCode = styleDom?.[0]?.innerHTML ?? "";
    console.log(styleDom, styleDom?.[1]?.getAttribute("type"));
    return (
      <>
        <style>
          {`* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          `}
          {SplitterStyle}
          {styleCode}
        </style>
        <Splitter {...splitterProps} children={children}></Splitter>
      </>
    );
  };

  customElement("so-splitter", defaultSplitterProps, webSplitter);
};
