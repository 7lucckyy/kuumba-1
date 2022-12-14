import { Variants } from "framer-motion";

const horizontalSliderVariant: Variants = {
  initial: (i) => ({ x: (i + 0.5) * -60, opacity: 0 }),
  animate: (i) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.75 },
  }),
};

export default horizontalSliderVariant;
