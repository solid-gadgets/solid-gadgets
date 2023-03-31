/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Pane, PaneProps, Splitter, SplitterProps, SplitterStyle } from "@solid-gadgets/components";
import { customElement } from "solid-element";
import { createEffect, createSignal } from "solid-js";

const defaultSplitterProps: SplitterProps = {
  horizontal: false,
  customClass: "",
  resizeBarClass: "",
  pushOtherPane: false,
};

export const registerSplitter = () => {
  const webSplitter = (splitterProps: SplitterProps) => {
    const [children, setChildren] = createSignal<Element[]>([]);

    createEffect(() => {
      const panes = document?.querySelectorAll("so-pane");
      setChildren([...panes]);
    });

    return (
      <>
        <style>
          {`* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          .child-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 0 3px #0003 inset;
            background-color: #b3b1b1;
          }
          .desc {
            font-size: 1rem;
            color: rgb(231, 228, 228);
          }
          .my-pane {
            color: white;
            font-family: Helvetica,Arial,sans-serif;
            font-size: 2rem;
            opacity: .7;
          }
          .splitter-parent {
            width: 1000px;
            height: 500px;
            border: 1px solid rgb(224, 224, 232);
          }
          .splitter-child {
            width: 100%;
            height: 100%;
          }
          `}
          {SplitterStyle}
        </style>
        <Splitter {...splitterProps} children={children}></Splitter>
      </>
    );
  };

  customElement("so-splitter", defaultSplitterProps, webSplitter);
};

const defaultPaneProps: PaneProps = {
  customClass: "",
  size: 0,
  maxSize: 100,
  minSize: 0,
};

export const registerPane = () => {
  const webPane = (paneProps: PaneProps) => {
    return (
      <>
        <style>
          {`* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }`}
          {SplitterStyle}
        </style>
        <Pane {...paneProps}>
          <slot></slot>
        </Pane>
      </>
    );
  };

  customElement("so-pane", defaultPaneProps, webPane);
};
