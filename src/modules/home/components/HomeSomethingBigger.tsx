import { FunctionComponent } from "react";

interface HomeSomethingBiggerProps {}

const HomeSomethingBigger: FunctionComponent<HomeSomethingBiggerProps> = () => {
  return (
    <div className="flex p-16 gap-36">
      <div className="bg-[#F5F6FF] rounded-2xl w-full"></div>
      <div className="flex flex-col w-full gap-4">
        <h2 className="font-semibold header4">
          Become part of something bigger than yourself
        </h2>
        <p className="text-gray-500 header6">
          Tune into exclusive podcasts created by your favorite creators around
          the globe and connect with readers around the globe
        </p>
        <div className="flex flex-col gap-8 mt-10 text-gray-500">
          <span className="header6">Connect in realtime dialogue</span>
          <span className="header6">Learn new things</span>
          <span className="header6">
            Become part of something bigger than yourself
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeSomethingBigger;
