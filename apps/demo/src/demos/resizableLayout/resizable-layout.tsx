import { Splitter, Pane } from "@solid-gadgets/components";
import "./index.scss";

export default () => {
  const childStyle = { width: "100%", height: "100%" };

  return (
    <>
      <Splitter customClass="splitter-parent" horizontal>
        <Pane>
          <div style={{ ...childStyle, background: "brown" }}>child1</div>
        </Pane>
        <Pane customClass="my-pane">
          <div style={{ ...childStyle, background: "lightblue" }}>child2</div>
        </Pane>
        <Pane customClass="my-pane">
          <div style={{ ...childStyle, background: "pink" }}>child3</div>
        </Pane>
        <Pane customClass="my-pane">
          <Splitter customClass="splitter-child">
            <Pane customClass="my-pane">
              <div style={{ ...childStyle, background: "lightblue" }}>child4-1</div>
            </Pane>
            <Pane customClass="my-pane">
              <div style={{ ...childStyle, background: "lightblue" }}>child4-2</div>
            </Pane>
          </Splitter>
        </Pane>
      </Splitter>
    </>
  );
};
