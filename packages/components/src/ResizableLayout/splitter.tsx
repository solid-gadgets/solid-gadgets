/* eslint-disable @typescript-eslint/no-magic-numbers */
import { ParentComponent, Index, Show, createMemo, createEffect } from "solid-js";
import { createStore } from "solid-js/store";

import { moveEventHandler, processSizes } from "./core";
import { PaneInfo, SplitterDirection, SplitterProps } from "./type";
import "./index.scss";

export * from "./type";

export const Splitter: ParentComponent<SplitterProps> = ({
  horizontal,
  children = [],
  customClass = "",
  resizeBarClass = "",
  pushOtherPane = false,
}) => {
  // eslint-disable-next-line @typescript-eslint/init-declarations
  let containerRef: HTMLDivElement | undefined;
  const paneRefs: HTMLDivElement[] = [];
  const resizeBarRef: HTMLDivElement[] = [];

  const childrenArr = createMemo(() => {
    const resolved = typeof children === "function" ? children() : children;
    return Array.isArray(resolved) ? resolved : [resolved];
  });
  const paneInfo = createMemo(() => {
    const results = childrenArr().reduce<PaneInfo>(
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

    results.sizes = processSizes(results.sizes);
    return results;
  });

  const [isDragging, setIsDragging] = createStore<boolean[]>([]);
  const [paneSizes, setPaneSizes] = createStore<number[]>([]);
  /** tracking the paneInfo and childrenArr changes */
  createEffect(() => {
    setPaneSizes([...paneInfo().sizes]);
    setIsDragging(childrenArr().map(() => false));
  });

  const hasDragging = createMemo(() => isDragging.some(item => item));
  /** default as horizontal, horizontal has higher priority if both are provided */
  const direction = createMemo(() => {
    if (horizontal) return SplitterDirection.HORIZONTAL;
    return SplitterDirection.VERTICAL;
  });
  const getSplitterClasses = createMemo(
    () =>
      `${customClass} ${direction()}-splitter ${
        hasDragging() ? `splitter-${direction()}-resizing` : ""
      }`
  );
  const getResizeBarClass = createMemo(
    () => `${resizeBarClass} ${direction()}-resize-bar ${direction()}-bar-resizing`
  );

  const getSplitterStyle = (idx: number) =>
    direction() === SplitterDirection.VERTICAL
      ? { width: `${(paneSizes[idx] * 100).toFixed(2)}%` }
      : { height: `${(paneSizes[idx] * 100).toFixed(2)}%` };

  const mouseDown = (idx: number, downE: MouseEvent) => {
    downE.preventDefault();

    setIsDragging(idx, true);

    const mouseMove = (e: MouseEvent) => {
      if (!containerRef) return;

      const lastPaneIdx = idx;
      const nextPaneIdx = idx + 1;

      moveEventHandler({
        event: e,
        containerRef,
        lastPaneIdx,
        nextPaneIdx,
        direction: direction(),
        paneSizes,
        paneInfo: paneInfo(),
        setPaneSizes,
        pushOtherPane,
      });
    };

    const mouseUp = () => {
      setIsDragging(idx, false);
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
      <Index each={childrenArr()}>
        {(child, idx) => {
          return (
            <>
              <div class="item-wrapper" style={getSplitterStyle(idx)} ref={paneRefs[idx]}>
                {child}
              </div>
              <Show when={idx < childrenArr().length - 1}>
                <div
                  class={`resize-bar ${getResizeBarClass()} ${
                    isDragging[idx] ? "resize-bar-hover" : "resize-bar-normal"
                  }`}
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
