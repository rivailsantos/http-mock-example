import { AxiosResponse } from "axios";
import { z } from "zod";
import { apiInstance } from "../helper/apiServiceHelper";
import { userSchema } from "../interfaces/users";

type User = z.infer<typeof userSchema>;

const getUsers = async () => {
  return await apiInstance.get("/users");
};

const getSingleUser = async (): Promise<AxiosResponse<User>> => {
  let url = "/user";
  if (process.env.NODE_ENV === "production") {
    url = "/users?get=first";
  }
  return await apiInstance.get(url);
};

export { getUsers, getSingleUser };
