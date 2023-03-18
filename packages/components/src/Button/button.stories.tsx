import { Button } from "./button";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Button",
  component: Button,
};

export const PrimaryButton = () => <Button />;
PrimaryButton.storyName = "Primary Button";
