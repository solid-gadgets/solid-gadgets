import { Button } from "@solid-gadgets/components";
import { render } from "solid-js/web";

const App = () => {
  console.log("call once");
  return <Button />;
};

const root = document.getElementById("root");
if (root) {
  render(App, root);
}
