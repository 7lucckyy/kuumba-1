import { Variants } from "framer-motion";

const horizontalSliderItem: Variants = {
  initial: (i) => ({ x: (i + 0.5) * -60, opacity: 0 }),
  animate: { x: 0, opacity: 1, transition: { ease: "linear" } },
};

export default horizontalSliderItem;
