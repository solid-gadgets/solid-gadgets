import { testUtil } from "@solid-gadgets/utils";
import { createSignal } from "solid-js";

import "./button.scss";
import { ButtonProps } from "./type";

const SubButton = () => <div>sub button</div>;

export const Button = ({ type = "default", children }: ButtonProps) => {
  console.log(testUtil());
  console.log("children at button:", children);
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
      <span>Children: {children}</span>
      <SubButton />
    </div>
  );
};
