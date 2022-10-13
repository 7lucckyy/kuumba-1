import { FunctionComponent } from "react";

interface HomeRoadMapProps {}

const HomeRoadMap: FunctionComponent<HomeRoadMapProps> = () => {
  return (
    <div className="flex flex-col gap-24 p-16">
      <div className="text-center">
        <h2 className="mb-6 font-bold header2">Roadmap</h2>
        <span className="text-gray-800 header6">
          We are still in the idea phase and still developing our road
        </span>
      </div>
      <div className="flex gap-8">
        <div className="bg-[#F5F6FF] rounded-2xl py-10 flex flex-col gap-12 px-8 w-full">
          <h3 className="font-semibold underline header4">Phase 1</h3>
          <div className="flex flex-col gap-8 text-gray-500">
            <span className="header6">Planning and research</span>
            <span className="header6">Team building</span>
            <span className="header6">Prototyping</span>
            <span className="header6">Design</span>
          </div>
        </div>
        <div className="bg-[#F5F6FF] rounded-2xl py-10 flex flex-col gap-12 px-8 w-full">
          <h3 className="font-semibold underline header4">Phase 2</h3>
          <div className="flex flex-col gap-8 text-gray-500">
            <span className="header6">Development</span>
            <span className="header6">Wallet integration</span>
            <span className="header6">Microtransaction integration</span>
            <span className="header6">Community</span>
          </div>
        </div>
        <div className="bg-[#F5F6FF] rounded-2xl py-10 flex flex-col gap-12 px-8 w-full">
          <h3 className="font-semibold underline header4">Phase 3</h3>
          <div className="flex flex-col gap-8 text-gray-500">
            <span className="header6">Book crowdfunding</span>
            <span className="header6">Lending and borrowing</span>
            <span className="header6">Book exchange update</span>
            <span className="header6">Publish ePubs as NFT eBooks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRoadMap;
