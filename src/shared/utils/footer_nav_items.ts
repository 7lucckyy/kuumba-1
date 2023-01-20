import Routes from "../constants/routes";
import { INavItem } from "../types/interfaces";

const footerNavItems: INavItem[] = [
  {
    title: "Publish",
    route: Routes.PUBLISH,
  },
  {
    title: "About Us",
    route: '/#about-us',
  },
  {
    title: "Contact Us",
    route: '/#contact-us',
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
