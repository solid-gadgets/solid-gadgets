import { Button } from "@solid-gadgets/components";
import { registerButton } from "@solid-gadgets/web-components";
import { render } from "solid-js/web";

registerButton({ type: "default", children: () => "children" });

const App = () => {
  console.log("call once");
  return (
    <Button>
      <div>button children1</div>
      <div>button children2</div>
    </Button>
  );
};

const root = document.getElementById("root");
if (root) {
  render(App, root);
}
