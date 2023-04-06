# Resizable Splitter

[Web Component](../../../web-components/src/ResizableLayout/README.md)
[Demo](https://s-elo.github.io/solid-gadgets/resizable-layout)

## Usage

```jsx
import { Splitter, Pane } from "@solid-gadgets/components";

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
      <Pane customClass="my-pane" minSize="10">
        <div class="child-container">child4-1</div>
      </Pane>
      <Pane customClass="my-pane" minSize="10">
        <div class="child-container">child4-2</div>
      </Pane>
    </Splitter>
  </Pane>
  <Pane customClass="my-pane" size="20" minSize="10">
    <div class="child-container">child5</div>
  </Pane>
</Splitter>;
```

You need firstly to import `Splitter` and `Pane` from `@solid-gadgets/components`.

### Splitter Props

- **customClass** `string`: your customized class name for the splitter wrapper
- **resizeBarClass** `string`: your customized class name for the resize bar
- **horizontal**: `boolean`: whether being split horizontally or vertically, default as `false`
- **pushOtherPane**: `boolean`: whether pushing the following pane while current dragged pane is closing to it.

### Pane Props

- **customClass** `string` your customized class name for the pane wrapper
- **size** `string` a number string for the initial percent size of the pane
- **minSize** `string` a number string for the minimum size of the pane
- **maxSize** `string` a number string for the maximum size of the pane
