import { Button, buttonStyle, ButtonProps } from "@solid-gadgets/components";
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
          <slot>default slot</slot>
          <slot name="header"></slot>
        </Button>
      </>
    );
  };

  // you must provide the default props values so that we can use the props at web-component
  customElement("so-button", defaultProps, styledButton);
};
