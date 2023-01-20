import { FunctionComponent } from "react";
import { motion } from "framer-motion"; 

import Bullet from "../../../shared/components/Bullet";
import { list, item } from "../../../shared/constants/framer-motion-variants";

interface HomeRoadMapProps {}

const roadmaps: Array<{phase: number; content: string[]}> = [
  { phase: 1, content: [
    "Planning and research",
    "Team building",
    "Prototyping",
    "Design"
  ] },
  { phase: 2, content: [
    "Development",
    "Wallet integration",
    "Microtransaction integration",
    "Community"
  ] },
  { phase: 3, content: [
    "Book crowdfunding",
    "Lending and borrowing",
    "Book exchange update",
    "Publish ePubs as NFT eBooks"
  ] },
]

const HomeRoadMap: FunctionComponent<HomeRoadMapProps> = () => {
  return (
    <section className="flex flex-col gap-16">
      <div className="text-center">
        <h2 className="mb-3 font-bold sm:mb-4 md:mb-5 lg:mb-6 header2">
          Roadmap
        </h2>
        <span className="text-gray-800 header6">
          We are still in the idea phase and still developing our road
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-4 xl:flex-nowrap md:gap-6 lg:gap-8">
        {roadmaps.map(roadmap => (
          <motion.div initial="stop"whileInView="start"variants={list} viewport={{ once: true, amount: 0.8 }} key={roadmap.phase} 
          className="bg-[#F5F6FF] flex-grow xl:flex-grow-0 xl:w-full rounded-2xl py-6 md:py-8 lg:py-10 flex flex-col gap-5 md:gap-8 lg:gap-10 xl:gap-12 px-4 md:px-6 lg:px-8">
            <h4 className="font-semibold underline header4">Phase {roadmap.phase}</h4>
            <div className="flex flex-col gap-6 text-gray-500 lg:gap-8">
              {roadmap.content.map(point => (
                <motion.div variants={item} key={point} className="flex gap-3">
                  <Bullet />
                  <span className="header6">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeRoadMap;
