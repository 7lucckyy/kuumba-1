import { FunctionComponent } from "react";
import Bullet from "../../../shared/components/Bullet";

interface HomeRoadMapProps {}

const HomeRoadMap: FunctionComponent<HomeRoadMapProps> = () => {
  return (
    <section className="flex flex-col gap-8 sm:gap-12 md:gap-14 lg:gap-16">
      <div className="text-center">
        <h2 className="mb-3 font-bold sm:mb-4 md:mb-5 lg:mb-6 header2">
          Roadmap
        </h2>
        <span className="text-gray-800 header6">
          We are still in the idea phase and still developing our roadmap
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-4 xl:flex-nowrap md:gap-6 lg:gap-8">
        <div className="bg-[#F5F6FF] flex-grow xl:flex-grow-0 xl:w-full rounded-2xl py-6 md:py-8 lg:py-10 flex flex-col gap-5 md:gap-8 lg:gap-10 xl:gap-12 px-4 md:px-6 lg:px-8">
          <h4 className="font-semibold underline header4">Phase 1</h4>
          <div className="flex flex-col gap-6 text-gray-500 lg:gap-8">
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Planning and research</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Team building</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Prototyping</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Design</span>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F6FF] flex-grow xl:flex-grow-0 xl:w-full rounded-2xl py-6 md:py-8 lg:py-10 flex flex-col gap-5 md:gap-8 lg:gap-10 xl:gap-12 px-4 md:px-6 lg:px-8">
          <h4 className="font-semibold underline header4">Phase 2</h4>
          <div className="flex flex-col gap-6 text-gray-500 lg:gap-8">
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Development</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Wallet integration</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Microtransaction integration</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Community</span>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F6FF] flex-grow xl:flex-grow-0 xl:w-full rounded-2xl py-6 md:py-8 lg:py-10 flex flex-col gap-5 md:gap-8 lg:gap-10 xl:gap-12 px-4 md:px-6 lg:px-8">
          <h4 className="font-semibold underline header4">Phase 3</h4>
          <div className="flex flex-col gap-6 text-gray-500 lg:gap-8">
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Book crowdfunding</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Lending and borrowing</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Book exchange update</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Publish ePubs as NFT eBooks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRoadMap;
