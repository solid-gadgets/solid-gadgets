# Resizable Splitter

[Solid Component](../../../components/src/ResizableLayout/README.md)
[Demo](https://s-elo.github.io/solid-gadgets/src/web-demos/resizableLayout/index.html)

## Usage

```js
import { registerSplitter } from "@solid-gadgets/web-components";
registerSplitter();
```

You need to firstly register the solid component as a web component, then you can use `so-splitter` as a web component.

```html
<so-splitter custom-class="splitter-parent" push-other-pane="true">
  <div custom-class="my-pane" max-size="40" size="30">
    <div class="child-container">
      <section class="content">child1</section>
      <section class="desc">With Maximum size of 40%</section>
    </div>
  </div>
  <div custom-class="my-pane">
    <so-splitter custom-class="splitter-child" horizontal="true">
      <div custom-class="my-pane">
        <so-splitter custom-class="splitter-child">
          <div custom-class="my-pane">
            <div class="child-container">child2-1-1</div>
          </div>
          <div custom-class="my-pane">
            <div class="child-container">child2-1-2</div>
          </div>
        </so-splitter>
      </div>
      <div custom-class="my-pane">
        <div class="child-container">child2-2</div>
      </div>
      <div custom-class="my-pane">
        <div class="child-container">child2-3</div>
      </div>
    </so-splitter>
  </div>
  <div custom-class="my-pane" min-size="10">
    <div class="child-container">child3</div>
  </div>
  <div custom-class="my-pane">
    <div class="child-container">child4</div>
  </div>
</so-splitter>
```

You do not need the `Pane` when using web component, the children of `so-splitter` can be any type of html tag with [Pane Props](#pane-props).

**Note that you need to manually pass you customized style code/link to the splitter, since shadow dom will isolate the style outside**

```js
import { registerSplitter } from "@solid-gadgets/web-components";
// import the style code as string
import styleCode from "/xxx/xxx/my-style.scss";

const splitterDoms = document.querySelectorAll("so-splitter");
splitterDoms.forEach(splitter => {
  splitter.setAttribute("style-code", styleCode);

  // or pass the style link url
  splitter.setAttribute("style-link", "https://style-link/xxx");
});

registerSplitter();
```

### Splitter Props

```html
<so-splitter
  custom-class="my-splitter"
  push-other-pane="true"
  style-code=".red{color:red}"
  style-link="https://style-link/xxx"
  resize-bar-class="my-resize-bar"
  horizontal="true"
></so-splitter>
```

### Pane Props

within `so-splitter`, any html tag can be used as a pane

```html
<so-splitter>
  <section custom-class="my-pane" size="20" min-size="10" max-size="50">xxxx</section>
</so-splitter>
```
