import { Variants } from "framer-motion";

const transitionToLeft: Variants = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export default transitionToLeft;
