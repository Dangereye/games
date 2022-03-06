import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FiltersContext } from "../../contexts/FiltersContext";
import { useRouter } from "next/router";

import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Modal from "./modal/Modal";

function Layout({ children }) {
  const { themeState } = useContext(ThemeContext);
  const { appState, appDispatch } = useContext(AppContext);
  const { filtersDispatch } = useContext(FiltersContext);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      appDispatch({ type: "MOBILE_MENU", payload: false });
      filtersDispatch({ type: "CLOSE_MENUS" });
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
        <div
          className="layout__background"
          style={{
            backgroundImage: appState.data.background_image
              ? `url(${appState.data.background_image})`
              : "none",
          }}
        >
          <div
            className="layout__background__overlay"
            style={{
              background: themeState.background.gradient,
            }}
          ></div>
        </div>
        <div
          className="page grid grid--sidebar"
          onClick={() => filtersDispatch({ type: "CLOSE_MENUS" })}
        >
          <Sidebar />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
