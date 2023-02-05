import Link from "next/link";
import { FunctionComponent } from "react";

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <Link href="/">
      <a>
        <span className="text-2xl font-bold">
          <span className="text-[#7077F8]">K</span>
          <span>uumba</span>
          <span>.</span>
        </span>
      </a>
    </Link>
  );
};

export default Logo;
