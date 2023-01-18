import Link from "next/link";
import { FunctionComponent } from "react";
import Routes from "../constants/routes";
import navItems from "../utils/nav_items";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDrawerContext } from "../contexts/DrawerContext";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const { toggleDrawer } = useDrawerContext();

  return (
    <header className="shadow horizontal-padding horizontal-margin shadow-gray-200">
      <div className="flex flex-row-reverse lg:flex-row justify-between py-4">
        <GiHamburgerMenu
          className="inline-block text-3xl cursor-pointer lg:hidden"
          onClick={toggleDrawer}
        />
        <Link href="/">
          <a>
            <span className="text-2xl font-bold">
              <span className="text-[#7077F8]">K</span>
              <span>uumba</span>
              <span>.</span>
            </span>
          </a>
        </Link>
        <div className="items-center hidden gap-6 lg:flex">
          {navItems.map((link, index) => (
            <Link key={index} href={link.route}>
              <a className="text-gray-500 hover:text-info">{link.title}</a>
            </Link>
          ))}
        </div>
        <div className="items-center hidden gap-6 lg:flex">
          <Link href={Routes.PUBLISH}>
            <a className="btn btn-accent hover:text-primary-content btn-sm body-medium">Publish</a>
          </Link>
          <button className="btn btn-primary btn-sm body-medium">
            Request early access
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
