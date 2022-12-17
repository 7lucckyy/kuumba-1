import { FunctionComponent } from "react";
import Image from "next/image";
import Bullet from "../../../shared/components/Bullet";
import transitionToRight from "../../../shared/animations/transition_to_right";
import { motion } from "framer-motion";
import transitionToLeft from "../../../shared/animations/transition_to_left";
import transitionHorizontal from "../../../shared/animations/transition_horizontal";

interface HomeBookSharingProps {}

const HomeBookSharing: FunctionComponent<HomeBookSharingProps> = () => {
  return (
    <motion.section
      className="flex flex-col gap-4 lg:items-center sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 lg:flex-row-reverse"
      variants={transitionHorizontal}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col w-full gap-4 basis-1/2"
        custom={180}
        variants={transitionToLeft}
      >
        <h4 className="font-semibold header4">Book sharing made easier</h4>
        <p className="text-gray-500 header6">
          Want to read a book, but don&apos;t have access to it? Why don&apos;t
          you ask your fellow bookmongers.
        </p>
        <div className="flex flex-col gap-4 mt-4 text-gray-500 md:gap-6 xl:gap-8 sm:mt-6 md:mt-8 xl:mt-10">
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Borrow</span>
          </div>
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Lend</span>
          </div>
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Crowdfund</span>
          </div>
          <div className="flex gap-3">
            <Bullet />
            <span className="header6">Read and elevate</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-full basis-1/2"
        custom={180}
        variants={transitionToRight}
      >
        <Image
          src="/img/home_book_sharing_mockups.svg"
          alt="Iphone mockups from home book sharing section"
          width={750}
          height={750}
        />
      </motion.div>
    </motion.section>
  );
};

export default HomeBookSharing;
