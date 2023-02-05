import { FunctionComponent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import horizontalSliderItem from "../../../shared/animations/horizontal_slider_item";
import { BiChevronRight } from "react-icons/bi";

interface HomeServiceProps {
  index: number;
  title: string;
  imageUrl: string;
  description: string;
}

const HomeService: FunctionComponent<HomeServiceProps> = ({
  index,
  title,
  imageUrl,
  description,
}) => {
  return (
    <motion.div
      className="bg-[#0C1B3A] text-white flex flex-col justify-between items-center rounded-lg px-4 sm:px-6 md:px-10 lg:px-14 py-8 text-center basis-1/4"
      custom={index}
      variants={horizontalSliderItem}
    >
      <div className="flex flex-col gap-6">
        <h6 className="font-medium !leading-[18px] header6">{title}</h6>
        <Image src={imageUrl} alt="Read 2 earn icon" width={60} height={60} />
        <p className="small-base">{description}</p>
      </div>

      <span className="flex items-center gap-1 mt-8 text-base cursor-pointer lg:gap-2 lg:font-medium lg:header6 text-primary hover:scale-105">
        GET STARTED <BiChevronRight className="text-2xl" />
      </span>
    </motion.div>
  );
};

export default HomeService;
