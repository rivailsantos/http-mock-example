import { userSchema } from "@/src/interfaces/users";
import Link from "next/link";
import { z } from "zod";

type User = z.infer<typeof userSchema>;

type StripedType = {
  items: User[];
};

const StripedList = ({ items }: StripedType) => {
  return (
    <ul className="divide-y divide-gray-200 bg-white">
      {items?.map((item, index) => (
        <Link href="/mocked-user">
          <li
            key={`${item.id}`}
            className={`${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            } px-6 py-4`}
          >
            <span className="text-black">{`${item.name.title} ${item.name.first}`}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export { StripedList };
