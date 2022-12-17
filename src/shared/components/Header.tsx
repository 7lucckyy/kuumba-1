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
    <header className="shadow horizontal-padding horizontal-margin shadow-gray-200">
      <div className="flex items-center justify-between py-4">
        <GiHamburgerMenu
          className="inline-block text-3xl cursor-pointer lg:hidden"
          onClick={toggleDrawer}
        />
        <Logo />
        <motion.div
          className="items-center hidden gap-6 lg:flex"
          variants={horizontalSliderList}
          initial="initial"
          animate="animate"
        >
          {navItems.map((link, index) => (
            <Link key={index} href={link.route}>
              <motion.a
                className="text-gray-500 hover:text-info"
                custom={index}
                variants={horizontalSliderItem}
              >
                {link.title}
              </motion.a>
            </Link>
          ))}
        </motion.div>
        <motion.div
          className="items-center hidden gap-6 lg:flex"
          variants={horizontalSliderList}
          initial="initial"
          animate="animate"
        >
          <Link href={Routes.PUBLISH}>
            <motion.a
              className="btn btn-accent hover:text-primary-content body-medium"
              custom={0}
              variants={horizontalSliderItem}
            >
              Publish
            </motion.a>
          </Link>
          <motion.button
            className="btn btn-primary body-medium"
            custom={1}
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
