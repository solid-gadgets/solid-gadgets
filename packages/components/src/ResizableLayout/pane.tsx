import { ParentComponent } from "solid-js";

import { PaneProps } from "./type";
import "./index.scss";

export const Pane: ParentComponent<PaneProps> = ({ customClass = "", children, ...rest }) => {
  return (
    <section class={`resizable-splitter__pane-wrapper ${customClass}`} {...rest}>
      {children}
    </section>
  );
};
