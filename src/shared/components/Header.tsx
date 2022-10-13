import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="px-32 -mx-32 shadow shadow-gray-200">
      <div className="flex justify-between py-4">
        <Link href="/">
          <a>
            <span className="text-2xl font-bold">
              <span className="text-[#7077F8]">K</span>
              <span>uumba</span>
              <span>.</span>
            </span>
          </a>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="#">
            <a className="text-gray-500">About Us</a>
          </Link>
          <Link href="#">
            <a className="text-gray-500">Features</a>
          </Link>
          <Link href="#">
            <a className="text-gray-500">Publish</a>
          </Link>
          <Link href="#">
            <a className="text-gray-500">Contact Us</a>
          </Link>
        </div>
        <button className="btn btn-primary btn-sm body-medium">
          Request early access
        </button>
      </div>
    </div>
  );
};

export default Header;
