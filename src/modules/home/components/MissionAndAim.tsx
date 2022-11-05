import { FunctionComponent } from "react";

interface MissionAndAimProps {}

const MissionAndAim: FunctionComponent<MissionAndAimProps> = () => {
  return (
    <section className="flex flex-col gap-8 px-4 rounded-lg py-14 sm:py-20 md:py-24 lg:py-32 lg:flex-row sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 md:px-12 lg:px-20 xl:px-24 bg-[#F5F6FF]">
      <div className="flex flex-col w-full gap-1 md:gap-3 lg:gap-5 xl:gap-6">
        <h2 className="font-bold header2">Our mission</h2>
        <p className="header6">
          Language is meant to be a shared experience among people, however, our
          current digital and print media has privatized it to where it is
          experienced alone and made the cost of eBooks prohibitive for both
          readers and public libraries.
        </p>
        <p className="header6">
          Our mission is to change that and drive inclusive access to diverse
          eBooks across the globe by building a platform for both creators and
          readers to easily enjoy and share eBooks.
        </p>
      </div>
      <div className="flex flex-col w-full gap-1 md:gap-3 lg:gap-5 xl:gap-6">
        <h2 className="font-bold header2">Our aim</h2>
        <p className="header6">
          We aim to harness the power of blockchain technology to enable you{" "}
          <span className="font-semibold">save</span> more,{" "}
          <span className="font-semibold">read</span> more,{" "}
          <span className="font-semibold">earn</span> more and{" "}
          <span className="font-semibold">share</span> more of the joy of
          reading.
        </p>
        <p className="header6">
          NFT eBooks will empower authors and publishers to earn more through
          guaranteed lifetime royalties and readers to earn as they read and own
          digital content for themselves.
        </p>
      </div>
    </section>
  );
};

export default MissionAndAim;
