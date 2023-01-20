import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import horizontalSliderItem from "../../../shared/animations/horizontal_slider_item";
import horizontalSliderList from "../../../shared/animations/horizontal_slider_list";
import transitionHorizontal from "../../../shared/animations/transition_horizontal";
import transitionToLeft from "../../../shared/animations/transition_to_left";
import transitionToRight from "../../../shared/animations/transition_to_right";
import Bullet from "../../../shared/components/Bullet";

interface HomeRoadMapProps {}

const HomeRoadMap: FunctionComponent<HomeRoadMapProps> = () => {
  return (
    <section className="flex flex-col gap-8 sm:gap-12 md:gap-14 lg:gap-16">
      <motion.div
        className="text-center"
        variants={transitionHorizontal}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2
          className="mb-3 font-bold sm:mb-4 md:mb-5 lg:mb-6 header2"
          custom={360}
          variants={transitionToRight}
        >
          Roadmap
        </motion.h2>
        <motion.div
          className="text-gray-800 header6"
          custom={360}
          variants={transitionToLeft}
        >
          We are still in the idea phase and still developing our roadmap
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center gap-4 xl:flex-nowrap md:gap-6 lg:gap-8"
        variants={horizontalSliderList}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-[#F5F6FF] flex-grow xl:flex-grow-0 xl:w-full rounded-2xl py-6 md:py-8 lg:py-10 flex flex-col gap-5 md:gap-8 lg:gap-10 xl:gap-12 px-4 md:px-6 lg:px-8"
          custom={0}
          variants={horizontalSliderItem}
        >
          <h4 className="font-semibold underline header4">Phase 1</h4>
          <div className="flex flex-col gap-6 text-gray-500 lg:gap-8">
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Planning and research</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Team building</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Design</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Prototyping</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#F5F6FF] flex-grow xl:flex-grow-0 xl:w-full rounded-2xl py-6 md:py-8 lg:py-10 flex flex-col gap-5 md:gap-8 lg:gap-10 xl:gap-12 px-4 md:px-6 lg:px-8"
          custom={1}
          variants={horizontalSliderItem}
        >
          <h4 className="font-semibold underline header4">Phase 2</h4>
          <div className="flex flex-col gap-6 text-gray-500 lg:gap-8">
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Development</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Wallet integration</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Microtransaction integration</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Community</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#F5F6FF] flex-grow xl:flex-grow-0 xl:w-full rounded-2xl py-6 md:py-8 lg:py-10 flex flex-col gap-5 md:gap-8 lg:gap-10 xl:gap-12 px-4 md:px-6 lg:px-8"
          custom={2}
          variants={horizontalSliderItem}
        >
          <h4 className="font-semibold underline header4">Phase 3</h4>
          <div className="flex flex-col gap-6 text-gray-500 lg:gap-8">
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Book crowdfunding</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Lending and borrowing</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Book exchange update</span>
            </div>
            <div className="flex gap-3">
              <Bullet />
              <span className="header6">Publish ePubs as NFT eBooks</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeRoadMap;
