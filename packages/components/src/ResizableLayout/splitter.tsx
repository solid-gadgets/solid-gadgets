/* eslint-disable @typescript-eslint/no-magic-numbers */
import { ParentComponent, Index, Show, createMemo } from "solid-js";
import { createStore } from "solid-js/store";

import { SplitterDirection, SplitterProps } from "./type";
import "./index.scss";
export * from "./type";

export const Splitter: ParentComponent<SplitterProps> = ({
  horizontal,
  children,
  customClass = "",
  resizeBarClass = "",
}) => {
  const childrenArr = Array.isArray(children) ? children : [children];
  const childrenDom = childrenArr.map(child => {
    return (typeof child === "function" ? child() : child) as HTMLElement;
  });

  const [paneSizes, setPaneSizes] = createStore(childrenDom.map(() => 1 / childrenDom.length));

  /** default as horizontal, horizontal has higher priority if both are provided */
  const direction = createMemo(() => {
    if (horizontal) return SplitterDirection.HORIZONTAL;
    return SplitterDirection.VERTICAL;
  });

  const getSplitterClasses = createMemo(() => `${customClass} ${direction()}-flex`);
  const getResizeBarClass = createMemo(() => `${resizeBarClass} ${direction()}-resize`);

  const getSplitterStyle = (idx: number) =>
    direction() === SplitterDirection.VERTICAL
      ? { width: `${(paneSizes[idx] * 100).toFixed(2)}%` }
      : { height: `${(paneSizes[idx] * 100).toFixed(2)}%` };

  // eslint-disable-next-line @typescript-eslint/init-declarations
  let containerRef: HTMLDivElement | undefined;
  const paneRefs: HTMLDivElement[] = [];
  const resizeBarRef: HTMLDivElement[] = [];

  const mouseDown = (idx: number, downE: MouseEvent) => {
    downE.preventDefault();
    // const resizeBarDom = resizeBarRef[idx];
    // const resizeBarSize
    // const paneDom = paneRefs[idx];

    const mouseMove = (e: MouseEvent) => {
      if (!containerRef) return;

      /** previous accumulated sizes of all the panes at the left/top side of current bar */
      const prevTotalSizePercent = paneSizes
        .slice(0, idx + 1)
        .reduce((total, size) => total + size, 0);

      /** the distance from the current bar to the left/top edge of the container */
      const offsetSize =
        direction() === SplitterDirection.VERTICAL
          ? e.clientX - containerRef.offsetLeft
          : e.clientY - containerRef.offsetTop;

      /** current accumulated widths of all the panes at the left side of current bar */
      const ContainerComputedStyle = getComputedStyle(containerRef);
      const totalSizePercent =
        offsetSize /
        Number(
          SplitterDirection.VERTICAL
            ? ContainerComputedStyle.width.replace("px", "")
            : ContainerComputedStyle.height.replace("px", "")
        );

      const sizeDiff = totalSizePercent - prevTotalSizePercent;

      /** new size of the pane located at the left/top side of the bar */
      const lastPaneWidthPercent = paneSizes[idx] + sizeDiff;
      const nextPaneWidthPercent = paneSizes[idx + 1] - sizeDiff;

      setPaneSizes(idx, lastPaneWidthPercent);
      setPaneSizes(idx + 1, nextPaneWidthPercent);
    };

    const mouseUp = () => {
      containerRef?.removeEventListener("mousemove", mouseMove);
      containerRef?.removeEventListener("mouseup", mouseUp);
    };

    const mouseLeave = () => {
      mouseUp();
      containerRef?.removeEventListener("mouseup", mouseLeave);
    };

    containerRef?.addEventListener("mousemove", mouseMove);
    containerRef?.addEventListener("mouseup", mouseUp);
    containerRef?.addEventListener("mouseleave", mouseLeave);
  };

  return (
    <main class={`splitter-wrapper ${getSplitterClasses()}`} ref={containerRef}>
      <Index each={childrenArr}>
        {(child, idx) => {
          return (
            <>
              <div class="item-wrapper" style={getSplitterStyle(idx)} ref={paneRefs[idx]}>
                {child}
              </div>
              <Show when={idx < childrenArr.length - 1}>
                <div
                  class={`resize-bar ${getResizeBarClass()}`}
                  ref={resizeBarRef[idx]}
                  onMouseDown={e => {
                    mouseDown(idx, e);
                  }}
                ></div>
              </Show>
            </>
          );
        }}
      </Index>
    </main>
  );
};
