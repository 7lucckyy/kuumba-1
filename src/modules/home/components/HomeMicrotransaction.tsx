import { FunctionComponent } from "react";
import Image from "next/image";
import Bullet from "../../../shared/components/Bullet";

interface HomeMicrotransactionProps {}

const HomeMicrotransaction: FunctionComponent<
  HomeMicrotransactionProps
> = () => {
  return (
    <section className="flex flex-col gap-4 lg:items-center sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 lg:flex-row">
      <div className="flex flex-col w-full gap-4 basis-1/2">
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
      <div className="w-full basis-1/2">
        <Image
          src="/img/home_microtransaction_mockups.svg"
          alt="Iphone mockups from home microtransaction section"
          width={950}
          height={950}
        />
      </div>
    </section>
  );
};

export default HomeMicrotransaction;
