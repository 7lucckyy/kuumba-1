import Link from "next/link";
import { FunctionComponent } from "react";
import footerNavItems from "../utils/footer_nav_items";
import footerSocialLinks from "../utils/footer_social_links";
import AppDownloadLinks from "./AppDownloadLinks";
import Divider from "./Divider";
import Logo from "./Logo";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="flex flex-col gap-6">
      <div className="horizontal-margin">
        <Divider />
      </div>
      <div className="flex flex-col gap-16 lg:flex-row xl:gap-24">
        <div className="flex flex-col gap-8 basis-2/5">
          <span className="body-medium">Get download link</span>
          <AppDownloadLinks />
        </div>

        <div className="flex flex-col justify-between gap-12 px-4 sm:gap-8 sm:px-0 sm:flex-row basis-3/5">
          <div className="flex flex-col gap-3 sm:gap-5">
            <span className="body-medium">Home</span>
            <Link href={footerNavItems[0].route}>
              <a className="text-gray-500 hover:text-info max-w-fit">
                <span>{footerNavItems[0].title}</span>
              </a>
            </Link>
            <a className="text-gray-500 cursor-pointer hover:text-info">
              <span>Request early access</span>
            </a>
          </div>

          <div className="flex flex-col gap-3 sm:gap-5">
            <span className="body-medium">Company</span>
            {footerNavItems.slice(1, 3).map((item, index) => (
              <Link key={index} href={item.route}>
                <a className="text-gray-500 hover:text-info">
                  <span>{item.title}</span>
                </a>
              </Link>
            ))}
            <a className="text-gray-500 cursor-pointer hover:text-info">
              <span>Give feedback</span>
            </a>
          </div>

          <div className="flex flex-col gap-3 sm:gap-5">
            <span className="body-medium">Compliance</span>
            {footerNavItems.slice(3, 5).map((item, index) => (
              <Link key={index} href={item.route}>
                <a className="text-gray-500 hover:text-info">
                  <span>{item.title}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-10">
        <Divider />
        <div className="flex flex-col items-center justify-between gap-8 py-2 md:gap-2 md:flex-row">
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3 md:gap-6 lg:gap-6">
            <Logo />
            <span className="text-center small-base">
              @2022 Kuumba Inc. All Rights Reserved
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-5 md:gap-6 lg:gap-8">
            {footerSocialLinks.map((item, index) => (
              <Link key={index} href={item.route}>
                <a className="p-2 rounded-full bg-primary bg-opacity-10 hover:scale-110">
                  {item.icon}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <Divider />
      </div>
    </footer>
  );
};

export default Footer;
