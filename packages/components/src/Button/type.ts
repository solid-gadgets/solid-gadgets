import { JSX } from "solid-js/jsx-runtime";

export interface ButtonProps {
  type?: "default" | "primary";
  children?: (Element | HTMLSlotElement)[] | JSX.Element;
}
