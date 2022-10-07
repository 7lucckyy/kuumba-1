import { FunctionComponent } from "react";

interface HomeRoadMapProps {}

const HomeRoadMap: FunctionComponent<HomeRoadMapProps> = () => {
  return (
    <div className="flex flex-col gap-24 p-16">
      <div className="text-center">
        <h2 className="mb-6 text-5xl font-bold">Roadmap</h2>
        <span className="text-xl text-gray-800">
          We are still in the idea phase and still developing our road
        </span>
      </div>
      <div className="flex gap-8">
        <div className="bg-[#F5F6FF] rounded-2xl py-10 flex flex-col gap-12 px-8 w-full">
          <h3 className="text-4xl font-semibold underline">Phase 1</h3>
          <div className="flex flex-col gap-8 text-gray-500">
            <span className="text-xl">Planning and research</span>
            <span className="text-xl">Team building</span>
            <span className="text-xl">Prototyping</span>
            <span className="text-xl">Design</span>
          </div>
        </div>
        <div className="bg-[#F5F6FF] rounded-2xl py-10 flex flex-col gap-12 px-8 w-full">
          <h3 className="text-4xl font-semibold underline">Phase 2</h3>
          <div className="flex flex-col gap-8 text-gray-500">
            <span className="text-xl">Development</span>
            <span className="text-xl">Wallet integration</span>
            <span className="text-xl">Microtransaction integration</span>
            <span className="text-xl">Community</span>
          </div>
        </div>
        <div className="bg-[#F5F6FF] rounded-2xl py-10 flex flex-col gap-12 px-8 w-full">
          <h3 className="text-4xl font-semibold underline">Phase 3</h3>
          <div className="flex flex-col gap-8 text-gray-500">
            <span className="text-xl">Book crowdfunding</span>
            <span className="text-xl">Lending and borrowing</span>
            <span className="text-xl">Book exchange update</span>
            <span className="text-xl">Publish ePubs as NFT eBooks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRoadMap;
