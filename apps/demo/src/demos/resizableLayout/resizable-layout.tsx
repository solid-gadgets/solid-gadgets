import { Splitter, Pane } from "@solid-gadgets/components";
import { registerPane, registerSplitter } from "@solid-gadgets/web-components";
import { createMemo, createSignal, createEffect } from "solid-js";
import "./index.scss";

export default () => {
  createEffect(() => {
    registerPane();
    registerSplitter();
    const webSplitter = document.createElement("so-splitter");

    webSplitter.setAttribute("custom-class", "splitter-parent");
    webSplitter.setAttribute("push-other-pane", "true");
    //   <so-splitter custom-class="splitter-child" horizontal>
    //   <so-pane custom-class="my-pane">
    //     <div class="child-container">child2-1</div>
    //   </so-pane>
    //   <so-pane custom-class="my-pane">
    //     <div class="child-container">child2-2</div>
    //   </so-pane>
    //   <so-pane custom-class="my-pane">
    //     <div class="child-container">child2-3</div>
    //   </so-pane>
    // </so-splitter>
    webSplitter.innerHTML = `
      <so-pane custom-class="my-pane" maxsize="40" size="30">
        <div class="child-container">
          <section class="content">child1</section>
          <section class="desc">With Maximum size of 40%</section>
        </div>
      </so-pane>
      <so-pane custom-class="my-pane">
        <div class="child-container">child2</div>
      </so-pane>
      <so-pane custom-class="my-pane" minsize="10">
        <div class="child-container">child3</div>
      </so-pane>
      <so-pane custom-class="my-pane">
        <div class="child-container">child4</div>
      </so-pane>
    `;
    document.getElementById("web-component-container")?.append(webSplitter);
  });

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const [renderNum, setRenderNum] = createSignal(4);
  const panes = createMemo(() =>
    new Array(renderNum()).fill(0).map((_, idx) => (
      <Pane customClass="my-pane">
        <span class="child-container">child4-{idx + 1}</span>
      </Pane>
    ))
  );

  const addPane = () => {
    setRenderNum(num => num + 1);
  };
  const subPane = () => {
    setRenderNum(num => num - 1);
  };
  return (
    <>
      <button onclick={addPane}>add a pane</button>
      <button onclick={subPane}>sub a pane</button>
      <Splitter customClass="splitter-parent" resizeBarClass="my-resize-bar" pushOtherPane>
        <Pane customClass="my-pane" minSize="10" size="30" maxSize="40">
          <div class="child-container">
            <section class="content">child1</section>
            <section class="desc">With Maximum size of 40%</section>
          </div>
        </Pane>
        <Pane customClass="my-pane" minSize="10">
          <div class="child-container">child2</div>
        </Pane>
        <Pane customClass="my-pane" minSize="10">
          <div class="child-container">child3</div>
        </Pane>
        <Pane customClass="my-pane" maxSize="50">
          <Splitter customClass="splitter-child" horizontal>
            {/* need to pase the signal to be tracked */}
            {panes}
          </Splitter>
        </Pane>
        <Pane customClass="my-pane" size="20" minSize="10">
          <div class="child-container">child5</div>
        </Pane>
      </Splitter>
      <br />
      <h4>web component:</h4>
      <div id="web-component-container"></div>
    </>
  );
};
