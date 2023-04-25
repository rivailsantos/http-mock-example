import Link from "next/link";
import { FunctionComponent } from "react";

type HeaderProps = {
  title: string;
};

const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="mocked-user" className="hover:text-gray-300">
                Mocked User
              </Link>
            </li>
            <li>
              <Link href="mocked-user-profile" className="hover:text-gray-300">
                Mocked User Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
