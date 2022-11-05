import { FunctionComponent } from "react";

interface DividerProps {}

const Divider: FunctionComponent<DividerProps> = () => {
  return (
    <div className="divider before:h-[1px] after:h-[1px] before:bg-gray-400 after:bg-gray-400"></div>
  );
};

export default Divider;
