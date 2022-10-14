import { FunctionComponent } from "react";
import Image from "next/image";
import Bullet from "../../../shared/components/Bullet";

interface HomeSomethingBiggerProps {}

const HomeSomethingBigger: FunctionComponent<HomeSomethingBiggerProps> = () => {
  return (
    <section className="flex flex-col gap-10 lg:flex-row sm:gap-16 md:gap-24 lg:gap-32 xl:gap-36">
      <div className="bg-[#F5F6FF] rounded-2xl w-full"></div>
      <div className="flex flex-col w-full gap-4">
        <h4 className="font-semibold header4">
          Become part of something bigger than yourself
        </h4>
        <p className="text-gray-500 header6">
          Tune into exclusive podcasts created by your favorite creators around
          the globe and connect with readers around the globe
        </p>
        <div className="flex flex-col gap-4 mt-4 text-gray-500 md:gap-6 xl:gap-8 sm:mt-6 md:mt-8 xl:mt-10">
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Connect in realtime dialogue</span>
          </div>
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Learn new things</span>
          </div>
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">
              Become part of something bigger than yourself
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSomethingBigger;
