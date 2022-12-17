import { FunctionComponent } from "react";
import Image from "next/image";
import Bullet from "../../../shared/components/Bullet";
import { motion } from "framer-motion";
import transitionToRight from "../../../shared/animations/transition_to_right";
import transitionToLeft from "../../../shared/animations/transition_to_left";
import transitionHorizontal from "../../../shared/animations/transition_horizontal";

interface HomeSomethingBiggerProps {}

const HomeSomethingBigger: FunctionComponent<HomeSomethingBiggerProps> = () => {
  return (
    <motion.section
      className="flex flex-col gap-4 lg:items-center sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 lg:flex-row"
      variants={transitionHorizontal}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col w-full gap-4 basis-1/2"
        custom={180}
        variants={transitionToRight}
      >
        <h4 className="font-semibold header4">
          Become part of something bigger than yourself
        </h4>
        <p className="text-gray-500 header6">
          Tune into exclusive podcasts created by your favorite creators around
          the globe and connect with readers around the globe
        </p>
        <div className="flex flex-col gap-4 mt-4 text-gray-500 md:gap-6 xl:gap-8 sm:mt-6 md:mt-8 xl:mt-10">
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Connect in realtime dialogue</span>
          </div>
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Learn new things</span>
          </div>
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">
              Become part of something bigger than yourself
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-full basis-1/2"
        custom={180}
        variants={transitionToLeft}
      >
        <Image
          src="/img/home_something_bigger_mockups.svg"
          alt="Iphone mockups from home something bigger section"
          width={750}
          height={750}
        />
      </motion.div>
    </motion.section>
  );
};

export default HomeSomethingBigger;
