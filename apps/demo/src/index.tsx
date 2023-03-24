import { Button } from "@solid-gadgets/components";
import { registerButton } from "@solid-gadgets/web-components";
import { render } from "solid-js/web";

registerButton("web-button", {
  type: "primary",
  children: document.createElement("div"),
});

const App = () => {
  console.log("call once");
  return <Button>button children</Button>;
};

const root = document.getElementById("root");
if (root) {
  render(App, root);
}
