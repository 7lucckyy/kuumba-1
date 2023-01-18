import Image from "next/image";
import { FunctionComponent } from "react";

import ServiceArrow from "public/img/4115225_bottom_chevron_chevron down_icon.svg"

interface ServicesArrowProps {}

const ServicesArrow: FunctionComponent<ServicesArrowProps> = () => {
  return (
    <div className="lg:w-[136px] flex items-center justify-center">
    <Image
      src={ServiceArrow}
      alt="Services arrow icon"
      // width={136}
      // height={136}
      className='md:-rotate-90'
      />
      </div>
  );
};

export default ServicesArrow;
