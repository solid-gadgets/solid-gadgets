import { Button, buttonStyle, ButtonProps } from "@solid-gadgets/components";
import { customElement } from "solid-element";

export const registerButton = (tagName: string, props: ButtonProps) => {
  console.log("register button props:", props);
  const styledButton = (buttonProps: ButtonProps) => {
    console.log("props from web button:", buttonProps);
    return (
      <>
        <style>{buttonStyle}</style>
        <Button {...buttonProps} />
      </>
    );
  };

  customElement(tagName, props, styledButton);
};
