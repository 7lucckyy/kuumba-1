import Image from "next/image";
import { FunctionComponent } from "react";

interface ServicesArrowProps {}

const ServicesArrow: FunctionComponent<ServicesArrowProps> = () => {
  return (
    <Image
      src="/img/services_arrow.svg"
      alt="Services arrow icon"
      width={136}
      height={136}
      className='rotate-90 lg:rotate-0'
    />
  );
};

export default ServicesArrow;
