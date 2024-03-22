import { describe, expect, it } from "bun:test";
import { Elysia } from "elysia";

describe("App", () => {
  it("return a response", async () => {
    const app = new Elysia().get("/", () => "💩");

    const response = await app
      .handle(new Request("http://localhost/"))
      .then((res) => res.text());

    expect(response).toBe("💩");
  });
});
