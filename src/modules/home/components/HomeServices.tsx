import { FunctionComponent } from "react";
import Image from "next/image";
import ServicesArrow from "../../../shared/components/ServicesArrow";
import { motion } from "framer-motion";
import horizontalSliderList from "../../../shared/animations/horizontal_slider_list";
import horizontalSliderItem from "../../../shared/animations/horizontal_slider_item";

interface HomeServicesProps {}

const HomeServices: FunctionComponent<HomeServicesProps> = () => {
  return (
    <motion.section
      className="bg-[#0C1B3A] text-white flex flex-col lg:flex-row gap-3 md:gap-6 lg:gap-6 p-6 md:p-10 lg:p-16 rounded-2xl"
      variants={horizontalSliderList}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex items-start gap-3"
        custom={0}
        variants={horizontalSliderItem}
      >
        <div className="max-w-[12px] sm:min-w-[16px] md:min-w-[20px]">
          <Image
            src="/img/read2earn.svg"
            alt="Read 2 earn icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-medium !leading-[18px] header6">Read2Earn</h6>
          <p className="small-base">
            Earn PEN tokens by reading and supporting other readers
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center"
        custom={1}
        variants={horizontalSliderItem}
      >
        <ServicesArrow />
      </motion.div>
      <motion.div
        className="flex items-start gap-3"
        custom={2}
        variants={horizontalSliderItem}
      >
        <div className="max-w-[12px] sm:min-w-[16px] md:min-w-[20px]">
          <Image
            src="/img/microtransaction.svg"
            alt="Microtransaction icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-medium !leading-[18px] header6">
            Microtransaction
          </h6>
          <p className="small-base">
            Enabling you to explore more titles and only paying for what you
            read / listened to
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center"
        custom={3}
        variants={horizontalSliderItem}
      >
        <ServicesArrow />
      </motion.div>
      <motion.div
        className="flex items-start gap-3"
        custom={4}
        variants={horizontalSliderItem}
      >
        <div className="max-w-[12px] sm:min-w-[16px] md:min-w-[20px]">
          <Image
            src="/img/connect.svg"
            alt="Connect icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-medium !leading-[18px] header6">Connect</h6>
          <p className="small-base">
            Connect with other readers, authors and publishers
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center"
        custom={5}
        variants={horizontalSliderItem}
      >
        <ServicesArrow />
      </motion.div>
      <motion.div
        className="flex items-start gap-3"
        custom={6}
        variants={horizontalSliderItem}
      >
        <div className="max-w-[12px] sm:min-w-[16px] md:min-w-[20px]">
          <Image
            src="/img/nft_ebooks.svg"
            alt="Nft eBooks icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-medium !leading-[18px] header6">NFT eBooks</h6>
          <p className="small-base">
            Generate lifetime royalties, own eBooks and audiobooks
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HomeServices;
