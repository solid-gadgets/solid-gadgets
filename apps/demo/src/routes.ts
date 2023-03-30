import { lazy } from "solid-js";

import { RouteConfig } from "./type";

export const routes: RouteConfig[] = [
  {
    name: "Button",
    path: "/button",
    component: lazy(async () => import("./demos/button/button")),
  },
  {
    name: "Resizable Layout",
    path: "/resizable-layout",
    component: lazy(async () => import("./demos/resizableLayout/resizable-layout")),
  },
];
