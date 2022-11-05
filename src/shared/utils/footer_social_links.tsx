import {
  FaLinkedinIn,
  FaTwitter,
  FaDiscord,
  FaInstagramSquare,
} from "react-icons/fa";
import { SocialLink } from "../types/interfaces";

const footerSocialLinks: SocialLink[] = [
  {
    icon: <FaLinkedinIn className="text-xl text-primary" />,
    route: "#",
  },
  {
    icon: <FaTwitter className="text-xl text-primary" />,
    route: "#",
  },
  {
    icon: <FaDiscord className="text-xl text-primary" />,
    route: "#",
  },
  {
    icon: <FaInstagramSquare className="text-xl text-primary" />,
    route: "#",
  },
];

export default footerSocialLinks;
