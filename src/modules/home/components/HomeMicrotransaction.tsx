import { FunctionComponent } from "react";
import Image from "next/image";
import Bullet from "../../../shared/components/Bullet";

interface HomeMicrotransactionProps {}

const HomeMicrotransaction: FunctionComponent<
  HomeMicrotransactionProps
> = () => {
  return (
    <section className="flex flex-col gap-10 lg:flex-row sm:gap-16 md:gap-24 lg:gap-32 xl:gap-36">
      <div className="bg-[#F5F6FF] rounded-2xl w-full"></div>
      <div className="flex flex-col w-full gap-4">
        <h4 className="font-semibold header4">Microtransactions</h4>
        <p className="text-gray-500 header6">
          Stream microtransaction and only pay for what you read by paying per
          page, per chapters or even per percentage enabling you to save more
          and explore more.
        </p>
        <div className="flex flex-col gap-4 mt-4 text-gray-500 md:gap-6 xl:gap-8 sm:mt-6 md:mt-8 xl:mt-10">
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Select eBooks</span>
          </div>
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Start reading</span>
          </div>
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Only pay for what you read</span>
          </div>
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Earn as you read and stop anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMicrotransaction;
