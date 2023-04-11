import { Accessor } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

export interface RendererProps<I = unknown> {
  /** pass as a signal function to be reactive */
  list: Accessor<I[]>;
}
export interface VirtualListProps {
  /** determine how to render each item of the visible items */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderer: (props: RendererProps<any>) => JSX.Element;
  dataSource: readonly unknown[];
  /** scrolling direction, default as vertical */
  horizontal?: boolean;
  /** px of item height/width */
  itemSize: number;
  /** width of the virtual list container */
  width?: string;
  /** height of the virtual list container */
  height?: string;
  /** the extra buffered item at the top and bottom */
  buffer?: number;
}
