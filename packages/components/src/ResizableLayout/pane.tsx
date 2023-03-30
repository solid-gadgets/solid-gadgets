import { ParentComponent } from "solid-js";

import { PaneProps } from "./type";
import "./index.scss";

export const Pane: ParentComponent<PaneProps> = ({ customClass = "", children }) => {
  return <section class={`pane-wrapper ${customClass}`}>{children}</section>;
};
