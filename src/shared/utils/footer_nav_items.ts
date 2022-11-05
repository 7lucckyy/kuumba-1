import Routes from "../constants/routes";
import { INavItem } from "../types/interfaces";

const footerNavItems: INavItem[] = [
  {
    title: "Publish",
    route: Routes.PUBLISH,
  },
  {
    title: "About Us",
    route: Routes.ABOUT_US,
  },
  {
    title: "Contact Us",
    route: Routes.CONTACT_US,
  },
  {
    title: "Terms",
    route: Routes.TERMS_OF_SERVICE,
  },
  {
    title: "Privacy",
    route: Routes.PRIVACY_POLICY,
  },
];

export default footerNavItems;
