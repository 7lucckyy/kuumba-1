import Routes from "../constants/routes";
import { INavItem } from "../types/interfaces";

const navItems: INavItem[] = [
  {
    title: "About Us",
    route: Routes.ABOUT_US,
  },
  {
    title: "Features",
    route: Routes.FEATURES,
  },
  // {
  //   title: "Publish",
  //   route: Routes.PUBLISH,
  // },
  {
    title: "Contact Us",
    route: Routes.CONTACT_US,
  },
];

export default navItems;
