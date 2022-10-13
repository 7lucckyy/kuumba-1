import { FunctionComponent } from "react";

interface HomeMicrotransactionProps {}

const HomeMicrotransaction: FunctionComponent<
  HomeMicrotransactionProps
> = () => {
  return (
    <div className="flex p-16 gap-36">
      <div className="bg-[#F5F6FF] rounded-2xl w-full"></div>
      <div className="flex flex-col w-full gap-4">
        <h2 className="font-semibold header4">Microtransactions</h2>
        <p className="text-gray-500 header6">
          Stream microtransaction and only pay for what you read by paying per
          page, per chapters or even per percentage enabling you to save more
          and explore more.
        </p>
        <div className="flex flex-col gap-8 mt-10 text-gray-500">
          <span className="header6">Select eBooks</span>
          <span className="header6">Start reading</span>
          <span className="header6">Only pay for what you read</span>
          <span className="header6">Earn as you read and stop anytime</span>
        </div>
      </div>
    </div>
  );
};

export default HomeMicrotransaction;
