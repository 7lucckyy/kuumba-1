import Link from "next/link";
import { FunctionComponent } from "react";
import Routes from "../constants/routes";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDrawerContext } from "../contexts/DrawerContext";
import Logo from "./Logo";
import navItems from "../utils/nav_items";
import { motion } from "framer-motion";
import horizontalSliderVariant from "../animations/horizontal_slider_variant";

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
        <div className="items-center hidden gap-6 lg:flex">
          {navItems.map((link, index) => (
            <Link key={index} href={link.route}>
              <motion.a
                className="text-gray-500 hover:text-info"
                custom={index}
                variants={horizontalSliderVariant}
                initial="initial"
                whileInView="animate"
                // animate="animate"
              >
                {link.title}
              </motion.a>
            </Link>
          ))}
        </div>
        <div className="items-center hidden gap-6 lg:flex">
          <Link href={Routes.PUBLISH}>
            <motion.a
              className="btn btn-accent hover:text-primary-content body-medium"
              custom={0}
              variants={horizontalSliderVariant}
              initial="initial"
              whileInView="animate"
              // animate="animate"
            >
              Publish
            </motion.a>
          </Link>
          <motion.button
            className="btn btn-primary body-medium"
            custom={1}
            variants={horizontalSliderVariant}
            initial="initial"
            whileInView="animate"
            // animate="animate"
          >
            Request early access
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
