import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import {  GrFormClose } from "react-icons/gr";
import Link from "next/link";
import { IDrawerContext } from "../types/interfaces";
import Routes from "../constants/routes";
import navItems from "../utils/nav_items";

const DrawerContext = createContext<IDrawerContext>({
  toggleDrawer: () => {},
});

export const useDrawerContext = () => useContext(DrawerContext);

const DrawerContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <DrawerContext.Provider
      value={{
        toggleDrawer: toggleDrawer,
      }}
    >
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        size={240}
        direction="right"
        className="hide-drawer"
        customIdSuffix="-kuumba-mobile-drawer"
      >
        <div className="flex flex-col gap-6">
          <div className="flex justify-end mb-14">
            <GrFormClose
              className="text-5xl cursor-pointer"
              onClick={toggleDrawer}
            />
          </div>

          <div className="flex flex-col items-center gap-6 px-6">
            <Link href={Routes.PUBLISH}>
              <a className="w-full btn btn-accent hover:text-primary-content btn-sm body-medium">Publish</a>
            </Link>
            <button className="w-full btn btn-primary btn-sm body-medium">
              Request early access
            </button>
          </div>

          <ul className="w-full p-2 menu rounded-box">
            {navItems.map((item, index) => (
              <li key={index} onClick={toggleDrawer}>
                <Link href={item.route}>
                  <a className="text-2xl">
                    <span className="text-xl">{item.title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
