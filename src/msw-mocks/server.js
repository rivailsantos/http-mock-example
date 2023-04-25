import { rest } from "msw";
import { setupServer } from "msw/node";
import { handlers } from "./handlers";
export const server = setupServer(...handlers);

export const overrideHandler = (url, status, data) => {
  server.use(
    rest.get(url, (req, res, ctx) => {
      return res(ctx.status(status), ctx.json(data));
    })
  );
};
