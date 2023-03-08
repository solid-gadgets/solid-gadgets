import { Button } from "@solid-gadgets/components";
import { render } from "solid-js/web";

const App = () => {
  console.log("call once");
  return <Button />;
};

render(App, document.getElementById("root") as HTMLElement);
