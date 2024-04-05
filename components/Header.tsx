import Image from "next/image";
import Link from "next/link";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Container from "./Container";

const Header = () => {
  return (
    <header className="py-4 fixed w-full z-50 bg-gradient-to-b from-gray-900 via-gray-900/50 to-transparent">
      <Container>
        <nav className="flex justify-between items-center w-full">
          <Link href="/">
            <Image
              src={"/images/logo.png"}
              alt="anything"
              width={200}
              height={40}
              className="w-32 object-contain"
            />
          </Link>
          <ul className="flex items-center gap-8">
            <NavLink title={"Movies"} path={"/movies"} />
            <NavLink title={"TV Shows"} path={"/tv-shows"} />
            {
              <li className="w-fit h-fit">
                <Link href="/search">
                  <HiMagnifyingGlass className="text-white text-2xl" />
                </Link>
              </li>
            }
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

type NavLinkProps = {
  title: string;
  path: string;
};

const NavLink = ({ title, path }: NavLinkProps) => (
  <li
    className="text-white font-semibold
  "
  >
    <Link href={path}>{title}</Link>
  </li>
);
