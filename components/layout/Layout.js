import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FiltersContext } from "../../contexts/FiltersContext";
import { useRouter } from "next/router";
import useLocalStorage from "../../hooks/useLocalStorage";

import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Modal from "./modal/Modal";
import Image from "next/image";

function Layout({ children }) {
  const { themeState } = useContext(ThemeContext);
  const { appState, appDispatch } = useContext(AppContext);
  const { filtersState, filtersDispatch } = useContext(FiltersContext);
  const router = useRouter();
  const {} = useLocalStorage();

  const closeOpenMenus = () => {
    if (
      filtersState.ordering.menu ||
      filtersState.years.menu ||
      filtersState.genres.menu
    ) {
      filtersDispatch({ type: "CLOSE_MENUS" });
    }
  };

  useEffect(() => {
    const handleStart = () => {
      if (appState.mobileMenu_isOpen) {
        appDispatch({ type: "MOBILE_MENU", payload: false });
      }
      if (
        filtersState.ordering.menu ||
        filtersState.years.menu ||
        filtersState.genres.menu
      ) {
        filtersDispatch({ type: "CLOSE_MENUS" });
      }
      appDispatch({ type: "LOADING" });
    };

    const handleStop = () => {
      return;
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  });

  return (
    <>
      <Modal />
      <MobileMenu />
      <Navbar />
      <div
        className="layout"
        style={{
          backgroundColor: themeState.background.primary,
        }}
      >
        {appState.data.background_image && (
          <div className="layout__background">
            <div className="layout__background__image">
              <Image
                src={appState.data.background_image}
                layout="fill"
                priority
              />
            </div>
            <div
              className="layout__background__overlay"
              style={{
                background: themeState.background.gradient,
              }}
            ></div>
          </div>
        )}
        <div className="page grid grid--sidebar" onClick={closeOpenMenus}>
          <Sidebar />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
