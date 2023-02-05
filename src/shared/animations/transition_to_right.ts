import { Variants } from "framer-motion";

const transitionToRight: Variants = {
  initial: (i) => ({ x: -i, opacity: 0 }),
  animate: { x: 0, opacity: 1 },
};

export default transitionToRight;
