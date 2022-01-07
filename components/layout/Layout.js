import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useRouter } from "next/router";

import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Modal from "../shared/game_details/Modal";

function Layout({ children }) {
  const { themeState } = useContext(ThemeContext);
  const { appState, appDispatch } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      console.log("Starting...");
      appDispatch({ type: "LOADING" });
    };

    const handleStop = () => {
      console.log("Finished...");
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, []);

  return (
    <>
      <Modal />
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
        <Navbar />
        <div className="page grid grid--sidebar">
          <MobileMenu />
          <Sidebar />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
