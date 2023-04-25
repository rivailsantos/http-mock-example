"use client";

/**
 * this file will be used in the
 * AXIOS_MOCK_ADAPTER example
 */
import { mockGet } from "@/src/helper/axiosMock";
import { API_BASE_URL } from "@/src/helper/urlApi";
import { userSchema } from "@/src/interfaces/users";
import { userMockData } from "@/src/mock";
import { getSingleUser } from "@/src/service/users";
import { useEffect, useState } from "react";
import { z } from "zod";
import { UserProfileCard } from "../components/userProfile";

type User = z.infer<typeof userSchema>;

export default function MockedUser() {
  if (process.env.NODE_ENV === "development") {
    const url = API_BASE_URL + "/user";
    mockGet(url, 200, userMockData.results[1]);
  }

  const [user, setUser] = useState<User>();
  useEffect(() => {
    (async () => {
      const { data } = await getSingleUser();
      setUser(data);
    })();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <h1 className="text-blue-400">Axios Mock Adapter Example</h1>

        <div className="mt-10">
          {user?.id.value ? (
            <UserProfileCard
              fullName={`${user.name.first} ${user.name.last}`}
              username={user.name.first}
              profilePictureUrl={user.picture.large}
              bio={user.nat}
            />
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </main>
  );
}
