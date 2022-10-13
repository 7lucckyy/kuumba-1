import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="bg-[#4169E1] -mx-32 py-14 px-12">
      <div className="w-3/5 mx-auto text-center text-white">
        <h1 className="mb-4 font-medium header2">
          If you are interested in promoting lifelong reading and learning
        </h1>
        <p className="w-3/5 mx-auto header6">
          Are you an author, publisher or an agency? Get in touch with us at{" "}
          <span className="font-semibold">publish@kuumba.com</span>
        </p>
        <div className="flex justify-center gap-6 mt-10">
          <div className="form-control">
            <label className="input-group">
              <span className="text-white bg-neutral">Email</span>
              <input
                type="text"
                placeholder="Enter your email address"
                className="text-black input input-bordered"
              />
            </label>
          </div>
          <button className="rounded-full body-base btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
