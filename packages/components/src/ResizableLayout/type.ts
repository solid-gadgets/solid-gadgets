export enum SplitterDirection {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}
export interface SplitterProps {
  /** default as vertical */
  horizontal?: boolean;
  customClass?: string;
  resizeBarClass?: string;
}

export interface PaneProps {
  customClass?: string;
  /** initial size */
  size?: number | string;
  maxSize?: number | string;
  minSize?: number | string;
}
