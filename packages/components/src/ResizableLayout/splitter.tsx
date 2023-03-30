/* eslint-disable @typescript-eslint/no-magic-numbers */
import { logWarn } from "@solid-gadgets/utils";
import { ParentComponent, Index, Show, createMemo } from "solid-js";
import { createStore } from "solid-js/store";

import { PaneInfo, SplitterDirection, SplitterProps } from "./type";
import "./index.scss";
export * from "./type";

const COMPONENT_NAME = "ResizableSplitter";

/**
 * - All sizes must be added to total 1
 * - Default setting is averaging the sizes to each pane
 * - The sizes of the rest unset panes are averaged
 * @param sizes pane sizes as percentage
 */
function processSizes(sizes: number[]) {
  const totalSetSize = sizes.reduce((total, size) => total + size, 0);

  /** exceed 1, average each pane size */
  if (totalSetSize > 1) {
    logWarn("The total size of all panes exceed 1.", COMPONENT_NAME);
    return sizes.map(() => 1 / sizes.length);
  }

  /** all the index of the pane without size attribute */
  const unsetSizeIdx: number[] = [];
  sizes.forEach((size, idx) => {
    if (size === 0) unsetSizeIdx.push(idx);
  });

  if (!unsetSizeIdx.length) {
    /** less than 1, average each pane size */
    if (totalSetSize < 1) {
      logWarn("The total size of all panes exceed 1.", COMPONENT_NAME);
      return sizes.map(() => 1 / sizes.length);
    }

    return sizes;
  }

  /** average size of the unset panes */
  const averageSize = (1 - totalSetSize) / unsetSizeIdx.length;
  unsetSizeIdx.forEach(idx => (sizes[idx] = averageSize));
  return sizes;
}

export const Splitter: ParentComponent<SplitterProps> = ({
  horizontal,
  children,
  customClass = "",
  resizeBarClass = "",
}) => {
  const childrenArr = Array.isArray(children) ? children : [children];
  const paneInfo = childrenArr.reduce<PaneInfo>(
    (infos, child) => {
      const dom = (typeof child === "function" ? child() : child) as HTMLElement;
      infos.doms.push(dom);

      infos.sizes.push(Number(dom.getAttribute("size") ?? 0) / 100);
      infos.minSizes.push(Number(dom.getAttribute("minsize") ?? 0) / 100);
      infos.maxSizes.push(Number(dom.getAttribute("maxsize") ?? 100) / 100);

      return infos;
    },
    { doms: [], sizes: [], minSizes: [], maxSizes: [] }
  );

  paneInfo.sizes = processSizes(paneInfo.sizes);

  const [paneSizes, setPaneSizes] = createStore([...paneInfo.sizes]);

  /** default as horizontal, horizontal has higher priority if both are provided */
  const direction = createMemo(() => {
    if (horizontal) return SplitterDirection.HORIZONTAL;
    return SplitterDirection.VERTICAL;
  });
  const getSplitterClasses = createMemo(() => `${customClass} ${direction()}-flex`);
  const getResizeBarClass = createMemo(() => `${resizeBarClass} ${direction()}-resize`);

  // eslint-disable-next-line @typescript-eslint/init-declarations
  let containerRef: HTMLDivElement | undefined;
  const paneRefs: HTMLDivElement[] = [];
  const resizeBarRef: HTMLDivElement[] = [];

  const getSplitterStyle = (idx: number) =>
    direction() === SplitterDirection.VERTICAL
      ? { width: `${(paneSizes[idx] * 100).toFixed(2)}%` }
      : { height: `${(paneSizes[idx] * 100).toFixed(2)}%` };

  const checkBoundary = (
    idx: number,
    lastPaneWidthPercent: number,
    nextPaneWidthPercent: number
  ) => {
    /** last: left/top; next: right/bottom */
    const lastPaneMinSize = paneInfo.minSizes[idx];
    const lastPaneMaxSize = paneInfo.maxSizes[idx];
    const nextPaneMinSize = paneInfo.minSizes[idx + 1];
    const nextPaneMaxSize = paneInfo.maxSizes[idx + 1];

    if (
      lastPaneWidthPercent > lastPaneMaxSize ||
      lastPaneWidthPercent < lastPaneMinSize ||
      nextPaneWidthPercent > nextPaneMaxSize ||
      nextPaneWidthPercent < nextPaneMinSize
    )
      return false;

    return true;
  };

  const mouseDown = (idx: number, downE: MouseEvent) => {
    downE.preventDefault();

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

      const ContainerComputedStyle = getComputedStyle(containerRef);
      /** current accumulated widths of all the panes at the left side of current bar */
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

      if (!checkBoundary(idx, lastPaneWidthPercent, nextPaneWidthPercent)) return;

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
