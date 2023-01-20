import { Variants } from "framer-motion"; 


export const list: Variants = {
    start: { 
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.2,
        }
    },
    stop: { 
        transition: {
            when: "afterChildren",
        }
    },
  }
  
export const item: Variants = {
    start: { 
      y: -10,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 0.2
      }
    },
    stop: { y: "auto" },
  }