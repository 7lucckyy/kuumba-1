import Routes from "../constants/routes";
import { INavItem } from "../types/interfaces";
import { FcAbout } from "react-icons/fc";
import { GrContactInfo } from "react-icons/gr";
import { FaCogs } from "react-icons/fa";

const navItems: INavItem[] = [
  {
    title: "About Us",
    route: "/#about-us",
    icon: <FcAbout className="text-3xl" />,
  },
  {
    title: "Features",
    route: Routes.FEATURES,
    icon: <FaCogs className="text-3xl" style={{ fill: "#A749BC" }} />,
  },
  {
    title: "Contact Us",
    route: '/#contact-us',
    icon: <GrContactInfo className="text-3xl" />,
  },
];

export default navItems;
