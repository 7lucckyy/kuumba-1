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
    route: "https://www.linkedin.com/company/kuumba",
  },
  {
    icon: <FaTwitter className="text-xl text-primary" />,
    route: "https://www.twitter.com/kuumba_books",
  },
  {
    icon: <FaDiscord className="text-xl text-primary" />,
    route: "https://discord.com/invite/j67DckfM",
  },
  {
    icon: <FaInstagramSquare className="text-xl text-primary" />,
    route: "https://www.instagram.com/kuumba_books/",
  },
];

export default footerSocialLinks;
