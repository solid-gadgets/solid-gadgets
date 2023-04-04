/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Pane, PaneProps, Splitter, SplitterProps, SplitterStyle } from "@solid-gadgets/components";
import { customElement } from "solid-element";
import { onMount, createUniqueId, createMemo } from "solid-js";

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
  const splitterMap = new Map<string, Element>();

  const webSplitter = (splitterProps: WebSplitterProps) => {
    const children = createMemo(() => {
      const splitterDom = splitterMap.get(splitterProps.splitterId);
      const panes = splitterDom?.children ?? [];

      return [...panes].map(pane => {
        const paneProps: PaneProps = {
          customClass: pane.getAttribute("custom-class") ?? "",
          maxSize: pane.getAttribute("max-size") ?? 100,
          minSize: pane.getAttribute("min-size") ?? 0,
          size: pane.getAttribute("size") ?? 0,
        };
        return <Pane {...paneProps}>{[...pane.children]}</Pane>;
      });
    });

    onMount(() => {
      // already set the id, no need to query all the splitters again
      if (splitterProps.splitterId !== "0") return;

      const splitterDoms = document.querySelectorAll("so-splitter");

      // add id to all the splitters
      splitterDoms.forEach(splitter => {
        const splitterId = splitter.getAttribute("splitter-id");
        if (!splitterId) {
          const id = createUniqueId();
          splitter.setAttribute("splitter-id", id);
          splitterMap.set(id, splitter);
        } else {
          splitterMap.set(splitterId, splitter);
        }
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
  };

  customElement("so-splitter", defaultSplitterProps, webSplitter);
};
