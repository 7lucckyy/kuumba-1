import Link from "next/link";
import { FunctionComponent } from "react";
import Routes from "../constants/routes";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDrawerContext } from "../contexts/DrawerContext";
import Logo from "./Logo";
import navItems from "../utils/nav_items";
import { motion } from "framer-motion";
import horizontalSliderList from "../animations/horizontal_slider_list";
import horizontalSliderItem from "../animations/horizontal_slider_item";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const { toggleDrawer } = useDrawerContext();

  return (
    <header className="fixed z-50 w-full bg-gradient-to-r from-base-100 via-[#F8F4F0] to-[#EDF8F6] horizontal-padding horizontal-margin">
      <div className="flex items-center justify-between py-4">
        <Logo />
        <GiHamburgerMenu
          className="inline-block text-3xl cursor-pointer lg:hidden"
          onClick={toggleDrawer}
        />
        <motion.div
          className="items-center hidden gap-6 lg:flex"
          variants={horizontalSliderList}
          initial="initial"
          animate="animate"
        >
          <div className="flex gap-6 mr-16">
            {navItems.map((link, index) => (
              <motion.a
                key={index}
                className="text-gray-500 hover:text-info"
                href={link.route}
                custom={index}
                variants={horizontalSliderItem}
              >
                {link.title}
              </motion.a>
            ))}
          </div>
          <Link href={Routes.PUBLISH}>
            <motion.a
              className="btn btn-accent hover:text-primary-content body-medium"
              custom={3}
              variants={horizontalSliderItem}
            >
              Publish
            </motion.a>
          </Link>
          <motion.button
            className="btn btn-primary body-medium"
            custom={4}
            variants={horizontalSliderItem}
          >
            Request early access
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
