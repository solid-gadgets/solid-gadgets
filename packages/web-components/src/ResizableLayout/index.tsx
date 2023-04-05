/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Pane, PaneProps, Splitter, SplitterProps, SplitterStyle } from "@solid-gadgets/components";
import { customElement } from "solid-element";
import { createMemo } from "solid-js";

export interface WebSplitterProps extends SplitterProps {
  styleCode: string;
  styleLink: string;
  splitterId: string;
}

const defaultSplitterProps: WebSplitterProps = {
  horizontal: false,
  customClass: "",
  resizeBarClass: "",
  pushOtherPane: false,
  styleCode: "",
  splitterId: "0",
  styleLink: "",
};

export const registerSplitter = () => {
  customElement(
    "so-splitter",
    defaultSplitterProps,
    (splitterProps: WebSplitterProps, { element }) => {
      const children = createMemo(() => {
        return [...(element.children as HTMLElement[])].map(pane => {
          const paneProps: PaneProps = {
            customClass: pane.getAttribute("custom-class") ?? "",
            maxSize: pane.getAttribute("max-size") ?? 100,
            minSize: pane.getAttribute("min-size") ?? 0,
            size: pane.getAttribute("size") ?? 0,
          };
          return <Pane {...paneProps}>{[...pane.children]}</Pane>;
        });
      });

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
            {splitterProps.styleCode}
          </style>
          {splitterProps.styleLink?.trim() !== "" && (
            <link rel="stylesheet" href={splitterProps.styleLink} />
          )}
          <Splitter {...splitterProps} children={children}></Splitter>
        </>
      );
    }
  );
};
