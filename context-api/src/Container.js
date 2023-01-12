import React from "react";
import CgangeLang from "./components/CgangeLang";
import ChangeThemes from "./components/ChangeThemes";
import Footer from "./components/Footer";
import { useTheme } from "./contexts/ThemeContext";

function Container() {
  const { theme } = useTheme();
  return (
    <div className={`container ${theme}`}>
      <ChangeThemes />
      <hr />
      <CgangeLang />
      <Footer />
    </div>
  );
}

export default Container;
