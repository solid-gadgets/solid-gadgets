import { registerSplitter } from "@solid-gadgets/web-components";

import styleCode from "../../demos/resizableLayout/index.scss";

const splitterDoms = document.querySelectorAll("so-splitter");
splitterDoms.forEach(splitter => {
  splitter.setAttribute("style-code", styleCode);
});
registerSplitter();
