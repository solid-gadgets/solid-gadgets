import { lazy } from "solid-js";

import { RouteConfig } from "./type";

export const routes: RouteConfig[] = [
  {
    name: "Resizable Layout",
    path: "/resizable-layout",
    component: lazy(async () => import("./demos/resizableLayout/resizable-layout")),
  },
  {
    name: "Virtual List",
    path: "/virtual-list",
    component: lazy(async () => import("./demos/virtualList/virtual-list")),
  },
];
