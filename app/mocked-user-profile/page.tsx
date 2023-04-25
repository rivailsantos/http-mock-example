"use client";
/**
 * this file will be used in the msw example
 */
import { useEffect, useState } from "react";
import { z } from "zod";
import { userSchema } from "../../src/interfaces/users";
import { getSingleUser } from "../../src/service/users";
import { UserProfileCard } from "../components/userProfile";

type User = z.infer<typeof userSchema>;

if (process.env.NODE_ENV === "development") {
  const { worker } = require("../../src/msw-mocks/browser");
  worker.start();
}

export default function MockedUserProfile() {
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
        <h1 className="text-red-400">MSW Example</h1>

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
