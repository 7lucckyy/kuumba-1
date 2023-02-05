import { FunctionComponent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import horizontalSliderList from "../animations/horizontal_slider_list";
import horizontalSliderItem from "../animations/horizontal_slider_item";

interface AppDownloadLinksProps {}

const AppDownloadLinks: FunctionComponent<AppDownloadLinksProps> = () => {
  return (
    <motion.div
      className="flex flex-wrap gap-2 md:gap-3 lg:gap-4"
      variants={horizontalSliderList}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.button
        className="btn btn-link !px-0"
        custom={0}
        variants={horizontalSliderItem}
      >
        <Image
          src="/img/appstore_coming_soon.svg"
          alt="Appstore download link"
          width={140}
          height={40}
        />
      </motion.button>
      <motion.button
        className="btn btn-link !px-0"
        custom={1}
        variants={horizontalSliderItem}
      >
        <Image
          src="/img/googleplay_coming_soon.svg"
          alt="Google Playstore download link"
          width={140}
          height={40}
        />
      </motion.button>
      <motion.a
        className="btn btn-link !px-0"
        custom={2}
        variants={horizontalSliderItem}
        target="_blank"
        href="https://www.figma.com/proto/MuwER2UVdd1TxlhxTuZqeS/Kuumba-ebook-mobile-app?node-id=235%3A1264&scaling=min-zoom&page-id=1%3A3&starting-point-node-id=8%3A10&show-proto-sidebar=1"
      >
        <Image
          src="/img/demo.svg"
          alt="App demo download link"
          width={140}
          height={40}
        />
      </motion.a>
    </motion.div>
  );
};

export default AppDownloadLinks;
