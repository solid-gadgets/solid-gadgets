/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Button, buttonStyle, ButtonProps, SubButton } from "@solid-gadgets/components";
import { customElement } from "solid-element";

export const registerButton = (defaultProps: ButtonProps) => {
  const styledButton = (buttonProps: ButtonProps) => {
    return (
      <>
        <style>
          {`* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }`}
          {buttonStyle}
        </style>
        <Button {...buttonProps}>
          <slot></slot>
          <slot>default slot</slot>
          <slot name="header"></slot>
          <slot name="list"></slot>
        </Button>
      </>
    );
  };

  // you must provide the default props values so that we can use the props at web-component
  customElement("so-button", defaultProps, styledButton);
};

export const registerSubButton = () => {
  customElement("so-sub-button", SubButton);
};
