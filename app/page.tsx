import { getUsers } from "@/src/service/users";
import { StripedList } from "./components/stripedList";

export default async function Home() {
  const { data } = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <h1>Axios Mock Adapter Example</h1>
        <div className="mt-10">
          <StripedList items={data.results} />
        </div>
      </div>
    </main>
  );
}
