import { Variants } from "framer-motion";

const transitionToUp: Variants = {
  initial: { y: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export default transitionToUp;
