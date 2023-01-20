import { FunctionComponent } from "react";
import MailchimpForm from "./Mailchimp/Mailchimp";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="bg-[#4169E1] horizontal-margin py-14 px-4 md:px-8 lg:px-12">
      <div className="w-full mx-auto text-center text-white md:w-4/5 xl:w-3/5">
        <h2 className="mb-4 font-medium header2">
          If you are interested in promoting lifelong reading and learning
        </h2>
        <p className="w-4/5 mx-auto md:w-3/5 header6">
          Are you an author, publisher or an agency? Get in touch with us at{" "}
          <span className="font-semibold">publish@kuumba.com</span>
        </p>
      </div>
      <MailchimpForm/>
    </footer>
  );
};

export default Footer;
