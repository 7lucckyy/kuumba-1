import { FunctionComponent } from "react";

interface HomeMicrotransactionProps {}

const HomeMicrotransaction: FunctionComponent<
  HomeMicrotransactionProps
> = () => {
  return (
    <div className="flex p-16 gap-36">
      <div className="bg-[#F5F6FF] rounded-2xl w-full"></div>
      <div className="flex flex-col w-full gap-4">
        <h2 className="text-4xl font-semibold">Microtransactions</h2>
        <p className="text-xl text-gray-500">
          Stream microtransaction and only pay for what you read by paying per
          page, per chapters or even per percentage enabling you to save more
          and explore more.
        </p>
        <div className="flex flex-col gap-8 mt-10 text-gray-500">
          <span className="text-xl">Select eBooks</span>
          <span className="text-xl">Start reading</span>
          <span className="text-xl">Only pay for what you read</span>
          <span className="text-xl">Earn as you read and stop anytime</span>
        </div>
      </div>
    </div>
  );
};

export default HomeMicrotransaction;
