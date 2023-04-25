import { rest } from "msw";
import { MOCK_API_URL } from "../helper/urlApi";
import { userMockData } from "../mock";

export const handlers = [
  rest.get(MOCK_API_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userMockData.results[3]));
  }),
];
