import { Splitter, Pane } from "@solid-gadgets/components";
import "./index.scss";

export default () => {
  return (
    <>
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
            <Pane customClass="my-pane">
              <span class="child-container">child4-1</span>
            </Pane>
            <Pane customClass="my-pane">
              <div class="child-container">child4-2</div>
            </Pane>
            <Pane customClass="my-pane">
              <div class="child-container">child4-3</div>
            </Pane>
            <Pane customClass="my-pane">
              <div class="child-container">child4-4</div>
            </Pane>
          </Splitter>
        </Pane>
        <Pane customClass="my-pane" size="20" minSize="10">
          <div class="child-container">child5</div>
        </Pane>
      </Splitter>
    </>
  );
};
