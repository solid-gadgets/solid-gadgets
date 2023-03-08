import { testUtil } from ".";

describe("Test", () => {
  it("should log.", () => {
    expect(testUtil.name).toBe("testUtil");
  });
});
