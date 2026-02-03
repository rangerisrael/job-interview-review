import { isUndefined } from "lodash";
import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e: unknown) {
    if (e !== null && typeof e == "object" && "message" in e) {
      return e.message;
    }

    if (e instanceof Error) {
      return e.message;
    }

    return (e as Error).message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
