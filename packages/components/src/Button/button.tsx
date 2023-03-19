import { testUtil } from "@solid-gadgets/utils";
import { createSignal } from "solid-js";

const SubButton = () => <div>sub button</div>;

const style = {
  button: {
    background: "green",
  },
};

export const Button = () => {
  console.log(testUtil());
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <div>Plain Button</div>
      <button style={style.button} onClick={() => setCount(count() - 1)}>
        -
      </button>
      <span>{count}</span>
      <button style={style.button} onClick={() => setCount(count() + 1)}>
        +
      </button>
      <SubButton />
    </div>
  );
};
