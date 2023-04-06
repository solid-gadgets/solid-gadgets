import { lazy } from "solid-js";

export interface RouteConfig {
  name: string;
  path: string;
  component: ReturnType<typeof lazy>;
}
