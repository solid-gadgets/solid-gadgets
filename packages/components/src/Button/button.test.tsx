import { cleanup, render } from "solid-testing-library";

import { Button } from "./button";

describe("Button", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it("should render.", () => {
    const button = render(() => <Button />);

    expect(button.baseElement).toBeDefined();
  });
});
