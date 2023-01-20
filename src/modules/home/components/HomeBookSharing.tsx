import { FunctionComponent } from "react";
import Image from "next/image";
import { motion } from "framer-motion"

import Bullet from "../../../shared/components/Bullet";
import { list, item as variantItem } from "../../../shared/constants/framer-motion-variants";

interface HomeBookSharingProps {}

const HomeBookSharing: FunctionComponent<HomeBookSharingProps> = () => {
  return (
    <section className="flex flex-col gap-10 lg:flex-row sm:gap-16 md:gap-24 lg:gap-32 xl:gap-36">
      <div className="flex flex-col w-full gap-4">
        <h4 className="font-semibold header4">Book sharing made easier</h4>
        <p className="text-gray-500 header6">
          Want to read a book, but don&apos;t have access to it? Why don&apos;t
          you ask your fellow bookmongers.
        </p>
        <motion.div initial="stop"whileInView="start" variants={list} viewport={{ once: true, amount: 0.8 }} className="flex flex-col gap-4 mt-4 text-gray-500 md:gap-6 xl:gap-8 sm:mt-6 md:mt-8 xl:mt-10">
        {["Borrow", "Lend", "Crowdfund", "Read and elevate"]
          .map(item => (
              <motion.div variants={variantItem} key={item} className="flex gap-3">
                <Bullet />
                <span className="header6">{item}</span>
              </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="bg-[#F5F6FF] rounded-2xl w-full"></div>
    </section>
  );
};

export default HomeBookSharing;
