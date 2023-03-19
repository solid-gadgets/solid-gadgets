import { Button } from "@solid-gadgets/components";
import { customElement } from "solid-element";
import { render } from "solid-js/web";

customElement("so-button", {}, Button);

const App = () => {
  console.log("call once");
  return <Button />;
};

const root = document.getElementById("root");
if (root) {
  render(App, root);
}
