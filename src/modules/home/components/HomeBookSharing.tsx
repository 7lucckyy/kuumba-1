import { FunctionComponent } from "react";

interface HomeBookSharingProps {}

const HomeBookSharing: FunctionComponent<HomeBookSharingProps> = () => {
  return (
    <div className="flex p-16 gap-36">
      <div className="flex flex-col w-full gap-4">
        <h2 className="text-4xl font-semibold">Book sharing made easier</h2>
        <p className="text-xl text-gray-500">
          Want to read a book, but don&apos;t have access to it? Why don&apos;t
          you ask your fellow bookmongers.
        </p>
        <div className="flex flex-col gap-8 mt-10 text-gray-500">
          <span className="text-xl">Borrow</span>
          <span className="text-xl">Lend</span>
          <span className="text-xl">Crowdfund</span>
          <span className="text-xl">Read and elevate</span>
        </div>
      </div>
      <div className="bg-[#F5F6FF] rounded-2xl w-full"></div>
    </div>
  );
};

export default HomeBookSharing;
