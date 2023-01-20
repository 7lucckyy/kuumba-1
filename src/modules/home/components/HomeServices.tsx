import { FunctionComponent } from "react";

import { motion } from "framer-motion";
import horizontalSliderList from "../../../shared/animations/horizontal_slider_list";
import HomeService from "./HomeService";
import homeServicesItems from "../../../shared/utils/home_services_items";

interface HomeServicesProps {}

const HomeServices: FunctionComponent<HomeServicesProps> = () => {
  return (
    <motion.section
      className="flex flex-col gap-3 p-6 lg:flex-row md:gap-6 lg:gap-6 md:p-10 lg:p-16 rounded-2xl"
      variants={horizontalSliderList}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {homeServicesItems.map((item, index) => (
        <HomeService
          key={index}
          index={index}
          title={item.title}
          imageUrl={item.imageUrl}
          description={item.description}
        />
      ))}
    </motion.section>
  );
};

export default HomeServices;
