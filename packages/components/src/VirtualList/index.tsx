/* eslint-disable @typescript-eslint/no-magic-numbers */
import { createEffect, createMemo, createSignal } from "solid-js";

import style from "./index.scss";
import { VirtualListProps } from "./type";

export const VirtualList = (props: VirtualListProps) => {
  const { itemSize, width = "100%", height = "100%", buffer = 2, horizontal = false } = props;

  const dataSource = createMemo(() => props.dataSource);
  const Renderer = createMemo(() => props.renderer);

  // eslint-disable-next-line @typescript-eslint/init-declarations
  let containerRef: HTMLElement | undefined;

  const phantomSize = createMemo(() => dataSource().length * itemSize);

  const [shiftSize, setShiftSize] = createSignal(0);
  const [startIdx, setStartIdx] = createSignal(0);
  const [endIdx, setEndIdx] = createSignal(0);

  const displayData = createMemo(() => dataSource().slice(startIdx(), endIdx()));

  createEffect(() => {
    if (!containerRef) return;
    const containerSize = Number(getComputedStyle(containerRef).height.replace("px", ""));
    const visibleNum = Math.ceil(containerSize / itemSize);

    // init the displayed data
    setEndIdx(visibleNum + buffer);

    containerRef?.addEventListener("scroll", () => {
      const scrollSize = horizontal ? containerRef?.scrollLeft : containerRef?.scrollTop;
      if (scrollSize == null) return;

      const start = Math.floor(scrollSize / itemSize);
      const bufferedStart = start - buffer < 0 ? start : start - buffer;
      const bufferedEnd =
        start + visibleNum + buffer >= dataSource().length
          ? dataSource().length
          : start + visibleNum + buffer;

      setStartIdx(bufferedStart);
      setEndIdx(bufferedEnd);

      setShiftSize(scrollSize - (scrollSize % itemSize) - (start - bufferedStart) * itemSize);
    });
  });

  const wrapperStyle = createMemo(() => ({ width, height }));
  const phantomStyle = createMemo(() =>
    horizontal ? { width: `${phantomSize()}px` } : { height: `${phantomSize()}px` }
  );
  const contentStyle = createMemo(() =>
    horizontal
      ? { transform: `translateX(${shiftSize()}px)`, display: "flex" }
      : { transform: `translateY(${shiftSize()}px)` }
  );

  return (
    <main class="virtual-list__wrapper" style={wrapperStyle()} ref={containerRef}>
      <div class="virtual-list__phantom" style={phantomStyle()}></div>
      <div class="virtual-list__content" style={contentStyle()}>
        {/* make it compatible with web component */}
        {Renderer()({ list: displayData })}
      </div>
    </main>
  );
};

export * from "./type";
export const virtualListStyle = style;
