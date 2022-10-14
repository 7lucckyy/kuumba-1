import { FunctionComponent } from "react";
import Image from "next/image";
import Bullet from "../../../shared/components/Bullet";

interface HomeBookSharingProps {}

const HomeBookSharing: FunctionComponent<HomeBookSharingProps> = () => {
  return (
    <section className="flex flex-col gap-10 lg:flex-row sm:gap-16 md:gap-24 lg:gap-32 xl:gap-36">
      <div className="flex flex-col w-full gap-4">
        <h4 className="font-semibold header4">Book sharing made easier</h4>
        <p className="text-gray-500 header6">
          Want to read a book, but don&apos;t have access to it? Why don&apos;t
          you ask your fellow bookmongers.
        </p>
        <div className="flex flex-col gap-4 mt-4 text-gray-500 md:gap-6 xl:gap-8 sm:mt-6 md:mt-8 xl:mt-10">
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Borrow</span>
          </div>
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Lend</span>
          </div>
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Crowdfund</span>
          </div>
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Read and elevate</span>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F6FF] rounded-2xl w-full"></div>
    </section>
  );
};

export default HomeBookSharing;
