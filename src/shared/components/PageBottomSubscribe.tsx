import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import transitionToRight from "../animations/transition_to_right";
import transitionHorizontal from "../animations/transition_horizontal";
import MailchimpForm from "./Mailchimp";

interface PageBottomSubscribeProps {}

const PageBottomSubscribe: FunctionComponent<PageBottomSubscribeProps> = () => {

  return (
    <motion.section
      className="bg-[#4169E1] horizontal-margin py-14 px-4 md:px-8 lg:px-12"
      variants={transitionHorizontal}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="w-full mx-auto text-center text-white md:w-4/5 xl:w-3/5">
        <motion.div custom={180} variants={transitionToRight}>
          <h2 className="mb-4 font-medium header2">
            If you are interested in promoting lifelong reading and learning
          </h2>
          <p className="w-4/5 mx-auto md:w-3/5 header6">
            Are you an author, publisher or an agency? Get in touch with us at{" "}
            <span className="font-semibold">publish@kuumba.com</span>
          </p>
        </motion.div>
        <MailchimpForm/>
      </div>
    </motion.section>
  );
};

export default PageBottomSubscribe;
