import { Variants } from "framer-motion";

const transitionToLeft: Variants = {
  initial: (i) => ({ x: i, opacity: 0 }),
  animate: { x: 0, opacity: 1 },
};

export default transitionToLeft;
