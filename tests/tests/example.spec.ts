import { expect, test } from "@playwright/test";

test("GET", async ({ request }) => {
  const response = await request.get("/");
  expect(response.status()).toBe(200);
  expect(await response.json()).toEqual({ hello: "Elysia" });
});

test("POST JSON", async ({ request }) => {
  const response = await request.post("/greeting", {
    data: { name: "Playwright" },
  });
  expect(response.status()).toBe(200);
  expect(await response.json()).toEqual({ hello: "Playwright" });
});
