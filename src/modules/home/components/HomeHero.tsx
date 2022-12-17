import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent } from "react";
import transitionHorizontal from "../../../shared/animations/transition_horizontal";
import transitionToLeft from "../../../shared/animations/transition_to_left";
import transitionToRight from "../../../shared/animations/transition_to_right";
import AppDownloadLinks from "../../../shared/components/AppDownloadLinks";

interface HomeHeroProps {}

const HomeHero: FunctionComponent<HomeHeroProps> = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 lg:flex-row horizontal-margin horizontal-padding bg-gradient-to-r from-base-100 via-[#F8F4F0] to-[#EDF8F6] py-16 sm:py-24 md:py-30 lg:py-36"
      variants={transitionHorizontal}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div
        className="w-full lg:basis-1/2"
        custom={180}
        variants={transitionToRight}
      >
        <div className="flex flex-col gap-6">
          <h2 className="font-extrabold header2">
            Pay per page. <br /> Let&apos;s be honest, you don&apos;t always{" "}
            <span className="text-primary">finish the book...</span>
          </h2>
          <p className="header6 lg:w-3/4">
            The first SocialFi eBook platform dedicated to promoting lifelong
            reading and learning Globally.
          </p>

          <AppDownloadLinks />
        </div>
        <div className="flex items-center gap-4 mt-12 sm:mt-16 md:mt-20 lg:mt-28">
          <Image
            src="/img/george_martin.svg"
            alt="Image of George Martin"
            width={75}
            height={75}
          />
          <div className="flex flex-col gap-1.5 leading-3">
            <p className="leading-4 small-medium lg:w-2/3">
              &quot;A reader lives a thousand lives before he dies, said Jojen.
              A man who never reads lives only one&quot;
            </p>
            <span className="text-gray-500 tiny">- George R. R. Martin</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-full lg:basis-1/2"
        custom={180}
        variants={transitionToLeft}
      >
        <Image
          src="/img/home_hero_mockups.svg"
          alt="Iphone mockups from home hero section"
          width={950}
          height={950}
        />
      </motion.div>
    </motion.section>
  );
};

export default HomeHero;
