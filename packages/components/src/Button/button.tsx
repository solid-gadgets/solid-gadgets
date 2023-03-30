import { createSignal } from "solid-js";

import "./button.scss";
import { ButtonProps } from "./type";

export const SubButton = () => <div>sub button</div>;

export const Button = ({ type = "default", children }: ButtonProps) => {
  console.log((children as HTMLSlotElement)?.children);
  if (Array.isArray(children)) {
    console.log("button children:", children); // slots
    console.log(
      "button children names:",
      (children as HTMLSlotElement[]).map(c => {
        c.setAttribute?.("style", "color: blue");
        console.log("slot children", c.children);
        return c.name;
      })
    ); // slots
  }
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <div>{type} Button</div>
      <button class="button" onClick={() => setCount(count() - 1)}>
        -
      </button>
      <span style={{ color: type === "primary" ? "brown" : "black" }}>{count}</span>
      <button class="button" onClick={() => setCount(count() + 1)}>
        +
      </button>
      <h4>Children:</h4>
      {children}
      <h4>other component</h4>
      <SubButton />
    </div>
  );
};
