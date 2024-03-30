import { getRequestListener } from "@hono/node-server";
import { Elysia, t } from "elysia";
import { onRequest } from "firebase-functions/v2/https";
import { incomingMessageFromExpress } from "./utils/incomingMessageFromExpress";

const app = new Elysia({ aot: false })
  // #region endpoints
  .get("/", () => ({ hello: "Elysia" }))
  .post("/greeting", ({ body: { name } }) => ({ hello: name }), {
    body: t.Object({ name: t.String() }),
  })
  // #endregion
  .get("/bogus", () => ({}));

export const elysia = onRequest((req, res) => {
  getRequestListener(app.fetch)(incomingMessageFromExpress(req), res);
});
