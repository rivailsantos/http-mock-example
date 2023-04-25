import MockAdapter from "axios-mock-adapter";
import { apiInstance } from "./apiServiceHelper";

export const mockGet = (url: string, status: number, data: Object) => {
  const mock = new MockAdapter(apiInstance);
  return mock.onGet(url).reply(status, data);
};
