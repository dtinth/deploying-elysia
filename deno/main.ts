import { Elysia, t } from "npm:elysia@1.0.9";

const app = new Elysia()
  // #region endpoints
  .get("/", () => ({ hello: "Elysia" }))
  .post("/greeting", ({ body: { name } }) => ({ hello: name }), {
    body: t.Object({ name: t.String() }),
  })
  // #endregion
  .get("/bogus", () => ({}));

Deno.serve(app.fetch);
